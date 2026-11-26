/* canteen.js —— 三个食堂页面 + 麻辣烫 / 火锅搭配玩法 */

const Canteen = (() => {

  /* ---------- 通用部件 ---------- */
  function header(title, backHash, sub) {
    return `<header class="page-head">
      <button class="back-btn" data-back="${backHash}" aria-label="返回">
        <svg viewBox="0 0 16 16" width="16" height="16"><path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div class="page-head-text"><h1>${UI.esc(title)}</h1>${sub ? '<span>' + UI.esc(sub) + '</span>' : ''}</div>
      
    </header>`;
  }
  function searchBar(ph) {
    return `<div class="search"><svg viewBox="0 0 16 16" width="14" height="14"><circle cx="7" cy="7" r="4.6" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10.6 10.6L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      <input type="search" placeholder="${UI.esc(ph)}" autocomplete="off"></div>`;
  }
  function dishRow(d) {
    return `<li class="dish-row" data-id="${d.id}">
      <span class="dish-name">${UI.esc(d.name)}${d.note ? '<em class="dish-note">' + UI.esc(d.note) + '</em>' : ''}</span>
      ${d.price != null ? '<span class="dish-price">' + UI.yuan(d.price) + '</span>' : ''}
      <button class="add-btn" data-add="${d.id}" aria-label="加入今日餐盘">＋</button>
    </li>`;
  }
  function bindCommon(root) {
    root.querySelectorAll('[data-back]').forEach(b =>
      b.addEventListener('click', () => { location.hash = b.dataset.back; }));
    root.querySelectorAll('[data-add]').forEach(b =>
      b.addEventListener('click', () => {
        Tray.addDish(b.dataset.add);
        UI.toast('已经放进今日餐盘啦！');
        Mascot.mood('nod');
        b.classList.add('added');
        setTimeout(() => b.classList.remove('added'), 600);
      }));
  }
  function bindSearch(root, listSel, names) {
    const input = root.querySelector('.search input');
    if (!input) return;
    input.addEventListener('input', () => {
      const q = input.value.trim();
      let visible = 0;
      root.querySelectorAll(listSel + ' [data-id]').forEach(row => {
        const hit = !q || row.querySelector('.dish-name, .stall-name').textContent.includes(q);
        row.hidden = !hit;
        if (hit) visible++;
      });
      const empty = root.querySelector('.search-empty');
      if (empty) {
        empty.hidden = visible > 0;
        if (!visible && q) Mascot.mood('wiggle');
      }
    });
  }
  const emptySearch = '<div class="search-empty" hidden><p>没有找到相关的美味呢～换个词试试？</p></div>';

  /* ---------- 一食堂 ---------- */
  function renderC1(root) {
    root.innerHTML = header('一食堂', '#/home', '早餐与日常菜品') + `
      <section class="entry-list">
        ${MENU.c1.categories.map(c => `
          <button class="entry-card" data-go="#/c1/${c.id}">
            <span class="entry-icon">${c.id === 'breakfast' ? sunIcon() : bowlIcon()}</span>
            <span class="entry-text"><strong>${c.name}</strong><em>${c.dishes.length} 道菜品</em></span>
            ${arrow()}
          </button>`).join('')}
      </section>
      <p class="page-note">一食堂价格暂未收录，加入餐盘后可以手动填写实际价格哦～</p>`;
    bindCommon(root);
    root.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => { location.hash = b.dataset.go; }));
  }

  function renderC1List(root, catId) {
    const cat = MENU.c1.categories.find(c => c.id === catId);
    if (!cat) { location.hash = '#/c1'; return; }
    root.innerHTML = header(cat.name, '#/c1', '一食堂') +
      searchBar('搜索' + cat.name + '菜品…') +
      `<ul class="dish-list">${cat.dishes.map(dishRow).join('')}</ul>` + emptySearch;
    bindCommon(root);
    bindSearch(root, '.dish-list');
  }

  /* ---------- 二食堂 ---------- */
  function renderC2(root) {
    root.innerHTML = header('二食堂', '#/home', '真实档口 · 各有招牌') +
      searchBar('搜索档口…') +
      `<ul class="stall-list">
        ${MENU.c2.stalls.map(s => `
          <li class="stall-row" data-id="${s.id}">
            <button class="stall-btn" data-stall="${s.id}">
              <span class="stall-name">${UI.esc(s.name)}</span>
              ${s.special ? '<em class="stall-badge">自选搭配</em>' : ''}
              ${arrow()}
            </button>
          </li>`).join('')}
      </ul>` + emptySearch;
    bindCommon(root);
    root.querySelectorAll('[data-stall]').forEach(b => b.addEventListener('click', () => {
      const s = MENU.c2.stalls.find(x => x.id === b.dataset.stall);
      location.hash = s.special === 'malatang' ? '#/malatang' : '#/c2/' + s.id;
    }));
    bindSearch(root, '.stall-list');
  }

  function renderStall(root, stallId) {
    const s = MENU.c2.stalls.find(x => x.id === stallId);
    if (!s || s.special) { location.hash = '#/c2'; return; }
    root.innerHTML = header(s.name, '#/c2', '二食堂') +
      searchBar('搜索档口内菜品…') +
      `<ul class="dish-list">${s.dishes.map(dishRow).join('')}</ul>` + emptySearch;
    bindCommon(root);
    bindSearch(root, '.dish-list');
  }

  /* ---------- 三食堂 ---------- */
  function renderC3(root) {
    root.innerHTML = header('三食堂', '#/home', '火锅与炒菜') + `
      <section class="entry-list">
        <button class="entry-card" data-go="#/hotpot">
          <span class="entry-icon">${potIcon()}</span>
          <span class="entry-text"><strong>火锅</strong><em>先选锅底 · 自由搭配</em></span>${arrow()}
        </button>
        <button class="entry-card" data-go="#/c3/stirfry">
          <span class="entry-icon">${panIcon()}</span>
          <span class="entry-text"><strong>炒菜</strong><em>${MENU.c3.stirfry.length} 道现炒小菜</em></span>${arrow()}
        </button>
      </section>`;
    bindCommon(root);
    root.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => { location.hash = b.dataset.go; }));
  }

  function renderStirfry(root) {
    root.innerHTML = header('炒菜', '#/c3', '三食堂') +
      searchBar('搜索炒菜…') +
      `<ul class="dish-list">${MENU.c3.stirfry.map(dishRow).join('')}</ul>` + emptySearch;
    bindCommon(root);
    bindSearch(root, '.dish-list');
  }

  /* ---------- 麻辣烫小铺 ---------- */
  const mt = { flavor: null, picked: new Set(), weight: null, rice: false };
  function renderMalatang(root) {
    const M = MENU.malatang;
    const rice = M.groups.flatMap(g => g.items).find(i => i.name === '米饭');
    root.innerHTML = header('饭团团的麻辣烫小铺', '#/c2', M.stallName) + `
      <section class="step-sec">
        <h2 class="step-title"><i>1</i>选择口味</h2>
        <div class="chip-row" id="mt-flavors">
          ${M.flavors.map(f => `<button class="chip${mt.flavor === f ? ' on' : ''}" data-f="${UI.esc(f)}">${UI.esc(f)}</button>`).join('')}
        </div>
      </section>
      <section class="step-sec">
        <h2 class="step-title"><i>2</i>选择食材<em>荤素同价 ${M.pricePer50g}元/50克</em></h2>
        ${M.groups.map(g => `
          <h3 class="group-title">${g.name}</h3>
          <div class="ing-grid">
            ${g.items.map(it => `
              <button class="ing-card${mt.picked.has(it.name) ? ' on' : ''}" data-ing="${UI.esc(it.name)}">
                <img src="${it.img}" alt="" loading="lazy">
                <span>${UI.esc(it.name)}</span>
                <i class="ing-check">✓</i>
              </button>`).join('')}
          </div>`).join('')}
      </section>
      <section class="step-sec">
        <h2 class="step-title"><i>3</i>预计重量</h2>
        <div class="chip-row" id="mt-weights">
          ${M.quickWeights.map(w => `<button class="chip${mt.weight === w ? ' on' : ''}" data-w="${w}">${w}克</button>`).join('')}
        </div>
        <div class="weight-input">
          <input id="mt-weight" type="number" min="50" step="50" inputmode="numeric" placeholder="手动输入克数" value="${mt.weight ?? ''}">
          <span>克</span>
        </div>
        <button class="rice-card${mt.rice ? ' on' : ''}" id="mt-rice">
          <img src="${rice.img}" alt="">
          <span class="rice-text"><strong>米饭</strong><em>¥${M.ricePrice}/份 · 管够</em></span>
          <i class="ing-check">✓</i>
        </button>
      </section>
      <div class="builder-bar" id="mt-bar">
        <div class="bar-price"><strong id="mt-total">—</strong><span>预估金额，以实际称重为准</span></div>
        <button class="btn btn-primary" id="mt-add" disabled>加入今日餐盘</button>
      </div>`;
    bindCommon(root);

    const refresh = () => {
      const est = mtEstimate();
      root.querySelector('#mt-total').textContent = est == null ? '—' : UI.yuan(est);
      root.querySelector('#mt-add').disabled = est == null;
    };
    root.querySelectorAll('[data-f]').forEach(b => b.addEventListener('click', () => {
      mt.flavor = b.dataset.f;
      root.querySelectorAll('[data-f]').forEach(x => x.classList.toggle('on', x === b));
    }));
    root.querySelectorAll('[data-ing]').forEach(b => b.addEventListener('click', () => {
      const n = b.dataset.ing;
      mt.picked.has(n) ? mt.picked.delete(n) : mt.picked.add(n);
      b.classList.toggle('on');
      refresh();
    }));
    root.querySelectorAll('[data-w]').forEach(b => b.addEventListener('click', () => {
      mt.weight = Number(b.dataset.w);
      root.querySelector('#mt-weight').value = mt.weight;
      root.querySelectorAll('[data-w]').forEach(x => x.classList.toggle('on', x === b));
      refresh();
    }));
    root.querySelector('#mt-weight').addEventListener('input', e => {
      const v = parseFloat(e.target.value);
      mt.weight = !isNaN(v) && v > 0 ? v : null;
      root.querySelectorAll('[data-w]').forEach(x => x.classList.toggle('on', Number(x.dataset.w) === mt.weight));
      refresh();
    });
    root.querySelector('#mt-rice').addEventListener('click', e => {
      mt.rice = !mt.rice;
      e.currentTarget.classList.toggle('on', mt.rice);
      refresh();
    });
    root.querySelector('#mt-add').addEventListener('click', () => {
      const est = mtEstimate();
      if (est == null) return;
      Tray.addCombo('malatang', '麻辣烫 · ' + (mt.flavor || '自选'), {
        flavor: mt.flavor || '自选',
        ingredients: [...mt.picked],
        weight: mt.weight, rice: mt.rice, estimate: est
      }, est);
      UI.toast('已经放进今日餐盘啦！');
      Mascot.say('整份麻辣烫放进餐盘啦，记得按实际称重改价格哦～', 'nod');
    });
    refresh();
  }
  function mtEstimate() {
    if (!mt.picked.size || !mt.weight) return null;
    const v = mt.weight / 50 * MENU.malatang.pricePer50g + (mt.rice ? MENU.malatang.ricePrice : 0);
    return Math.round(v * 100) / 100;
  }

  /* ---------- 火锅 ---------- */
  const hp = { base: null, qty: {} };
  function renderHotpot(root) {
    const H = MENU.c3.hotpot;
    root.innerHTML = header('三食堂火锅', '#/c3', '先选锅底 · 再选食材') + `
      <section class="step-sec">
        <h2 class="step-title"><i>1</i>选择锅底<em>只能选一种</em></h2>
        <ul class="base-list">
          ${H.bases.map(b => `
            <li><button class="base-row${hp.base === b.id ? ' on' : ''}" data-base="${b.id}">
              <span class="base-radio"></span>
              <span class="dish-name">${UI.esc(b.name)}${b.note ? '<em class="dish-note">' + UI.esc(b.note) + '</em>' : ''}</span>
              <span class="dish-price${b.price == null ? ' unknown' : ''}">${b.price == null ? '待核实' : UI.yuan(b.price)}</span>
            </button></li>`).join('')}
        </ul>
      </section>
      <section class="step-sec${hp.base ? '' : ' dim'}" id="hp-ing-sec">
        <h2 class="step-title"><i>2</i>选择食材</h2>
        ${H.groups.map(g => `
          <h3 class="group-title">${g.name}</h3>
          <ul class="dish-list hp-list">
            ${g.items.map(it => `
              <li class="dish-row" data-hping="${it.id}">
                <span class="dish-name">${UI.esc(it.name)}</span>
                <span class="dish-price">${UI.yuan(it.price)}</span>
                <span class="stepper">
                  <button class="step-btn" data-minus="${it.id}" ${hp.qty[it.id] ? '' : 'hidden'}>－</button>
                  <em class="step-num" ${hp.qty[it.id] ? '' : 'hidden'}>${hp.qty[it.id] || 0}</em>
                  <button class="step-btn plus" data-plus="${it.id}">＋</button>
                </span>
              </li>`).join('')}
          </ul>`).join('')}
      </section>
      <div class="builder-bar">
        <div class="bar-price"><strong id="hp-total">¥0</strong><span id="hp-note">先选锅底，再挑食材～</span></div>
        <button class="btn btn-primary" id="hp-add" disabled>加入餐盘</button>
      </div>`;
    bindCommon(root);

    const allItems = H.groups.flatMap(g => g.items);
    const refresh = () => {
      const base = H.bases.find(b => b.id === hp.base);
      let sum = 0, count = 0, unknownIng = 0;
      for (const it of allItems) {
        const q = hp.qty[it.id] || 0;
        if (!q) continue;
        count += q;
        if (it.price == null) unknownIng++;
        else sum += it.price * q;
      }
      const totalEl = root.querySelector('#hp-total');
      const noteEl = root.querySelector('#hp-note');
      if (!base) { totalEl.textContent = '¥' + UI.fmt(sum); noteEl.textContent = '先选锅底，再挑食材～'; }
      else if (base.price == null) {
        totalEl.textContent = '¥' + UI.fmt(sum);
        noteEl.textContent = '锅底价格待核实，暂不计入总价';
      } else {
        totalEl.textContent = UI.yuan(sum + base.price);
        noteEl.textContent = unknownIng ? '部分食材价格待补充' : '已含锅底 · 实时搭配总价';
      }
      root.querySelector('#hp-add').disabled = !base || count === 0;
      root.querySelector('#hp-ing-sec').classList.toggle('dim', !base);
    };

    root.querySelectorAll('[data-base]').forEach(b => b.addEventListener('click', () => {
      hp.base = b.dataset.base;
      root.querySelectorAll('[data-base]').forEach(x => x.classList.toggle('on', x === b));
      refresh();
    }));
    root.querySelectorAll('[data-plus]').forEach(b => b.addEventListener('click', () => {
      if (!hp.base) { UI.toast('先选一个锅底吧～'); Mascot.mood('tilt'); return; }
      const id = b.dataset.plus;
      hp.qty[id] = (hp.qty[id] || 0) + 1;
      syncStepper(root, id);
      refresh();
    }));
    root.querySelectorAll('[data-minus]').forEach(b => b.addEventListener('click', () => {
      const id = b.dataset.minus;
      hp.qty[id] = Math.max(0, (hp.qty[id] || 0) - 1);
      syncStepper(root, id);
      refresh();
    }));
    root.querySelector('#hp-add').addEventListener('click', () => confirmHotpot(allItems));
    refresh();
  }
  function syncStepper(root, id) {
    const row = root.querySelector('[data-hping=' + id + ']');
    const q = hp.qty[id] || 0;
    row.querySelector('[data-minus]').hidden = q === 0;
    const num = row.querySelector('.step-num');
    num.hidden = q === 0;
    num.textContent = q;
  }
  function confirmHotpot(allItems) {
    const H = MENU.c3.hotpot;
    const base = H.bases.find(b => b.id === hp.base);
    const items = allItems.filter(it => hp.qty[it.id]).map(it => ({ name: it.name, price: it.price, qty: hp.qty[it.id] }));
    const combo = { base: { name: base.name, price: base.price }, items };
    const total = Tray.hotpotTotal(combo);
    const sheet = UI.openSheet(`
      <div class="mini-title">确认这份火锅搭配</div>
      <div class="confirm-list">
        <div class="cl-row"><span>锅底 · ${UI.esc(base.name)}</span><em>${base.price == null ? '待核实' : UI.yuan(base.price)}</em></div>
        ${items.map(i => `<div class="cl-row"><span>${UI.esc(i.name)} × ${i.qty}</span><em>${i.price == null ? '待补充' : UI.yuan(i.price * i.qty)}</em></div>`).join('')}
        <div class="cl-row total"><span>搭配总价</span><em>${total == null ? '含待核实项' : UI.yuan(total)}</em></div>
      </div>
      ${total == null ? '<p class="mini-note">锅底价格待核实，加入餐盘后可手动填写实际价格。</p>' : ''}
      <button class="btn btn-primary btn-block" id="hp-confirm-ok">确认加入今日餐盘</button>
    `);
    sheet.querySelector('#hp-confirm-ok').addEventListener('click', () => {
      UI.closeSheet();
      Tray.addCombo('hotpot', '火锅 · ' + base.name, combo, total);
      UI.toast('已经放进今日餐盘啦！');
      Mascot.say('热乎乎的火锅放进餐盘啦～', 'nod');
    });
  }

  /* ---------- 图标 ---------- */
  const arrow = () => '<svg class="entry-arrow" viewBox="0 0 16 16" width="14" height="14"><path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const sunIcon = () => '<svg viewBox="0 0 24 24" width="22" height="22"><circle cx="12" cy="12" r="4.4" fill="currentColor"/><g stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6"/></g></svg>';
  const bowlIcon = () => '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M4 11h16a8 8 0 0 1-16 0z" fill="currentColor"/><path d="M8 8c0-1.6 1.4-1.6 1.4-3.2M12.6 8c0-1.6 1.4-1.6 1.4-3.2" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>';
  const potIcon = () => '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M5 10h14v3a7 7 0 0 1-14 0z" fill="currentColor"/><path d="M3 10h18M8 7c0-1.4 1.2-1.4 1.2-2.8M13 7c0-1.4 1.2-1.4 1.2-2.8" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>';
  const panIcon = () => '<svg viewBox="0 0 24 24" width="22" height="22"><circle cx="10" cy="13" r="6" fill="currentColor"/><path d="M16 11l5-2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

  return { renderC1, renderC1List, renderC2, renderStall, renderC3, renderStirfry, renderMalatang, renderHotpot };
})();