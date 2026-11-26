/* ============================================================
 * storage.js —— 全站持久化读写（唯一入口）
 * ------------------------------------------------------------
 * 历史记录 / 今日餐盘 / 吉祥物位置 / 欢迎标记 的读写全部集中
 * 在本文件。将来接入后端时，只需把这里的方法替换为 API 调用，
 * 页面代码无需改动。
 * ============================================================ */

const Store = (() => {
  const KEYS = {
    tray: 'wte.tray.v1',
    history: 'wte.history.v1',
    mascotPos: 'wte.mascot.pos.v1',
    welcomed: 'wte.welcomed.v1'
  };

  function read(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw == null ? fallback : JSON.parse(raw);
    } catch (e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* 存储不可用时静默降级 */ }
  }

  return {
    /* ---------- 今日餐盘（自动保存，不生成历史） ---------- */
    getTray() {
      const t = read(KEYS.tray, null);
      if (!t || !Array.isArray(t.items)) return { budget: null, items: [] };
      return t;
    },
    saveTray(tray) { write(KEYS.tray, tray); },

    /* ---------- 历史记录（仅用户主动保存时写入快照） ---------- */
    getHistory() {
      const list = read(KEYS.history, []);
      return Array.isArray(list) ? list : [];
    },
    addHistory(record) {
      const list = Store.getHistory();
      list.push(record);
      write(KEYS.history, list);
      return record;
    },
    removeHistory(id) {
      write(KEYS.history, Store.getHistory().filter(r => r.id !== id));
    },
    clearHistory() { write(KEYS.history, []); },

    /* ---------- 吉祥物位置 ---------- */
    getMascotPos() { return read(KEYS.mascotPos, null); },
    setMascotPos(pos) { write(KEYS.mascotPos, pos); },

    /* ---------- 首次欢迎标记 ---------- */
    getWelcomed() { return read(KEYS.welcomed, false); },
    setWelcomed() { write(KEYS.welcomed, true); }
  };
})();