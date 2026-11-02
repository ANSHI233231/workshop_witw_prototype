/* @ds-bundle: {"format":4,"namespace":"Starter","components":[{"name":"Icon"},{"name":"Button"},{"name":"IconButton"},{"name":"SearchInput"},{"name":"Select"},{"name":"FormField"},{"name":"Toggle"},{"name":"StatusBadge"},{"name":"Table"},{"name":"Card"},{"name":"KpiCard"},{"name":"Dialog"},{"name":"Tabs"},{"name":"PageHeader"},{"name":"AppHeader"},{"name":"NotificationItem"},{"name":"NotificationPopover"},{"name":"Sidebar"},{"name":"MobileMenu"},{"name":"Footer"},{"name":"SignIn"},{"name":"NotFound"},{"name":"Toast"},{"name":"ToastStack"},{"name":"DialogError"},{"name":"SearchSelect"},{"name":"ServerSelect"}]} */
(function () {
  var React = window.React, h = React.createElement, Fragment = React.Fragment;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function st(state) { return state ? 'is-' + state : null; }

  /* Lucide icons, as the app uses them (stroke 2). Each entry: [tag, attrs] pairs. */
  function P(d) { return ['path', { d: d }]; }
  var ICONS = {
    'search': [P('m21 21-4.34-4.34'), ['circle', { cx: 11, cy: 11, r: 8 }]],
    'pencil': [P('M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'), P('m15 5 4 4')],
    'key-round': [P('M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z'), ['circle', { cx: 16.5, cy: 7.5, r: 0.5, fill: 'currentColor' }]],
    'bell': [P('M10.268 21a2 2 0 0 0 3.464 0'), P('M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326')],
    'chevron-down': [P('m6 9 6 6 6-6')],
    'chevron-right': [P('m9 18 6-6-6-6')],
    'chevron-left': [P('m15 18-6-6 6-6')],
    'x': [P('M18 6 6 18'), P('m6 6 12 12')],
    'menu': [P('M4 5h16'), P('M4 12h16'), P('M4 19h16')],
    'plus': [P('M5 12h14'), P('M12 5v14')],
    'file-down': [P('M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z'), P('M14 2v5a1 1 0 0 0 1 1h5'), P('M12 18v-6'), P('m9 15 3 3 3-3')],
    'rotate-ccw': [P('M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8'), P('M3 3v5h5')],
    'layout-dashboard': [['rect', { width: 7, height: 9, x: 3, y: 3, rx: 1 }], ['rect', { width: 7, height: 5, x: 14, y: 3, rx: 1 }], ['rect', { width: 7, height: 9, x: 14, y: 12, rx: 1 }], ['rect', { width: 7, height: 5, x: 3, y: 16, rx: 1 }]],
    'users': [P('M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'), P('M16 3.128a4 4 0 0 1 0 7.744'), P('M22 21v-2a4 4 0 0 0-3-3.87'), ['circle', { cx: 9, cy: 7, r: 4 }]],
    'settings': [P('M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z'), ['circle', { cx: 12, cy: 12, r: 3 }]],
    'shield-check': [P('M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'), P('m9 12 2 2 4-4')],
    'lock': [['rect', { width: 18, height: 11, x: 3, y: 11, rx: 2, ry: 2 }], P('M7 11V7a5 5 0 0 1 10 0v4')],
    'log-out': [P('m16 17 5-5-5-5'), P('M21 12H9'), P('M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4')],
    'eye': [P('M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0'), ['circle', { cx: 12, cy: 12, r: 3 }]],
    'triangle-alert': [P('m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'), P('M12 9v4'), P('M12 17h.01')],
    'check': [P('M20 6 9 17l-5-5')],
    'check-check': [P('M18 6 7 17l-5-5'), P('m22 10-7.5 7.5L13 16')],
    'save': [P('M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z'), P('M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7'), P('M7 3v4a1 1 0 0 0 1 1h7')],
    'arrow-left': [P('m12 19-7-7 7-7'), P('M19 12H5')],
    'clock': [['circle', { cx: 12, cy: 12, r: 10 }], P('M12 6v6l4 2')],
    'circle-check': [['circle', { cx: 12, cy: 12, r: 10 }], P('m9 12 2 2 4-4')],
    'circle-alert': [['circle', { cx: 12, cy: 12, r: 10 }], P('M12 8v4'), P('M12 16h.01')],
    'mail': [P('m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7'), ['rect', { x: 2, y: 4, width: 20, height: 16, rx: 2 }]]
  };
  function Icon(p) {
    var size = p.size || 'sm';
    return h('svg', { className: cx('st-icon', size !== 'sm' && 'st-icon-' + size, p.className), viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false' },
      (ICONS[p.name] || []).map(function (e, i) { return h(e[0], Object.assign({ key: i }, e[1])); }));
  }

  function Button(p) {
    var variant = p.variant || 'primary';
    var props = { className: cx('st-btn', 'st-btn-' + variant, p.size === 'sm' && 'st-btn-sm', p.block && 'st-btn-block', st(p.state), p.disabled && p.href && 'is-disabled', p.className), onClick: p.onClick };
    var kids = [p.icon ? h(Icon, { key: 'i', name: p.icon }) : null, p.children];
    if (p.href) return h('a', Object.assign(props, { href: p.href }), kids);
    return h('button', Object.assign(props, { type: p.type || 'button', disabled: p.disabled }), kids);
  }

  function IconButton(p) {
    return h('button', { type: 'button', 'aria-label': p.label, 'data-tooltip': p.tooltip === false ? undefined : (p.tooltip || p.label), disabled: p.disabled, onClick: p.onClick,
      'aria-haspopup': p.haspopup, 'aria-expanded': p.expanded,
      className: cx('st-iconbtn', p.danger && 'is-danger', p.on && 'is-on', st(p.state), p.className) },
      h(Icon, { name: p.icon }), p.children);
  }

  function SearchInput(p) {
    return h('div', { className: cx('st-input-group', 'st-w-' + (p.width || 'md')) },
      h(Icon, { name: 'search' }),
      h('input', { className: cx('st-input', st(p.state), p.invalid && 'is-error'), type: 'text', placeholder: p.placeholder || 'Search', defaultValue: p.value, disabled: p.disabled, 'aria-label': p.label || 'Search', 'aria-invalid': p.invalid ? 'true' : undefined, maxLength: 100, onChange: p.onChange }));
  }

  function Select(p) {
    var opts = p.options || [];
    return h('select', { className: cx('st-select', 'st-w-' + (p.width || 'sm'), st(p.state), p.invalid && 'is-error'), 'aria-label': p.label, disabled: p.disabled, defaultValue: p.value, onChange: p.onChange },
      opts.map(function (o, i) { var it = typeof o === 'string' ? { value: o, label: o } : o; return h('option', { key: i, value: it.value }, it.label); }));
  }

  function FormField(p) {
    var id = p.id || ('f-' + String(p.label || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'));
    var control = p.children;
    if (!control) {
      var err = !!p.error;
      if (p.as === 'select') {
        control = h('select', { id: id, className: cx('st-select', st(p.state), err && 'is-error'), disabled: p.disabled, defaultValue: '' },
          [h('option', { key: 'ph', value: '' }, p.placeholder || 'Select')].concat((p.options || []).map(function (o, i) { return h('option', { key: i, value: o }, o); })));
      } else {
        var input = h('input', { id: id, className: cx('st-input', st(p.state), err && 'is-error'), type: p.type || 'text', placeholder: p.placeholder, defaultValue: p.value, disabled: p.disabled, 'aria-invalid': err ? 'true' : undefined, autoComplete: p.autoComplete });
        control = p.type === 'password'
          ? h('div', { className: 'st-input-group' }, input, h(IconButton, { icon: 'eye', label: 'Show password', className: 'st-input-end' }))
          : input;
      }
    }
    return h('div', { className: cx('st-field', p.className) },
      h('div', { className: 'st-field-head' },
        h('label', { className: 'st-label', htmlFor: id }, p.label, p.required ? h('span', { className: 'st-req', 'aria-hidden': 'true' }, '*') : null),
        p.aside || null),
      control,
      p.error ? h('span', { className: 'st-error', role: 'alert' }, p.error) : (p.helper ? h('span', { className: 'st-helper' }, p.helper) : null));
  }

  function Toggle(p) {
    var s = React.useState(!!p.checked), on = p.onChange ? !!p.checked : s[0];
    return h('button', { type: 'button', role: 'switch', 'aria-checked': on ? 'true' : 'false', 'aria-label': p.label, 'data-tooltip': p.tooltip, disabled: p.disabled,
      className: cx('st-toggle', st(p.state), p.className),
      onClick: function () { if (p.onChange) p.onChange(!on); else s[1](!on); } }, h('span', { className: 'st-toggle-knob' }));
  }

  function StatusBadge(p) {
    return h('span', { className: cx('st-badge', 'st-badge-' + (p.tone || 'success')) }, p.children);
  }

  function Table(p) {
    var cols = p.columns || [], rows = p.rows || [], start = p.start || 1;
    var total = p.total != null ? p.total : rows.length, end = start + rows.length - 1;
    var page = p.page || 1, pages = p.pages || 1, btns = [];
    for (var i = 1; i <= pages; i++) btns.push(h('button', { key: i, type: 'button', className: 'st-page-btn', 'aria-current': i === page ? 'page' : undefined }, i));
    function cell(c, r) { var v = c.render ? c.render(r) : r[c.key]; return v == null || v === '' ? h('span', { className: 'st-empty-value' }, '–') : v; }
    return h('div', { className: 'st-table-card' },
      p.tabs || null,
      p.filters ? h('div', { className: 'st-filter-bar' }, p.filters) : null,
      h('div', { className: 'st-table-top' },
        p.title ? h('h2', { className: 'st-table-title' }, p.title) : null,
        h('span', { className: 'st-table-total' }, 'Total Items: ', h('b', null, total))),
      h('div', { className: 'st-table-scroll' },
        h('table', { className: 'st-table' },
          h('thead', null, h('tr', null,
            h('th', { scope: 'col', className: 'st-col-sno' }, 'S.No'),
            cols.map(function (c) { return h('th', { key: c.key, scope: 'col', className: c.align === 'center' ? 'st-col-center' : null }, c.title); }),
            p.renderActions ? h('th', { scope: 'col', className: 'st-col-actions' }, 'Actions') : null)),
          h('tbody', null, rows.map(function (r, ri) {
            return h('tr', { key: r.id || ri, className: r.hover ? 'is-hover' : null },
              h('td', { className: 'st-col-sno' }, start + ri),
              cols.map(function (c) { return h('td', { key: c.key, className: c.align === 'center' ? 'st-col-center' : null }, cell(c, r)); }),
              p.renderActions ? h('td', { className: 'st-col-actions' }, h('div', { className: 'st-acts' }, p.renderActions(r))) : null);
          })))),
      h('div', { className: 'st-pager' },
        h('span', null, total ? 'Showing ' + start + '–' + end + ' of ' + total : 'Showing 0 of 0'),
        h('div', { className: 'st-pagination' },
          h('button', { type: 'button', className: 'st-page-btn', 'aria-label': 'Previous page', disabled: page <= 1 }, h(Icon, { name: 'chevron-left' })),
          btns,
          h('button', { type: 'button', className: 'st-page-btn', 'aria-label': 'Next page', disabled: page >= pages }, h(Icon, { name: 'chevron-right' })))));
  }

  function Card(p) {
    return h('section', { className: cx('st-card', p.className) },
      p.title ? h('div', { className: 'st-card-title' }, h('span', null, p.title), p.action || null) : null,
      p.text ? h('p', { className: 'st-card-text' }, p.text) : null,
      p.children);
  }

  function KpiCard(p) {
    return h('div', { className: 'st-card st-kpi' },
      h('div', { className: 'st-kpi-top' }, h('span', { className: 'st-kpi-label' }, p.label), p.icon ? h('span', { className: 'st-kpi-ic' }, h(Icon, { name: p.icon })) : null),
      h('div', { className: 'st-kpi-value' }, p.value),
      p.meta ? h('div', { className: 'st-kpi-meta' }, p.meta) : null);
  }

  function Dialog(p) {
    if (p.open === false) return null;
    return h('div', { className: 'st-overlay', onClick: p.onClose },
      h('div', { role: 'dialog', 'aria-modal': 'true', 'aria-label': p.title, className: cx('st-modal', p.size === 'sm' && 'st-modal-sm'), onClick: function (e) { e.stopPropagation(); } },
        h('div', { className: 'st-modal-head' }, h('h2', { className: 'st-modal-title' }, p.icon ? h(Icon, { name: p.icon }) : null, p.title), h(IconButton, { icon: 'x', label: 'Close', onClick: p.onClose })),
        h('div', { className: 'st-modal-body' }, p.error ? h(DialogError, null, p.error) : null, p.children),
        p.footer ? h('div', { className: 'st-modal-foot' }, p.footer) : null));
  }

  function Tabs(p) {
    var s = React.useState(p.active || 0), active = p.onChange ? (p.active || 0) : s[0];
    var pill = p.variant === 'pill';
    return h('div', { role: 'tablist', className: pill ? 'st-pills' : 'st-tabs' }, (p.items || []).map(function (t, i) {
      var it = typeof t === 'string' ? { label: t } : t;
      return h('button', { key: i, type: 'button', role: 'tab', 'aria-selected': i === active ? 'true' : 'false', disabled: it.disabled,
        className: cx(pill ? 'st-pill' : 'st-tab', st(it.state)), onClick: function () { if (p.onChange) p.onChange(i); else s[1](i); } },
        it.icon ? h(Icon, { name: it.icon }) : null, it.label,
        pill && it.count != null ? h('span', { className: 'st-pill-count' }, it.count) : null);
    }));
  }

  function PageHeader(p) {
    var crumbs = p.breadcrumb || [];
    return h('div', null,
      crumbs.length ? h('nav', { className: 'st-breadcrumb', 'aria-label': 'Breadcrumb' }, crumbs.map(function (c, i) {
        var last = i === crumbs.length - 1;
        return h(Fragment, { key: i }, i ? h(Icon, { name: 'chevron-right' }) : null, last ? h('span', { 'aria-current': 'page' }, c) : h('a', null, c));
      })) : null,
      h('div', { className: 'st-page-head' },
        h('div', null, h('h1', { className: 'st-page-title' }, p.title), p.description ? h('p', { className: 'st-page-desc' }, p.description) : null),
        p.actions ? h('div', { className: 'st-actions' }, p.actions) : null));
  }

  function initials(n) { return String(n || '').split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0].toUpperCase(); }).join(''); }

  function AppHeader(p) {
    var user = p.userName || 'Starter Admin';
    return h('header', { className: 'st-header' },
      h('div', { className: 'st-brand' },
        p.onMenu ? h(IconButton, { icon: 'menu', label: 'Menu', onClick: p.onMenu }) : null,
        p.logo || h('span', { className: 'st-mark' }, h(Icon, { name: 'shield-check' })),
        h('span', { className: 'st-wordmark' }, p.appName || 'Admin Console'),
        p.role ? h('span', { className: 'st-role-chip' }, p.role) : null),
      h('div', { className: 'st-header-actions' },
        h('div', { className: 'st-lang', role: 'group', 'aria-label': 'Language' }, (p.languages || ['EN']).map(function (l, i) {
          return h('button', { key: l, type: 'button', className: 'st-lang-btn', 'aria-pressed': i === 0 ? 'true' : 'false' }, l);
        })),
        h(IconButton, { icon: 'bell', label: 'Notifications', haspopup: 'dialog', expanded: p.bellOpen ? 'true' : 'false', onClick: p.onBell, on: p.bellCurrent },
          p.count ? h('span', { className: 'st-count' }, p.count > 99 ? '99+' : p.count) : null),
        h('button', { type: 'button', className: 'st-user-menu', 'aria-haspopup': 'true', 'aria-expanded': p.menuOpen ? 'true' : 'false' },
          h('span', { className: 'st-avatar' }, initials(user)), user, h(Icon, { name: 'chevron-down' }))));
  }

  var KIND_ICON = { jobs: 'triangle-alert', account: 'lock', test: 'bell' };
  function NotificationItem(p) {
    var kind = p.kind || 'test';
    return h('li', null, h('a', { className: cx('st-ntp-i', p.unread && 'is-unread'), href: p.href || '#' },
      h('span', { className: 'st-ntp-av' }, p.initial || 'S', h('span', { className: 'st-ntp-k is-' + kind }, h(Icon, { name: KIND_ICON[kind] || 'bell' }))),
      h('span', { className: 'st-ntp-t' }, h('span', { className: 'st-ntp-p' }, p.children || p.text), p.time ? h('small', null, p.time) : null),
      h('span', { className: 'st-ntp-dot', 'aria-hidden': 'true' })));
  }

  function NotificationPopover(p) {
    var items = p.items || [], n = items.filter(function (x) { return x.unread; }).length;
    return h('div', { className: 'st-ntp', role: 'dialog', 'aria-label': 'Notifications' },
      h('div', { className: 'st-ntp-h' }, h('b', null, 'Notifications'), n ? h('span', { className: 'st-ntp-c' }, n + ' new') : null, h('button', { type: 'button', className: 'st-ntp-mk' }, 'Mark all as read')),
      h('ul', { className: 'st-ntp-l' }, items.map(function (it, i) { return h(NotificationItem, Object.assign({ key: i }, it)); })),
      h('a', { className: 'st-ntp-f', href: p.allHref || '#' }, 'Show all notifications'));
  }

  /* Sidebar items: {label, icon, href} | {label, icon, children, open} at the top level; {section} for a section label.
     Inside a group: {label, href} links or {label, children, open} sub-groups. */
  function SideLinks(items, active) {
    return items.map(function (it, i) {
      if (it.children) {
        var on = contains(it, active);
        return h(Fragment, { key: i },
          h('button', { type: 'button', className: cx('st-side-subbtn', on && 'is-active'), 'aria-expanded': it.open ? 'true' : 'false' }, h('span', null, it.label), h(Icon, { name: 'chevron-right', className: 'st-chev' })),
          it.open ? h('div', { className: 'st-side-sub2' }, SideLinks(it.children, active)) : null);
      }
      return h('a', { key: i, className: 'st-side-link', href: it.href || '#', 'aria-current': it.label === active ? 'page' : undefined }, it.label);
    });
  }
  function contains(it, active) { return (it.children || []).some(function (c) { return c.label === active || contains(c, active); }); }
  function Sidebar(p) {
    return h('aside', { className: cx('st-sidebar', p.className), 'aria-label': p.label || 'Admin menu' }, h('nav', null, (p.items || []).map(function (it, i) {
      if (it.section) return h('div', { key: i, className: 'st-side-sec' }, h('div', { className: 'st-side-sec-t' }, h('i', null), it.section));
      if (it.children) {
        var on = contains(it, p.active);
        return h(Fragment, { key: i },
          h('button', { type: 'button', className: cx('st-side-item', on && 'is-active'), 'aria-expanded': it.open ? 'true' : 'false' },
            it.icon ? h(Icon, { name: it.icon }) : null, h('span', null, it.label), h(Icon, { name: 'chevron-down', className: 'st-chev' })),
          it.open ? h('div', { className: 'st-side-sub' }, SideLinks(it.children, p.active)) : null);
      }
      return h('a', { key: i, className: cx('st-side-item', it.label === p.active && 'is-active'), href: it.href || '#', 'aria-current': it.label === p.active ? 'page' : undefined },
        it.icon ? h(Icon, { name: it.icon }) : null, h('span', null, it.label));
    })));
  }

  function MobileMenu(p) {
    return h('div', { className: 'st-mobile-shell' },
      h(AppHeader, { appName: p.appName, userName: p.userName, count: p.count, onMenu: p.onClose || function () {} }),
      p.open === false ? null : h(Fragment, null,
        h('div', { className: 'st-scrim', onClick: p.onClose }),
        h('div', { className: 'st-mobile-panel' }, h(Sidebar, { items: p.items, active: p.active }))));
  }

  function Footer(p) {
    return h('footer', { className: 'st-footer' }, h('span', null, p.text || '© 2026 All rights reserved.'), p.children || null);
  }

  function SignIn(p) {
    return h('div', { className: 'st-auth' },
      h('div', { className: 'st-auth-side' },
        h('div', { className: 'st-auth-brand' }, h('span', { className: 'st-mark' }, h(Icon, { name: 'shield-check' })), p.appName || 'Admin Console'),
        h('h1', null, p.headline || 'Manage the whole platform from one place.'),
        p.lede ? h('p', null, p.lede) : null,
        p.points && p.points.length ? h('ul', null, p.points.map(function (x, i) { return h('li', { key: i }, x); })) : null),
      h('div', { className: 'st-auth-form' },
        h('form', { className: 'st-auth-card', onSubmit: function (e) { e.preventDefault(); } },
          h('h1', null, p.title || 'Login'),
          h('p', { className: 'st-auth-sub' }, p.subtitle || 'Login to the ' + (p.appName || 'Admin Console') + '.'),
          h(FormField, { label: 'Login ID', required: true, id: 'sign-in-identifier', placeholder: 'Mobile no. or email', autoComplete: 'username', error: p.idError }),
          h(FormField, { label: 'Password', required: true, id: 'sign-in-password', type: 'password', autoComplete: 'current-password', aside: h('a', { href: p.forgotHref || '#' }, 'Forgot Password?') }),
          h('label', { className: 'st-check' }, h('input', { type: 'checkbox' }), 'Remember me'),
          h(Button, { variant: 'primary', type: 'submit', block: true }, p.submitLabel || 'Login'))));
  }

  function NotFound(p) {
    return h('div', { className: 'st-e4' }, h('section', { className: 'st-e4-card', 'aria-labelledby': 'e4-t' },
      h('p', { className: 'st-e4-code' }, p.code || '404'),
      h('h1', { className: 'st-e4-title', id: 'e4-t' }, p.title || 'Page not found'),
      h('p', { className: 'st-e4-text' }, p.message || 'The page you are looking for doesn’t exist, has been moved, or you don’t have access to it. Please check the address or go back to the previous page.'),
      h('div', { className: 'st-e4-acts' }, p.actions || h(Fragment, null,
        h(Button, { variant: 'secondary', icon: 'arrow-left', href: p.backHref || '#' }, 'Go Back'),
        h(Button, { variant: 'primary', icon: 'mail', href: p.contactHref || '#' }, 'Contact Us')))));
  }

  /* Toast: success (green line, check) or error (red line, alert). Closes itself after 5 s when onClose is given. */
  function Toast(p) {
    var err = p.tone === 'error';
    React.useEffect(function () {
      if (!p.onClose || p.autoClose === false) return undefined;
      var t = setTimeout(p.onClose, p.duration || 5000);
      return function () { clearTimeout(t); };
    }, [p.onClose, p.autoClose, p.duration]);
    return h('div', { className: cx('st-toast', err && 'st-toast-error'), role: err ? 'alert' : 'status', 'aria-live': err ? 'assertive' : 'polite' },
      h(Icon, { name: err ? 'circle-alert' : 'circle-check' }),
      h('div', { className: 'st-toast-msg' }, p.children),
      h(IconButton, { icon: 'x', label: 'Close', tooltip: false, state: p.closeState, onClick: p.onClose }));
  }

  /* ToastStack: fixed top right under the header (desktop), across the bottom on phones; newest last, 8 px apart. */
  function ToastStack(p) {
    return h('div', { className: cx('st-toasts', p.placement === 'mobile' && 'is-mobile') },
      (p.toasts || []).map(function (t, i) { return h(Toast, { key: t.id || i, tone: t.tone, onClose: p.onClose ? function () { p.onClose(t.id != null ? t.id : i); } : undefined }, t.message); }));
  }

  /* DialogError: the message at the top of a dialog body when a save fails. The dialog stays open; no toast. */
  function DialogError(p) {
    return h('div', { className: 'st-dialog-error', role: 'alert' }, p.children);
  }

  /* ---- Dropdowns with search: SearchSelect (all options at once) and ServerSelect (loads 20 at a time) ---- */
  var comboSeq = 0;
  function useComboId() { var r = React.useRef(null); if (r.current == null) r.current = 'st-combo-' + (++comboSeq); return r.current; }

  /* The shared field + panel. p.rows: [{key, opt, clear?}], p.note: text after the rows. */
  function ComboShell(p) {
    var id = useComboId();
    var rootRef = React.useRef(null), fieldRef = React.useRef(null), inputRef = React.useRef(null), listRef = React.useRef(null);
    var open = p.open, rows = p.rows, active = p.active;

    React.useEffect(function () {
      if (!open) return undefined;
      if (p.focusOnOpen !== false && inputRef.current) inputRef.current.focus();
      function onDown(e) { if (rootRef.current && !rootRef.current.contains(e.target)) p.onOpenChange(false); }
      document.addEventListener('mousedown', onDown);
      return function () { document.removeEventListener('mousedown', onDown); };
    }, [open]);

    React.useEffect(function () {
      if (!open || active < 0 || !listRef.current) return;
      var el = listRef.current.querySelector('[data-i="' + active + '"]');
      if (el) {
        var l = listRef.current, top = el.offsetTop, bot = top + el.offsetHeight;
        if (top < l.scrollTop) l.scrollTop = top - 8; else if (bot > l.scrollTop + l.clientHeight) l.scrollTop = bot - l.clientHeight + 8;
        if (active === rows.length - 1 && p.note) l.scrollTop = l.scrollHeight;
      }
    }, [active, open, rows.length, p.note]);

    function close(focusField) { p.onOpenChange(false); if (focusField && fieldRef.current) fieldRef.current.focus(); }
    function onFieldKey(e) {
      if (p.disabled) return;
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); p.onOpenChange(true); }
    }
    function onInputKey(e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); p.onMove(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); p.onMove(-1); }
      else if (e.key === 'Enter') { e.preventDefault(); if (rows[active]) { p.onChoose(rows[active]); close(true); } }
      else if (e.key === 'Escape') { e.preventDefault(); close(true); }
      else if (e.key === 'Tab') { close(false); }
    }
    var shown = p.display;
    return h('div', { ref: rootRef, className: cx('st-combo', p.server && 'is-server', open && 'is-open', 'st-w-' + (p.width || 'sm'), p.className) },
      h('button', { ref: fieldRef, type: 'button', id: p.id, className: cx('st-select', 'st-combo-field', st(p.state), p.invalid && 'is-error'),
        disabled: p.disabled, 'aria-haspopup': 'listbox', 'aria-expanded': open ? 'true' : 'false', 'aria-controls': id + '-list', 'aria-label': p.label,
        'aria-invalid': p.invalid ? 'true' : undefined, onClick: function () { p.onOpenChange(!open); }, onKeyDown: onFieldKey },
        h('span', { className: cx('st-combo-value', !shown && 'is-placeholder') }, shown || p.placeholder),
        h(Icon, { name: 'chevron-down' })),
      open ? h('div', { className: 'st-combo-panel' },
        h('div', { className: 'st-input-group' },
          h(Icon, { name: 'search' }),
          h('input', { ref: inputRef, className: 'st-input', type: 'text', role: 'combobox', 'aria-expanded': 'true', 'aria-controls': id + '-list', 'aria-autocomplete': 'list',
            'aria-activedescendant': rows[active] ? id + '-o' + active : undefined, placeholder: p.searchPlaceholder, value: p.query,
            onChange: function (e) { p.onQuery(e.target.value); }, onKeyDown: onInputKey })),
        h('ul', { ref: listRef, id: id + '-list', role: 'listbox', className: 'st-combo-list', onScroll: p.onScroll },
          rows.map(function (r, i) {
            var o = r.opt;
            return h('li', { key: r.key, id: id + '-o' + i, 'data-i': i, role: 'option', 'aria-selected': r.chosen ? 'true' : 'false',
              className: cx('st-combo-opt', i === active && 'is-active', r.chosen && 'is-chosen'),
              onMouseEnter: function () { p.onActive(i); }, onMouseDown: function (e) { e.preventDefault(); },
              onClick: function () { p.onChoose(r); close(true); } },
              h('span', { className: 'st-combo-text' },
                h('span', { className: 'st-combo-label' }, o.label, o.context ? h('span', { className: 'st-combo-context' }, ' · ' + o.context) : null),
                o.detail ? h('span', { className: 'st-combo-detail' }, o.detail) : null),
              o.badge ? h('span', { className: 'st-combo-badge' }, o.badge) : null);
          }),
          p.note ? h('li', { className: 'st-combo-note', role: 'presentation' }, p.note) : null)) : null);
  }

  function matches(o, q) {
    if (!q) return true;
    q = q.toLowerCase();
    return [o.label, o.detail, o.badge].some(function (t) { return t && String(t).toLowerCase().indexOf(q) >= 0; });
  }

  /* SearchSelect: the whole list is on the page; typing filters it straight away. */
  function SearchSelect(p) {
    var s = React.useState(p.value != null ? p.value : null), value = p.onChange ? p.value : s[0];
    var o = React.useState(!!p.defaultOpen), open = o[0];
    var q = React.useState(p.defaultQuery || ''), query = q[0];
    var a = React.useState(-1), active = a[0];
    var opts = p.options || [];
    var rows = [];
    if (p.clearLabel && !query) rows.push({ key: '__clear', opt: { label: p.clearLabel }, clear: true, chosen: value == null });
    opts.forEach(function (op) { if (matches(op, query)) rows.push({ key: 'v' + op.value, opt: op, chosen: op.value === value }); });
    var chosenOpt = opts.filter(function (op) { return op.value === value; })[0];
    var display = chosenOpt ? chosenOpt.label + (chosenOpt.badge ? ' (' + chosenOpt.badge + ')' : '') : '';

    function setOpen(v) {
      if (p.disabled) return;
      o[1](v);
      if (v) { q[1](''); a[1](-1); }
    }
    React.useLayoutEffect(function () {
      if (!open) return;
      if (p.defaultActive != null && active < 0) { a[1](p.defaultActive); return; }
      if (active >= rows.length) a[1](rows.length ? 0 : -1);
    }, [open, query, rows.length]);
    React.useLayoutEffect(function () {
      if (open && active < 0 && p.defaultActive == null) {
        var ci = -1; rows.forEach(function (r, i) { if (r.chosen && ci < 0) ci = i; });
        a[1](ci >= 0 ? ci : (rows.length ? 0 : -1));
      }
    }, [open]);
    function choose(r) { var v = r.clear ? null : r.opt.value; if (p.onChange) p.onChange(v, r.clear ? null : r.opt); else s[1](v); }
    return h(ComboShell, {
      id: p.id, label: p.label, width: p.width, className: p.className, disabled: p.disabled, invalid: p.invalid, state: p.state, focusOnOpen: p.focusOnOpen,
      placeholder: p.placeholder || 'Select', searchPlaceholder: p.searchPlaceholder || 'Search…',
      display: display, open: open, onOpenChange: setOpen, query: query,
      onQuery: function (v) { q[1](v); a[1](0); },
      rows: rows, active: active, onActive: function (i) { a[1](i); },
      onMove: function (d) { if (!rows.length) return; a[1](Math.max(0, Math.min(rows.length - 1, (active < 0 ? -1 : active) + d))); },
      onChoose: choose,
      note: rows.length ? null : (p.emptyText || 'No matches.') });
  }

  /* ServerSelect: options come from p.load(query, offset, limit) → Promise<{items, hasMore}>, 20 at a time. */
  function ServerSelect(p) {
    var LIMIT = p.pageSize || 20;
    var s = React.useState(p.value || null), value = p.onChange ? (p.value || null) : s[0];
    var o = React.useState(!!p.defaultOpen), open = o[0];
    var q = React.useState(p.defaultQuery || ''), query = q[0];
    var a = React.useState(-1), active = a[0];
    var d = React.useState({ items: [], hasMore: false, loading: false, loaded: false }), data = d[0];
    var req = React.useRef(0), dataRef = React.useRef(data); dataRef.current = data;

    function fetchPage(text, offset) {
      var my = ++req.current;
      d[1](function (x) { return Object.assign({}, offset ? x : { items: [], hasMore: false }, { loading: true, loaded: offset ? x.loaded : false }); });
      Promise.resolve(p.load ? p.load(text, offset, LIMIT) : { items: [], hasMore: false }).then(function (res) {
        if (my !== req.current) return;
        d[1](function (x) { return { items: (offset ? x.items : []).concat(res.items || []), hasMore: !!res.hasMore, loading: false, loaded: true }; });
      }, function () { if (my === req.current) d[1](function (x) { return Object.assign({}, x, { loading: false, loaded: true }); }); });
    }
    function loadMore() { var x = dataRef.current; if (x.hasMore && !x.loading) fetchPage(query, x.items.length); }

    var first = React.useRef(true);
    React.useEffect(function () {
      if (!open) { first.current = true; return undefined; }
      if (first.current) { first.current = false; fetchPage(query, 0); return undefined; }
      var t = setTimeout(function () { fetchPage(query, 0); }, p.debounce || 250);
      return function () { clearTimeout(t); };
    }, [open, query]);

    var rows = [{ key: '__all', opt: { label: p.allLabel || 'All' }, clear: true, chosen: !value }];
    data.items.forEach(function (it) { rows.push({ key: 'v' + it.value, opt: it, chosen: !!value && it.value === value.value }); });
    React.useLayoutEffect(function () {
      if (!open || !data.loaded) return;
      if (active < 0) a[1](p.defaultActive != null ? Math.min(p.defaultActive, rows.length - 1) : (function () { var ci = 0; rows.forEach(function (r, i) { if (r.chosen && !ci && i) ci = i; }); return ci; })());
    }, [open, data.loaded]);

    function setOpen(v) { if (p.disabled) return; o[1](v); if (v) { q[1](''); a[1](-1); } else { req.current++; d[1]({ items: [], hasMore: false, loading: false, loaded: false }); } }
    function choose(r) { var v = r.clear ? null : r.opt; if (p.onChange) p.onChange(v); else s[1](v); }
    var note = data.loading ? 'Loading…' : (data.loaded && !data.items.length ? (p.emptyText || 'No matches') : null);
    return h(ComboShell, {
      server: true, id: p.id, label: p.label, width: p.width || 'md', className: p.className, disabled: p.disabled, invalid: p.invalid, state: p.state, focusOnOpen: p.focusOnOpen,
      placeholder: p.placeholder || 'Select', searchPlaceholder: p.searchPlaceholder || 'Search…',
      display: value ? value.label : '', open: open, onOpenChange: setOpen, query: query,
      onQuery: function (v) { q[1](v); a[1](0); },
      rows: rows, active: active, onActive: function (i) { a[1](i); },
      onMove: function (dir) {
        var n = (active < 0 ? 0 : active) + dir;
        if (n >= rows.length) { loadMore(); n = rows.length - 1; }
        a[1](Math.max(0, n));
      },
      onScroll: function (e) { var l = e.currentTarget; if (l.scrollTop + l.clientHeight >= l.scrollHeight - 40) loadMore(); },
      onChoose: choose, note: note });
  }

  var api = { Icon: Icon, Button: Button, IconButton: IconButton, SearchInput: SearchInput, Select: Select, FormField: FormField, Toggle: Toggle, StatusBadge: StatusBadge,
    Table: Table, Card: Card, KpiCard: KpiCard, Dialog: Dialog, Tabs: Tabs, PageHeader: PageHeader, AppHeader: AppHeader, NotificationItem: NotificationItem,
    NotificationPopover: NotificationPopover, Sidebar: Sidebar, MobileMenu: MobileMenu, Footer: Footer, SignIn: SignIn, NotFound: NotFound, Toast: Toast, ToastStack: ToastStack, DialogError: DialogError, SearchSelect: SearchSelect, ServerSelect: ServerSelect };
  window.Starter = Object.assign(window.Starter || {}, api);
})();
