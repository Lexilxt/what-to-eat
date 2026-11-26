/* app.js —— 路由 / 底部导航 / 启动 */

const Router = (() => {
  let currentKey = '';

  function parse() {
    const h = location.hash.replace(/^#\/?/, '');
    return h || 'home';
  }

  function route() {
    const key = parse();
    currentKey = key;
    const page = document.getElementById('page');
    Home.cleanup();
    UI.closeSheet();

    const [head, sub] = key.split('/');
    if (key === 'home') Home.render(page);
    else if (key === 'c1') Canteen.renderC1(page);
    else if (head === 'c1') Canteen.renderC1List(page, sub);
    else if (key === 'c2') Canteen.renderC2(page);
    else if (head === 'c2') Canteen.renderStall(page, sub);
    else if (key === 'c3') Canteen.renderC3(page);
    else if (key === 'c3/stirfry') Canteen.renderStirfry(page);
    else if (key === 'malatang') Canteen.renderMalatang(page);
    else if (key === 'hotpot') Canteen.renderHotpot(page);
    else if (key === 'space' || key === 'space/tray') { currentKey = 'space/tray'; Space.renderTray(page); }
    else if (key === 'space/history') Space.renderHistory(page);
    else { location.hash = '#/home'; return; }

    updateTabbar();
    window.scrollTo({ top: 0 });
    greetFor(currentKey);
  }

  function greetFor(key) {
    const map = {
      home: 'home', c1: 'c1', c2: 'c2', c3: 'c3',
      malatang: 'malatang', hotpot: 'hotpot',
      'space/tray': 'tray', 'space/history': 'history'
    };
    const head = key.split('/')[0];
    Mascot.greet(map[key] || map[head] || 'home');
  }

  function updateTabbar() {
    const head = currentKey.split('/')[0];
    let active = '';
    if (head === 'c1') active = 'c1';
    else if (head === 'c2' || currentKey === 'malatang') active = 'c2';
    else if (head === 'c3' || currentKey === 'hotpot') active = 'c3';
    document.querySelectorAll('.tab').forEach(t =>
      t.classList.toggle('on', t.dataset.tab === active));
  }

  function refresh() { route(); }
  function current() { return currentKey; }

  function start() {
    window.addEventListener('hashchange', route);
    document.querySelectorAll('.tab').forEach(t =>
      t.addEventListener('click', () => { location.hash = t.dataset.hash; }));
    if (!location.hash) location.hash = '#/home';
    route();
  }

  return { start, refresh, current };
})();

/* 菜品专属图缺失回退：对应菜名 PNG 尚未放入时暂显共享占位图，放入后自动生效 */
const IMG_FALLBACK = new URL('assets/img/dish-2.png', location.href).href;
document.addEventListener('error', e => {
  const t = e.target;
  if (t && t.tagName === 'IMG' && !t.classList.contains('mascot-img') && t.src !== IMG_FALLBACK) t.src = IMG_FALLBACK;
}, true);

document.addEventListener('DOMContentLoaded', () => {
  Mascot.init();
  Space.subscribe();
  Router.start();
});