/* ui.js —— 通用 UI 工具：提示、弹层、确认框、格式化 */

const UI = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const fmt = n => {
    if (n == null || isNaN(n)) return null;
    const v = Math.round(n * 100) / 100;
    return Number.isInteger(v) ? String(v) : v.toFixed(2).replace(/0$/, '');
  };
  const yuan = n => n == null ? '待填写' : '¥' + fmt(n);

  /* ---------- 顶部轻提示 ---------- */
  let toastTimer = null;
  function toast(text, ms = 2000) {
    const el = document.getElementById('toast');
    el.textContent = text;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), ms);
  }

  /* ---------- 底部弹层 / 详情面板 ---------- */
  let sheetClose = null;
  function openSheet(html, opts = {}) {
    closeSheet();
    const root = document.getElementById('sheet-root');
    root.innerHTML =
      '<div class="scrim"></div>' +
      '<div class="sheet ' + (opts.wide ? 'sheet-wide' : '') + '" role="dialog">' +
      '<div class="sheet-grip"></div>' + html + '</div>';
    root.classList.add('open');
    document.body.classList.add('locked');
    root.querySelector('.scrim').addEventListener('click', closeSheet);
    sheetClose = opts.onClose || null;
    return root.querySelector('.sheet');
  }
  function closeSheet() {
    const root = document.getElementById('sheet-root');
    if (!root.classList.contains('open')) return;
    root.classList.remove('open');
    root.innerHTML = '';
    document.body.classList.remove('locked');
    if (sheetClose) { const f = sheetClose; sheetClose = null; f(); }
  }

  /* ---------- 二次确认 ---------- */
  function confirmBox({ title, text, okText = '确认', danger = false }, onOk) {
    const sheet = openSheet(
      '<div class="confirm">' +
      '<h3>' + esc(title) + '</h3>' +
      '<p>' + esc(text) + '</p>' +
      '<div class="confirm-btns">' +
      '<button class="btn btn-ghost" data-act="cancel">再想想</button>' +
      '<button class="btn ' + (danger ? 'btn-danger' : 'btn-primary') + '" data-act="ok">' + esc(okText) + '</button>' +
      '</div></div>'
    );
    sheet.querySelector('[data-act=cancel]').addEventListener('click', closeSheet);
    sheet.querySelector('[data-act=ok]').addEventListener('click', () => { closeSheet(); onOk(); });
  }

  return { esc, fmt, yuan, toast, openSheet, closeSheet, confirmBox };
})();