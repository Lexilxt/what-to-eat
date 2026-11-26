/* home.js —— 首页：美食盲盒（筛选 / 两阶段抽取 / 礼盒动画 / 结果） */

const Home = (() => {
  /* 会话内保留，刷新恢复默认（不持久化） */
  const filters = { canteen: 'all', c1cat: null, budget: null, dishType: 'all' };
  const round = { seen: new Set(), last: null };
  let timers = [];
  let drawing = false;
  let openPop = null;

  const CANTEEN_LABEL = { all: '全部食堂', c1: '一食堂', c2: '二食堂', c3: '三食堂' };
  const TYPE_LABEL = {
    all: '全部菜品', normal: '普通菜品', breakfast: '早餐',
    set: '套餐', single: '单点', malatang: '麻辣烫', hotpot: '火锅'
  };
  function budgetLabel() {
    if (filters.budget == null) return '预算不限';
    return filters.budget + '元以内';
  }
  function canteenLabel() {
    let s = CANTEEN_LABEL[filters.canteen];
    if (filters.canteen === 'c1' && filters.c1cat) {
      s += '·' + (filters.c1cat === 'breakfast' ? '早餐' : '日常菜品');
    }
    return s;
  }

  /* ---------- 抽取池 ---------- */
  function dishPass(d, isC1) {
    if (filters.dishType !== 'all') {
      if (filters.dishType === 'malatang' || filters.dishType === 'hotpot') return false;
      if ((d.type || 'normal') !== filters.dishType) return false;
    }
    if (!isC1 && filters.budget != null && d.price != null && d.price > filters.budget) return false;
    return true;   // 一食堂缺价菜品不受预算筛选影响
  }
  function buildWindows() {
    const wins = [];
    const specialOK = t => filters.dishType === 'all' || filters.dishType === t;
    if (filters.canteen === 'all' || filters.canteen === 'c1') {
      let dishes = [];
      for (const cat of MENU.c1.categories) {
        if (filters.c1cat && cat.id !== filters.c1cat) continue;
        dishes = dishes.concat(cat.dishes.filter(d => dishPass(d, true)));
      }
      dishes = dishes.filter(d => !round.seen.has(d.id));
      if (dishes.length) wins.push({ key: 'c1', canteen: '一食堂', stall: '菜单', dishes });
    }
    if (filters.canteen === 'all' || filters.canteen === 'c2') {
      for (const s of MENU.c2.stalls) {
        if (s.special === 'malatang') {
          if (specialOK('malatang') && !round.seen.has('sp:malatang')) {
            wins.push({ key: 'c2:malatang', special: 'malatang', canteen: '二食堂', stall: s.name, img: 'assets/img/麻辣烫.png' });
          }
          continue;
        }
        const dishes = s.dishes.filter(d => dishPass(d, false) && !round.seen.has(d.id));
        if (dishes.length) wins.push({ key: 'c2:' + s.id, canteen: '二食堂', stall: s.name, dishes });
      }
    }
    if (filters.canteen === 'all' || filters.canteen === 'c3') {
      const dishes = MENU.c3.stirfry.filter(d => dishPass(d, false) && !round.seen.has(d.id));
      if (dishes.length) wins.push({ key: 'c3:stirfry', canteen: '三食堂', stall: '炒菜', dishes });
      if (specialOK('hotpot') && !round.seen.has('sp:hotpot')) {
        wins.push({ key: 'c3:hotpot', special: 'hotpot', canteen: '三食堂', stall: '火锅', img: 'assets/img/火锅.png' });
      }
    }
    return wins;
  }
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];

  function drawFrom(wins) {
    const win = pick(wins);                       // 第一阶段：窗口等概率
    if (win.special) {
      round.seen.add('sp:' + win.special);
      return {
        kind: 'special', special: win.special, windowKey: win.key, img: win.img,
        name: win.special === 'malatang' ? '麻辣烫自由搭配' : '火锅自由搭配',
        canteen: win.canteen, stall: win.stall, price: null
      };
    }
    const dish = pick(win.dishes);                // 第二阶段：窗口内随机菜品
    round.seen.add(dish.id);
    return {
      kind: 'dish', dishId: dish.id, windowKey: win.key, img: dish.img,
      name: dish.name, price: dish.price,
      canteen: win.canteen, stall: win.stall, isC1: win.key === 'c1'
    };
  }

  /* ---------- 渲染 ---------- */
  function render(root) {
    root.innerHTML = `
    <header class="brand">
      
      <div class="brand-text">
        <strong>今天吃什么？</strong>
        <span>WHAT TO EAT TODAY</span>
      </div>
      <em class="brand-tag">校园美食盲盒</em>
    </header>

    <section class="hero">
      <h1>让今天的美味，<br>交给饭团团！</h1>
      <p>不知道吃什么也没关系，让饭团团为你发现今天的美味。</p>
    </section>

    <section class="filters" id="filters">
      <div class="filter-cell">
        <button class="filter-btn" data-pop="canteen"><span>${UI.esc(canteenLabel())}</span>${caret()}</button>
        <div class="pop" data-popbox="canteen"></div>
      </div>
      <div class="filter-cell">
        <button class="filter-btn" data-pop="budget"><span>${UI.esc(budgetLabel())}</span>${caret()}</button>
        <div class="pop" data-popbox="budget"></div>
      </div>
      <div class="filter-cell">
        <button class="filter-btn" data-pop="type"><span>${UI.esc(TYPE_LABEL[filters.dishType])}</span>${caret()}</button>
        <div class="pop" data-popbox="type"></div>
      </div>
    </section>

    <section class="scene" id="scene">
      <div class="pedestal"></div>
      <div class="boxwrap">
        <div class="giftbox">
          <div class="gb-body"><span class="gb-emboss">WHAT TO<br>EAT TODAY</span></div>
          <div class="gb-ribbon"></div>
          <div class="gb-lid"><i class="gb-bow"></i></div>
        </div>
        
      </div>
      <div class="foodwrap">
        <div class="food-glow"></div>
        <img class="food-img" alt="">
      </div>
      <button class="skip-btn" id="skip" hidden>跳过动画</button>
    </section>

    <div class="draw-cta">
      <button class="btn btn-primary btn-big" id="draw">让饭团团帮我抽！</button>
    </div>

    <section class="result" id="result" hidden>
      <h2 class="r-name"></h2>
      <div class="r-price"></div>
      <div class="r-meta"></div>
      <div class="r-btns">
        <button class="btn btn-ghost" id="again">再抽一次</button>
        <button class="btn btn-primary" id="result-add">加入今日餐盘</button>
      </div>
    </section>

    <section class="failbox" id="failbox" hidden>
      <p>哎呀，这个条件下暂时没有找到合适的美食呢～试着放宽一点条件吧！</p>
      <div class="r-btns">
        <button class="btn btn-ghost" id="fail-adjust">调整筛选</button>
        <button class="btn btn-primary" id="fail-clear">清除筛选</button>
      </div>
    </section>

    <footer class="home-foot">三个食堂 · ${MENU.c1.categories.reduce((n, c) => n + c.dishes.length, 0) + MENU.c2.stalls.reduce((n, s) => n + s.dishes.length, 0) + MENU.c3.stirfry.length + MENU.c3.hotpot.groups.reduce((n, g) => n + g.items.length, 0) + MENU.c3.hotpot.bases.length} 条菜单记录 · 饭团团陪你好好吃饭</footer>`;

    bindFilters(root);
    root.querySelector('#draw').addEventListener('click', () => startDraw(true));
    root.querySelector('#skip').addEventListener('click', finishAnimation);
    root.querySelector('#again').addEventListener('click', onAgain);
    root.querySelector('#result-add').addEventListener('click', onResultAdd);
    root.querySelector('#fail-adjust').addEventListener('click', () => {
      root.querySelector('#filters').scrollIntoView({ behavior: 'smooth', block: 'center' });
      togglePop('canteen', root);
    });
    root.querySelector('#fail-clear').addEventListener('click', () => {
      filters.canteen = 'all'; filters.c1cat = null; filters.budget = null; filters.dishType = 'all';
      round.seen.clear(); round.last = null;
      refreshFilterLabels(root);
      resetScene(root);
      UI.toast('已恢复默认筛选～');
    });
    document.addEventListener('click', outsideClose);
  }

  const caret = () => '<svg viewBox="0 0 12 12" width="10" height="10"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';

  function refreshFilterLabels(root) {
    root.querySelector('[data-pop=canteen] span').textContent = canteenLabel();
    root.querySelector('[data-pop=budget] span').textContent = budgetLabel();
    root.querySelector('[data-pop=type] span').textContent = TYPE_LABEL[filters.dishType];
  }

  /* ---------- 筛选浮层 ---------- */
  function bindFilters(root) {
    root.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        togglePop(btn.dataset.pop, root);
      });
    });
  }
  function outsideClose(e) {
    if (openPop && !e.target.closest('.filter-cell')) closePop();
  }
  function closePop() {
    if (!openPop) return;
    document.querySelectorAll('.pop.open').forEach(p => p.classList.remove('open'));
    document.querySelectorAll('.filter-btn.active').forEach(b => b.classList.remove('active'));
    openPop = null;
  }
  function togglePop(name, root) {
    if (openPop === name) { closePop(); return; }
    closePop();
    openPop = name;
    const box = root.querySelector('[data-popbox=' + name + ']');
    const btn = root.querySelector('[data-pop=' + name + ']');
    btn.classList.add('active');
    box.innerHTML = popContent(name);
    box.classList.add('open');
    box.querySelectorAll('[data-val]').forEach(opt => {
      opt.addEventListener('click', () => {
        applyFilter(name, opt.dataset.val);
        refreshFilterLabels(root);
        if (name === 'canteen' && opt.dataset.val === 'c1') { togglePop('canteen', root); return; }
        closePop();
      });
    });
    const custom = box.querySelector('#custom-budget-ok');
    if (custom) custom.addEventListener('click', () => {
      const v = parseFloat(box.querySelector('#custom-budget').value);
      if (!isNaN(v) && v > 0) {
        filters.budget = Math.round(v * 100) / 100;
        refreshFilterLabels(root);
        closePop();
      } else UI.toast('请输入大于 0 的金额哦～');
    });
    box.querySelectorAll('[data-cat]').forEach(chip => {
      chip.addEventListener('click', () => {
        filters.c1cat = filters.c1cat === chip.dataset.cat ? null : chip.dataset.cat;
        refreshFilterLabels(root);
        togglePop('canteen', root);
      });
    });
  }
  function popContent(name) {
    const item = (val, label, on) =>
      '<button class="pop-item' + (on ? ' on' : '') + '" data-val="' + val + '">' + UI.esc(label) + '</button>';
    if (name === 'canteen') {
      let html = ['all', 'c1', 'c2', 'c3'].map(v => item(v, CANTEEN_LABEL[v], filters.canteen === v)).join('');
      if (filters.canteen === 'c1') {
        html += '<div class="pop-sub">一食堂分类（可不选）</div><div class="pop-chips">' +
          '<button class="chip' + (filters.c1cat === 'breakfast' ? ' on' : '') + '" data-cat="breakfast">早餐</button>' +
          '<button class="chip' + (filters.c1cat === 'daily' ? ' on' : '') + '" data-cat="daily">日常菜品</button></div>';
      }
      return html;
    }
    if (name === 'budget') {
      return [null, 10, 15, 20].map(v =>
        item(v == null ? 'null' : String(v), v == null ? '不限' : v + '元以内', filters.budget === v)).join('') +
        '<div class="pop-custom"><input id="custom-budget" type="number" min="1" step="0.5" placeholder="自定义金额" inputmode="decimal">' +
        '<button class="btn btn-primary btn-sm" id="custom-budget-ok">确定</button></div>';
    }
    return Object.keys(TYPE_LABEL).map(v => item(v, TYPE_LABEL[v], filters.dishType === v)).join('');
  }
  function applyFilter(name, val) {
    if (name === 'canteen') {
      if (filters.canteen !== val) filters.c1cat = null;   // 切换食堂清除不适用分类
      filters.canteen = val;
    } else if (name === 'budget') {
      filters.budget = val === 'null' ? null : Number(val);
    } else {
      filters.dishType = val;
    }
  }

  /* ---------- 抽取与动画 ---------- */
  function clearTimers() { timers.forEach(clearTimeout); timers = []; }
  function later(fn, ms) { timers.push(setTimeout(fn, ms)); }

  function resetScene(root) {
    clearTimers();
    drawing = false;
    const scene = root.querySelector('#scene');
    scene.className = 'scene';
    root.querySelector('#result').hidden = true;
    root.querySelector('#failbox').hidden = true;
    root.querySelector('#skip').hidden = true;
    root.querySelector('.draw-cta').hidden = false;
  }

  function startDraw(freshRound, forcedResult) {
    const root = document.getElementById('page');
    if (drawing) return;
    if (freshRound) { round.seen.clear(); }
    const wins = buildWindows();
    if (!wins.length && !forcedResult) { showFail(root); return; }

    const result = forcedResult || drawFrom(wins);
    round.last = result;
    drawing = true;

    const scene = root.querySelector('#scene');
    scene.className = 'scene';
    root.querySelector('#result').hidden = true;
    root.querySelector('#failbox').hidden = true;
    root.querySelector('.draw-cta').hidden = true;
    root.querySelector('#skip').hidden = false;

    Mascot.mood('lean');
    later(() => scene.classList.add('shaking'), 120);
    later(() => { scene.classList.add('open'); Mascot.mood('hop'); }, 750);
    later(() => showResult(root, result), 1500);
    pendingResult = result;
  }
  let pendingResult = null;

  function finishAnimation() {
    if (!drawing) return;
    clearTimers();
    showResult(document.getElementById('page'), pendingResult);
  }

  function showResult(root, result) {
    clearTimers();
    drawing = false;
    const scene = root.querySelector('#scene');
    scene.className = 'scene open has-result';
    root.querySelector('#skip').hidden = true;

    const img = scene.querySelector('.food-img');
    img.src = result.img;
    img.alt = result.name;

    const box = root.querySelector('#result');
    box.hidden = false;
    box.querySelector('.r-name').textContent = result.name;
    const priceEl = box.querySelector('.r-price');
    if (result.kind === 'special') {
      priceEl.innerHTML = '<span class="r-price-note">自由搭配 · 价格由你决定</span>';
    } else if (result.price == null) {
      priceEl.innerHTML = '<span class="r-price-note">价格暂未收录</span>';
    } else {
      priceEl.textContent = UI.yuan(result.price);
    }
    box.querySelector('.r-meta').textContent = result.canteen + ' · ' + result.stall;

    const addBtn = box.querySelector('#result-add');
    if (result.kind === 'special') {
      addBtn.textContent = '继续搭配';
      Mascot.say(result.special === 'malatang' ? '抽中麻辣烫啦！去挑喜欢的食材吧～' : '抽中火锅啦！今天吃点热乎的～', 'hop');
    } else {
      addBtn.textContent = '加入今日餐盘';
      Mascot.mood('hop');
      if (result.isC1) {
        setTimeout(() => Mascot.say('这道菜的价格暂时还没有收录哦，记得去食堂确认一下～', 'gentle'), 900);
      }
    }

    /* 结果未完整显示时平滑滚动，底部留出导航栏高度 */
    requestAnimationFrame(() => {
      const r = box.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom > vh - 100 || r.top < 0) {
        window.scrollBy({ top: r.bottom - vh + 112, behavior: 'smooth' });
      }
    });
  }

  function showFail(root) {
    resetScene(root);
    const scene = root.querySelector('#scene');
    scene.classList.add('shaking');
    setTimeout(() => scene.classList.remove('shaking'), 900);
    Mascot.mood('wiggle');
    root.querySelector('#failbox').hidden = false;
    root.querySelector('.draw-cta').hidden = false;
  }

  function onAgain() {
    const result = round.last;
    if (!result) return;
    if (result.kind === 'special') { startDraw(true); return; }
    const sheet = UI.openSheet(
      '<div class="mini-title">再抽一次</div>' +
      '<button class="btn btn-primary btn-block" data-act="all">重新抽取全部</button>' +
      '<p class="mini-note">重新抽取食堂、档口和菜品，保留筛选条件</p>' +
      '<button class="btn btn-ghost btn-block" data-act="same">只换一道菜</button>' +
      '<p class="mini-note">保留当前食堂和档口，只换一道符合条件的菜</p>'
    );
    sheet.querySelector('[data-act=all]').addEventListener('click', () => { UI.closeSheet(); startDraw(true); });
    sheet.querySelector('[data-act=same]').addEventListener('click', () => { UI.closeSheet(); redrawSame(); });
  }

  function redrawSame() {
    const last = round.last;
    const wins = buildWindows().filter(w => w.key === last.windowKey);
    if (!wins.length) {
      const sheet = UI.openSheet(
        '<div class="mini-title">这个档口暂时没有其他符合条件的菜啦～</div>' +
        '<button class="btn btn-primary btn-block" data-act="all">重新抽取全部</button>'
      );
      sheet.querySelector('[data-act=all]').addEventListener('click', () => { UI.closeSheet(); startDraw(true); });
      Mascot.mood('wiggle');
      return;
    }
    startDraw(false, drawFrom(wins));
  }

  function onResultAdd() {
    const result = round.last;
    if (!result) return;
    if (result.kind === 'special') {
      location.hash = result.special === 'malatang' ? '#/malatang' : '#/hotpot';
      return;
    }
    Tray.addDish(result.dishId);
    UI.toast('已经放进今日餐盘啦！');
    Mascot.mood('nod');
  }

  function cleanup() {
    clearTimers();
    drawing = false;
    closePop();
    document.removeEventListener('click', outsideClose);
  }

  return { render, cleanup };
})();