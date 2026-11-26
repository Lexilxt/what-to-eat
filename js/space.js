/* space.js —— 个人空间：今日餐盘 + 历史记录 */

const Space = (() => {
  let detailUid = null;
  let unsubscribe = null;

  function tabs(active) {
    return `<div class="space-tabs">
      <button class="space-tab${active === 'tray' ? ' on' : ''}" data-go="#/space/tray">今日餐盘</button>
      <button class="space-tab${active === 'history' ? ' on' : ''}" data-go="#/space/history">历史记录</button>
    </div>`;
  }
  function bindTabs(root) {
    root.querySelectorAll('[data-go]').forEach(b =>
      b.addEventListener('click', () => { location.hash = b.dataset.go; }));
  }

  /* ================= 今日餐盘 ================= */
  function renderTray(root) {
    const items = Tray.state.items;
    const info = Tray.budgetInfo();
    const t = Tray.totals();

    root.innerHTML = `
      <header class="page-head space-head">
        <div class="page-head-text"><h1>个人空间</h1><span>饭团团的小账本</span></div>
        <button class="gear-btn" id="gear" aria-label="预算设置">${gearIcon()}</button>
      </header>
      ${tabs('tray')}
      ${items.length === 0 ? emptyTray() : `
        <section class="total-card">
          <div class="total-main">
            <span class="total-label">餐盘总金额</span>
            <strong class="total-num">${UI.yuan(t.known)}</strong>
            ${t.unknown ? '<span class="total-unknown">另有 ' + t.unknown + ' 项价格待填写</span>' : ''}
          </div>
          ${budgetBlock(info)}
        </section>
        <section class="plate-wrap">
          <div class="plate" id="plate"><div class="plate-inner"></div></div>
          <p class="plate-hint">点一点餐盘里的美食，可以修改数量和价格</p>
        </section>
        <section class="tray-list-sec">
          <h2 class="sec-title">菜品清单</h2>
          <ul class="tray-list" id="tray-list">
            ${items.map(trayRow).join('')}
          </ul>
          <button class="btn btn-primary btn-block" id="save-tray">保存本次餐盘</button>
          <button class="btn btn-ghost btn-block" id="clear-tray">清空餐盘</button>
        </section>
      `}`;

    bindTabs(root);
    root.querySelector('#gear').addEventListener('click', openBudgetSheet);

    if (!items.length) {
      Mascot.mood('tilt');
      return;
    }

    layoutPlate(root.querySelector('#plate'), items);
    root.querySelectorAll('[data-uid]').forEach(el =>
      el.addEventListener('click', () => openDetail(el.dataset.uid)));
    root.querySelector('#save-tray').addEventListener('click', () => {
      Tray.saveSnapshot();
      UI.toast('已保存到历史记录～');
      Mascot.say('这一餐好好记下来啦！', 'nod');
    });
    root.querySelector('#clear-tray').addEventListener('click', () => {
      UI.confirmBox({
        title: '清空今日餐盘？',
        text: '会移除餐盘里所有菜品，预算设置和历史记录都会保留。',
        okText: '清空餐盘', danger: true
      }, () => { Tray.clear(); UI.toast('餐盘已清空～'); });
    });
  }

  function emptyTray() {
    return `<section class="empty-tray">
      <div class="empty-scene">
        <div class="plate empty-plate"><div class="plate-inner"></div></div>
        
      </div>
      <h2>今天还没有美食哦。</h2>
      <p>去挑选一点喜欢的吧！</p>
      <button class="btn btn-primary" data-go="#/c1">去逛逛食堂</button>
    </section>`;
  }

  function budgetBlock(info) {
    if (info.budget == null) {
      return '<div class="budget-none">未设置预算 · 点右上角齿轮可以设置哦</div>';
    }
    const pct = Math.min(100, Math.round(info.ratio * 100));
    const label = { ok: '预算充足', near: '接近预算', over: '超出预算' }[info.status];
    return `<div class="budget-box status-${info.status}">
      <div class="budget-nums">
        <span>预算 <strong>${UI.yuan(info.budget)}</strong></span>
        <span>已用 <strong>${UI.yuan(info.used)}</strong></span>
        <span>${info.remain >= 0 ? '剩余' : '超出'} <strong>${UI.yuan(Math.abs(info.remain))}</strong></span>
      </div>
      <div class="budget-bar"><i style="width:${pct}%"></i></div>
      <div class="budget-status">${label}${info.unknown ? ' · 部分价格待填写' : ''}</div>
    </div>`;
  }

  function trayRow(it) {
    const p = Tray.itemPrice(it);
    const sub = Tray.itemSubtotal(it);
    const combo = it.kind !== 'dish';
    return `<li class="tray-row" data-uid="${it.uid}">
      <img class="tray-thumb" src="${it.img}" alt="">
      <span class="tray-name">${UI.esc(it.name)}${combo ? '<em class="combo-tag">组合</em>' : ''}</span>
      <span class="tray-price${p == null ? ' unknown' : ''}">${p == null ? '待填写' : UI.yuan(p)}</span>
      <span class="tray-qty">×${it.qty}</span>
      <span class="tray-sub${sub == null ? ' unknown' : ''}">${sub == null ? '—' : UI.yuan(sub)}</span>
    </li>`;
  }

  /* ---------- 餐盘摆盘 ---------- */
  function layoutPlate(plate, items) {
    const inner = plate.querySelector('.plate-inner');
    inner.innerHTML = '';
    const S = inner.clientWidth || 240;
    const n = items.length;
    const factor = n <= 1 ? 1 : n <= 2 ? 0.78 : n <= 4 ? 0.6 : n <= 7 ? 0.48 : 0.4;
    const size = Math.max(46, Math.round(S * 0.4 * factor));
    items.forEach((it, i) => {
      let cx = S / 2, cy = S / 2;
      if (n > 1) {
        const angle = i * 2.39996 + 0.7;
        const r = (S / 2 - size / 2 - 10) * Math.sqrt(i / (n - 1));
        cx = S / 2 + r * Math.cos(angle);
        cy = S / 2 + r * Math.sin(angle);
      }
      const btn = document.createElement('button');
      btn.className = 'plate-food';
      btn.dataset.uid = it.uid;
      btn.style.width = size + 'px';
      btn.style.height = size + 'px';
      btn.style.left = (cx - size / 2) + 'px';
      btn.style.top = (cy - size / 2) + 'px';
      btn.style.zIndex = i + 1;
      btn.setAttribute('aria-label', it.name);
      btn.innerHTML = '<img src="' + it.img + '" alt="">';
      inner.appendChild(btn);
    });
  }

  /* ---------- 菜品详情面板 ---------- */
  function openDetail(uidv) {
    const it = Tray.get(uidv);
    if (!it) return;
    detailUid = uidv;
    const sheet = UI.openSheet(detailHTML(it), { onClose: () => { detailUid = null; } });
    bindDetail(sheet, it);
  }
  function detailHTML(it) {
    const p = Tray.itemPrice(it);
    const sub = Tray.itemSubtotal(it);
    let comboHTML = '';
    if (it.kind === 'malatang') {
      const c = it.combo;
      comboHTML = `<div class="combo-box">
        <div class="cl-row"><span>口味</span><em>${UI.esc(c.flavor)}</em></div>
        <div class="cl-row"><span>预计重量</span><em>${c.weight}克</em></div>
        <div class="cl-row"><span>米饭</span><em>${c.rice ? '已选 · ¥1（管够）' : '未选'}</em></div>
        <div class="combo-ings">${c.ingredients.map(n => '<span class="mini-chip">' + UI.esc(n) + '</span>').join('')}</div>
        <p class="mini-note">预估金额以实际称重为准，可在上方修改最终价格。</p>
      </div>`;
    } else if (it.kind === 'hotpot') {
      const c = it.combo;
      comboHTML = `<div class="combo-box">
        <div class="cl-row"><span>锅底 · ${UI.esc(c.base.name)}</span><em>${c.base.price == null ? '待核实' : UI.yuan(c.base.price)}</em></div>
        ${c.items.map((i, idx) => `
          <div class="cl-row hp-ing-row">
            <span>${UI.esc(i.name)} × ${i.qty}</span>
            <em><input class="ing-price-input" data-idx="${idx}" type="number" min="0" step="0.5" inputmode="decimal"
              value="${i.price == null ? '' : i.price}" placeholder="待补充"></em>
          </div>`).join('')}
        <p class="mini-note">修改食材价格会立即更新整份火锅金额；也可以直接修改整份价格。</p>
      </div>`;
    }
    return `
      <div class="detail-head">
        <img class="detail-thumb" src="${it.img}" alt="">
        <div><h3>${UI.esc(it.name)}</h3><span>${UI.esc(it.canteen)} · ${UI.esc(it.stall)}</span></div>
      </div>
      <div class="detail-grid">
        <label class="detail-field">
          <span>${it.kind === 'dish' ? '单价（可填写实际价格）' : '整份价格（可修改）'}</span>
          <div class="price-input-wrap">¥<input id="detail-price" type="number" min="0" step="0.5" inputmode="decimal"
            value="${p == null ? '' : p}" placeholder="待填写"></div>
        </label>
        <div class="detail-field">
          <span>数量</span>
          <div class="stepper big">
            <button class="step-btn" id="detail-minus">－</button>
            <em class="step-num" id="detail-qty">${it.qty}</em>
            <button class="step-btn plus" id="detail-plus">＋</button>
          </div>
        </div>
      </div>
      <div class="detail-sub">小计 <strong id="detail-sub">${sub == null ? '待填写' : UI.yuan(sub)}</strong></div>
      ${comboHTML}
      <button class="btn btn-danger btn-block" id="detail-delete">从餐盘删除</button>`;
  }
  function bindDetail(sheet, it) {
    sheet.querySelector('#detail-price').addEventListener('change', e => {
      const v = parseFloat(e.target.value);
      Tray.setPrice(it.uid, e.target.value.trim() === '' || isNaN(v) ? null : Math.round(v * 100) / 100);
    });
    sheet.querySelector('#detail-minus').addEventListener('click', () => Tray.setQty(it.uid, it.qty - 1));
    sheet.querySelector('#detail-plus').addEventListener('click', () => Tray.setQty(it.uid, it.qty + 1));
    sheet.querySelector('#detail-delete').addEventListener('click', () => {
      UI.closeSheet();
      Tray.remove(it.uid);
      UI.toast('已从餐盘删除～');
    });
    sheet.querySelectorAll('.ing-price-input').forEach(inp => {
      inp.addEventListener('change', e => {
        const v = parseFloat(e.target.value);
        Tray.setHotpotIngredientPrice(it.uid, Number(inp.dataset.idx),
          e.target.value.trim() === '' || isNaN(v) ? null : Math.round(v * 100) / 100);
      });
    });
  }
  function refreshDetail() {
    if (!detailUid) return;
    const it = Tray.get(detailUid);
    const root = document.getElementById('sheet-root');
    if (!root.classList.contains('open')) { detailUid = null; return; }
    if (!it) { UI.closeSheet(); return; }
    const sheet = root.querySelector('.sheet');
    const sub = Tray.itemSubtotal(it);
    sheet.querySelector('#detail-qty').textContent = it.qty;
    sheet.querySelector('#detail-sub').textContent = sub == null ? '待填写' : UI.yuan(sub);
    const priceInput = sheet.querySelector('#detail-price');
    if (document.activeElement !== priceInput) {
      const p = Tray.itemPrice(it);
      priceInput.value = p == null ? '' : p;
    }
  }

  /* ---------- 预算设置 ---------- */
  function openBudgetSheet() {
    const cur = Tray.state.budget;
    const sheet = UI.openSheet(`
      <div class="mini-title">餐盘预算设置</div>
      <p class="mini-note">预算只是温柔提醒，不会限制你的选择。首页盲盒预算与此独立。</p>
      <div class="price-input-wrap big">¥<input id="budget-input" type="number" min="1" step="1" inputmode="decimal"
        value="${cur == null ? '' : cur}" placeholder="输入预算金额"></div>
      <button class="btn btn-primary btn-block" id="budget-save">保存预算</button>
      ${cur != null ? '<button class="btn btn-ghost btn-block" id="budget-cancel">取消预算（不清空菜品）</button>' : ''}
    `);
    sheet.querySelector('#budget-save').addEventListener('click', () => {
      const v = parseFloat(sheet.querySelector('#budget-input').value);
      if (isNaN(v) || v <= 0) { UI.toast('请输入大于 0 的金额哦～'); return; }
      Tray.setBudget(Math.round(v * 100) / 100);
      UI.closeSheet();
      UI.toast('预算已设置～');
    });
    const cancel = sheet.querySelector('#budget-cancel');
    if (cancel) cancel.addEventListener('click', () => {
      Tray.setBudget(null);
      UI.closeSheet();
      UI.toast('已取消预算～');
    });
  }

  /* ================= 历史记录 ================= */
  function renderHistory(root) {
    const list = Store.getHistory().slice().sort((a, b) => b.ts - a.ts);
    const groups = [];
    for (const r of list) {
      const d = new Date(r.ts);
      const key = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
      let g = groups.find(x => x.key === key);
      if (!g) { g = { key, date: d, records: [] }; groups.push(g); }
      g.records.push(r);
    }
    root.innerHTML = `
      <header class="page-head space-head">
        <div class="page-head-text"><h1>个人空间</h1><span>饭团团的小账本</span></div>
      </header>
      ${tabs('history')}
      ${list.length === 0 ? `
        <section class="empty-tray">
          <div class="empty-scene"></div>
          <h2>还没有保存过餐盘哦。</h2>
          <p>在今日餐盘点「保存本次餐盘」，就会留下记录～</p>
          <button class="btn btn-primary" data-go="#/space/tray">去看看今日餐盘</button>
        </section>` :
        groups.map(g => `
          <section class="his-group">
            <h2 class="his-date">${g.date.getMonth() + 1}月${g.date.getDate()}日 · 周${'日一二三四五六'[g.date.getDay()]}</h2>
            ${g.records.map(hisCard).join('')}
          </section>`).join('') +
        `<button class="btn btn-ghost btn-block" id="clear-history">清空全部历史记录</button>`
      }`;
    bindTabs(root);
    root.querySelectorAll('[data-his]').forEach(card =>
      card.addEventListener('click', e => {
        if (e.target.closest('[data-del]')) return;
        openHistoryDetail(card.dataset.his);
      }));
    root.querySelectorAll('[data-del]').forEach(b =>
      b.addEventListener('click', () => {
        Store.removeHistory(b.dataset.del);
        UI.toast('已删除这条记录～');
        Router.refresh();
      }));
    const clearBtn = root.querySelector('#clear-history');
    if (clearBtn) clearBtn.addEventListener('click', () => {
      UI.confirmBox({
        title: '清空全部历史记录？',
        text: '所有保存过的餐盘记录都会被删除，且无法恢复。今日餐盘不受影响。',
        okText: '全部清空', danger: true
      }, () => { Store.clearHistory(); UI.toast('历史记录已清空～'); Router.refresh(); });
    });
  }

  function hisCard(r) {
    const d = new Date(r.ts);
    const hh = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
    const names = r.items.slice(0, 3).map(i => i.name).join('、');
    return `<div class="his-card" data-his="${r.id}">
      <div class="his-top"><strong>${hh}</strong><span>${r.items.length} 项美食</span>
        <button class="his-del" data-del="${r.id}" aria-label="删除这条记录">${trashIcon()}</button></div>
      <p class="his-names">${UI.esc(names)}${r.items.length > 3 ? ' 等' : ''}</p>
      <div class="his-total">${UI.yuan(r.totalKnown)}${r.unknownCount ? '<em> · 含待填写项</em>' : ''}${r.budget != null ? '<em> · 预算' + UI.yuan(r.budget) + '</em>' : ''}</div>
    </div>`;
  }

  function openHistoryDetail(id) {
    const r = Store.getHistory().find(x => x.id === id);
    if (!r) return;
    const d = new Date(r.ts);
    const time = `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    UI.openSheet(`
      <div class="mini-title">餐盘快照</div>
      <p class="mini-note">保存于 ${time} · 快照不受后续餐盘修改影响</p>
      <div class="confirm-list">
        ${r.items.map(it => {
          const p = Tray.itemPrice(it);
          const sub = Tray.itemSubtotal(it);
          let extra = '';
          if (it.kind === 'malatang') {
            extra = `<div class="his-combo">${UI.esc(it.combo.flavor)} · ${it.combo.weight}克 · ${it.combo.rice ? '含米饭' : '无米饭'}<br>${it.combo.ingredients.map(UI.esc).join('、')}</div>`;
          } else if (it.kind === 'hotpot') {
            extra = `<div class="his-combo">锅底：${UI.esc(it.combo.base.name)}（${it.combo.base.price == null ? '待核实' : UI.yuan(it.combo.base.price)}）<br>${it.combo.items.map(i => UI.esc(i.name) + '×' + i.qty).join('、')}</div>`;
          }
          return `<div class="cl-row col"><div class="cl-line"><span>${UI.esc(it.name)} × ${it.qty}</span><em>${sub == null ? '待填写' : UI.yuan(sub)}</em></div>
            <div class="cl-sub">${UI.esc(it.canteen)} · ${UI.esc(it.stall)} · 单价 ${p == null ? '待填写' : UI.yuan(p)}</div>${extra}</div>`;
        }).join('')}
        <div class="cl-row total"><span>当时总金额</span><em>${UI.yuan(r.totalKnown)}${r.unknownCount ? '（含待填写项）' : ''}</em></div>
        <div class="cl-row"><span>当时预算</span><em>${r.budget == null ? '未设置' : UI.yuan(r.budget)}</em></div>
      </div>
    `, { wide: true });
  }

  /* ---------- 图标 ---------- */
  const gearIcon = () => '<svg viewBox="0 0 24 24" width="19" height="19"><path d="M12 8.6A3.4 3.4 0 1 0 12 15.4 3.4 3.4 0 0 0 12 8.6zm8.4 3.4l-1.9-.6a6.6 6.6 0 0 0-.6-1.5l.9-1.8-1.9-1.9-1.8.9a6.6 6.6 0 0 0-1.5-.6L13 3.6h-2l-.6 1.9a6.6 6.6 0 0 0-1.5.6l-1.8-.9-1.9 1.9.9 1.8a6.6 6.6 0 0 0-.6 1.5l-1.9.6v2l1.9.6c.14.53.34 1.03.6 1.5l-.9 1.8 1.9 1.9 1.8-.9c.47.26.97.46 1.5.6l.6 1.9h2l.6-1.9a6.6 6.6 0 0 0 1.5-.6l1.8.9 1.9-1.9-.9-1.8c.26-.47.46-.97.6-1.5l1.9-.6z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';
  const trashIcon = () => '<svg viewBox="0 0 24 24" width="15" height="15"><path d="M4 7h16M9 7V5h6v2m-8 0l1 12h8l1-12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ---------- 餐盘变化时同步刷新 ---------- */
  function subscribe() {
    if (unsubscribe) return;
    unsubscribe = Tray.onChange(() => {
      const route = Router.current();
      if (route === 'space/tray') {
        const active = document.activeElement;
        const focusId = active && active.id;
        renderTray(document.getElementById('page'));
        if (focusId) {
          const el = document.getElementById(focusId);
          if (el) el.focus();
        }
        refreshDetail();
      }
    });
  }

  return { renderTray, renderHistory, subscribe };
})();