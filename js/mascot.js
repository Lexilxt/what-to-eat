/* mascot.js —— 饭团团悬浮陪伴助手
 * 拖动 / 位置记忆 / 点击跳一下进入个人空间 / 气泡文案 / 场景动作 */

const Mascot = (() => {
  const SIZE = 92;
  let el, img, bubble;
  let pos = { x: 0, y: 0 };
  let bubbleTimer = null, idleTimer = null, lastSay = 0;
  let clicking = false;

  const GREETINGS = {
    home: '今天想吃点什么呀？',
    c1: '今天想吃早餐还是日常菜品呢？',
    c2: '我们去看看今天有什么好吃的吧！',
    c3: '今天要不要来点热乎的？',
    malatang: '麻辣烫想加点什么料呀？',
    hotpot: '先选一个喜欢的锅底吧～',
    tray: '今天的美食搭配好了吗？',
    history: '这些都是你好好吃饭的证据哦～'
  };
  const IDLE_LINES = [
    '慢慢挑，不着急～', '记得按时吃饭呀！', '今天也要好好吃饭哦～',
    '有点饿了吗？去抽个盲盒吧！', '饭团团一直陪着你呢～'
  ];

  function clampPos() {
    const maxX = window.innerWidth - SIZE - 6;
    const maxY = window.innerHeight - SIZE - 6;
    pos.x = Math.min(Math.max(6, pos.x), Math.max(6, maxX));
    pos.y = Math.min(Math.max(6, pos.y), Math.max(6, maxY));
  }
  function applyPos() {
    el.style.left = pos.x + 'px';
    el.style.top = pos.y + 'px';
    bubble.classList.toggle('flip', pos.x < window.innerWidth / 2);
  }

  function init() {
    el = document.getElementById('mascot');
    img = el.querySelector('.mascot-img');
    bubble = el.querySelector('.mascot-bubble');

    const saved = Store.getMascotPos();
    if (saved && typeof saved.x === 'number') {
      pos = saved;
    } else {
      pos = { x: window.innerWidth - SIZE - 14, y: window.innerHeight - SIZE - 108 };
    }
    clampPos(); applyPos();
    window.addEventListener('resize', () => { clampPos(); applyPos(); });

    /* ---- 拖动 / 点击区分 ---- */
    let sx = 0, sy = 0, ox = 0, oy = 0, moved = false, dragging = false;
    el.addEventListener('pointerdown', e => {
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      dragging = true; moved = false;
      sx = e.clientX; sy = e.clientY; ox = pos.x; oy = pos.y;
      try { el.setPointerCapture(e.pointerId); } catch (_) { /* 合成指针事件无活动指针 */ }
      el.classList.add('held');
    });
    el.addEventListener('pointermove', e => {
      if (!dragging) return;
      const dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.abs(dx) + Math.abs(dy) > 8) moved = true;
      if (moved) {
        pos.x = ox + dx; pos.y = oy + dy;
        clampPos(); applyPos();
      }
    });
    el.addEventListener('pointerup', e => {
      if (!dragging) return;
      dragging = false;
      el.classList.remove('held');
      if (moved) {
        Store.setMascotPos(pos);
      } else if (!clicking) {
        clicking = true;
        mood('hop');
        setTimeout(() => {
          clicking = false;
          if (location.hash !== '#/space/tray') location.hash = '#/space/tray';
          else Router.refresh();
        }, 420);
      }
    });
    el.addEventListener('pointercancel', () => { dragging = false; el.classList.remove('held'); });

    /* ---- 首次欢迎 ---- */
    if (!Store.getWelcomed()) {
      Store.setWelcomed();
      setTimeout(() => { mood('wave'); say('你好呀，我是饭团团！以后每天的美味都交给我吧～'); }, 700);
    }

    /* ---- 偶尔的陪伴文案 ---- */
    idleTimer = setInterval(() => {
      if (Date.now() - lastSay > 40000 && Math.random() < 0.5) {
        say(IDLE_LINES[Math.floor(Math.random() * IDLE_LINES.length)]);
      }
    }, 30000);
  }

  function say(text, moodName) {
    lastSay = Date.now();
    bubble.textContent = text;
    bubble.classList.add('show');
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(() => bubble.classList.remove('show'), 3000);
    if (moodName) mood(moodName);
  }

  function mood(name) {
    img.classList.remove('m-wave', 'm-hop', 'm-nod', 'm-wiggle', 'm-tilt', 'm-shrug', 'm-lean');
    void img.offsetWidth;
    img.classList.add('m-' + name);
    setTimeout(() => img.classList.remove('m-' + name), 1300);
  }

  function greet(pageKey) {
    const line = GREETINGS[pageKey];
    if (line) setTimeout(() => say(line), 450);
  }

  return { init, say, mood, greet };
})();