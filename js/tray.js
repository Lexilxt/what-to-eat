/* tray.js —— 今日餐盘状态与业务规则（合并、排序、价格、预算、快照） */

const Tray = (() => {
  let state = Store.getTray();
  /* 旧版本存档没有 img 字段，按菜名补齐路径 */
  state.items.forEach(it => {
    if (!it.img) it.img = 'assets/img/' + (it.kind === 'dish' ? it.name : it.kind === 'malatang' ? '麻辣烫' : '火锅') + '.png';
  });
  const listeners = [];
  let lastBudgetStatus = null;

  const clone = o => JSON.parse(JSON.stringify(o));
  const uid = () => 't' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

  function onChange(fn) { listeners.push(fn); }

  function commit() {
    Store.saveTray(state);
    listeners.forEach(f => f(state));
    reactBudget();
  }

  /* ---------- 加入 ---------- */
  function addDish(dishId) {
    const found = findDish(dishId);
    if (!found) return null;
    const exist = state.items.find(it => it.kind === 'dish' && it.dishId === dishId);
    if (exist) { exist.qty += 1; commit(); return exist; }   // 合并数量，保留原位置
    const item = {
      uid: uid(), kind: 'dish', dishId,
      name: found.dish.name, canteen: found.canteen, stall: found.stall,
      price: found.dish.price, img: found.dish.img, qty: 1
    };
    state.items.push(item);
    commit();
    return item;
  }

  function addCombo(kind, name, combo, price) {
    const item = {
      uid: uid(), kind, name,
      canteen: kind === 'malatang' ? '二食堂' : '三食堂',
      stall: kind === 'malatang' ? MENU.malatang.stallName : '火锅',
      price, qty: 1, combo, priceOverride: null,
      img: 'assets/img/' + (kind === 'malatang' ? '麻辣烫' : '火锅') + '.png'
    };
    state.items.push(item);
    commit();
    return item;
  }

  /* ---------- 修改 ---------- */
  function get(uidv) { return state.items.find(it => it.uid === uidv); }

  function setQty(uidv, qty) {
    const it = get(uidv); if (!it) return;
    it.qty = Math.max(1, Math.min(99, qty));
    commit();
  }
  function setPrice(uidv, price) {
    const it = get(uidv); if (!it) return;
    it.price = price;
    if (it.kind === 'hotpot') it.priceOverride = price;
    commit();
  }
  function setHotpotIngredientPrice(uidv, idx, price) {
    const it = get(uidv); if (!it || it.kind !== 'hotpot') return;
    it.combo.items[idx].price = price;
    it.priceOverride = null;
    it.price = hotpotTotal(it.combo);
    commit();
  }
  function remove(uidv) {
    state.items = state.items.filter(it => it.uid !== uidv);
    commit();
  }
  function clear() {           // 清空菜品，保留预算与历史
    state.items = [];
    commit();
  }
  function setBudget(v) { state.budget = v; commit(); }

  /* ---------- 金额 ---------- */
  function hotpotTotal(combo) {
    if (combo.base.price == null) return null;
    let sum = combo.base.price;
    for (const i of combo.items) {
      if (i.price == null) return null;
      sum += i.price * i.qty;
    }
    return Math.round(sum * 100) / 100;
  }
  function itemPrice(it) {
    if (it.kind === 'hotpot') {
      return it.priceOverride != null ? it.priceOverride : hotpotTotal(it.combo);
    }
    return it.price;
  }
  function itemSubtotal(it) {
    const p = itemPrice(it);
    return p == null ? null : Math.round(p * it.qty * 100) / 100;
  }
  function totals() {
    let known = 0, unknown = 0;
    for (const it of state.items) {
      const sub = itemSubtotal(it);
      if (sub == null) unknown++;
      else known += sub;
    }
    return { known: Math.round(known * 100) / 100, unknown };
  }
  function budgetInfo() {
    const { known, unknown } = totals();
    const b = state.budget;
    if (b == null || b <= 0) return { budget: null, used: known, unknown, status: 'none' };
    const ratio = known / b;
    const status = ratio > 1 ? 'over' : ratio >= 0.8 ? 'near' : 'ok';
    return { budget: b, used: known, unknown, remain: Math.round((b - known) * 100) / 100, ratio, status };
  }

  function reactBudget() {
    const info = budgetInfo();
    if (info.status !== lastBudgetStatus) {
      if (info.status === 'near' && typeof Mascot !== 'undefined') {
        Mascot.say('快要到预算啦，慢慢挑～', 'gentle');
      } else if (info.status === 'over' && typeof Mascot !== 'undefined') {
        Mascot.say('超出预算一点点咯，没关系，开心最重要～', 'shrug');
      }
      lastBudgetStatus = info.status;
    }
  }

  /* ---------- 保存历史快照 ---------- */
  function saveSnapshot() {
    if (!state.items.length) return null;
    const t = totals();
    const record = {
      id: 'h' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      ts: Date.now(),
      items: clone(state.items),
      totalKnown: t.known,
      unknownCount: t.unknown,
      budget: state.budget
    };
    Store.addHistory(record);
    return record;
  }

  return {
    get state() { return state; },
    onChange, addDish, addCombo, get, setQty, setPrice,
    setHotpotIngredientPrice, remove, clear, setBudget,
    itemPrice, itemSubtotal, hotpotTotal, totals, budgetInfo, saveSnapshot
  };
})();