/* @ds-bundle: {"format":4,"namespace":"Starter","components":[{"name":"Icon"},{"name":"Button"},{"name":"IconButton"},{"name":"SearchInput"},{"name":"Select"},{"name":"FormField"},{"name":"Toggle"},{"name":"StatusBadge"},{"name":"Table"},{"name":"Card"},{"name":"KpiCard"},{"name":"Dialog"},{"name":"Tabs"},{"name":"PageHeader"},{"name":"AppHeader"},{"name":"NotificationItem"},{"name":"NotificationPopover"},{"name":"Sidebar"},{"name":"MobileMenu"},{"name":"Footer"},{"name":"SignIn"},{"name":"NotFound"},{"name":"Toast"},{"name":"ToastStack"},{"name":"DialogError"},{"name":"SearchSelect"},{"name":"ServerSelect"},{"name":"SiteHeader"},{"name":"SiteHero"},{"name":"SiteFooter"},{"name":"SiteDialog"},{"name":"SafariCard"},{"name":"SafariFilters"},{"name":"FilterChip"},{"name":"SafariSummary"},{"name":"SitePanel"},{"name":"Comment"},{"name":"RadioList"},{"name":"WebNotificationItem"},{"name":"DetailList"},{"name":"PinButton"},{"name":"JoinedLeft"},{"name":"Banner"},{"name":"PackageCard"},{"name":"PackageFilters"},{"name":"PackageSummary"},{"name":"PriceBar"},{"name":"SectionTabs"},{"name":"PackageSection"},{"name":"GallerySlider"},{"name":"ItineraryDay"},{"name":"InclusionList"},{"name":"FaqItem"},{"name":"Disclaimer"},{"name":"QuoteForm"},{"name":"NotInUse"},{"name":"ParkCard"},{"name":"ParkMap"},{"name":"FormPanel"},{"name":"StepsPanel"},{"name":"ParkPicker"},{"name":"LogoField"},{"name":"PortalSignIn"},{"name":"AccessGuard"},{"name":"KpiTile"},{"name":"PackageListItem"},{"name":"PackageCell"},{"name":"VersionCell"},{"name":"EditorCard"},{"name":"SidePanel"},{"name":"VersionRow"},{"name":"DayEditor"},{"name":"FaqEditRow"},{"name":"ImageField"},{"name":"TagColors"},{"name":"PhotoTile"},{"name":"GalleryCard"},{"name":"HotCold"},{"name":"BusinessProfile"}]} */
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

/* WITW website shell and Shared Safari components, from the Shared Safari boards (W1–W9, C1–C7). */
(function () {
  var React = window.React, h = React.createElement, Fragment = React.Fragment, S = window.Starter;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  /* The boards' own Lucide glyphs (inner SVG markup, stroke 2). */
  var G = {"store":"<path d=\"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7\"></path><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"></path><path d=\"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4\"></path><path d=\"M2 7h20\"></path><path d=\"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7\"></path>","mail":"<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"></rect><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\"></path>","map-pin":"<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle>","calendar":"<path d=\"M8 2v4\"></path><path d=\"M16 2v4\"></path><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"></rect><path d=\"M3 10h18\"></path>","users":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path>","car":"<path d=\"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2\"></path><circle cx=\"7\" cy=\"17\" r=\"2\"></circle><path d=\"M9 17h6\"></path><circle cx=\"17\" cy=\"17\" r=\"2\"></circle>","hotel":"<rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"></rect><path d=\"M9 22v-4h6v4\"></path><path d=\"M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01\"></path>","indian-rupee":"<path d=\"M6 3h12\"></path><path d=\"M6 8h12\"></path><path d=\"m6 13 8.5 8\"></path><path d=\"M6 13h3\"></path><path d=\"M9 13c6.667 0 6.667-10 0-10\"></path>","facebook":"<path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path>","x-brand":"<path d=\"M4 4l11.733 16H20L8.267 4z\"></path><path d=\"M4 20l6.768-6.768\"></path><path d=\"M20 4l-6.768 6.768\"></path>","instagram":"<rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" rx=\"5\" ry=\"5\"></rect><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"></path><line x1=\"17.5\" x2=\"17.51\" y1=\"6.5\" y2=\"6.5\"></line>","whatsapp":"<path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\"></path>","linkedin":"<path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path><rect width=\"4\" height=\"12\" x=\"2\" y=\"9\"></rect><circle cx=\"4\" cy=\"4\" r=\"2\"></circle>","telegram":"<path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\"></path><path d=\"m21.854 2.147-10.94 10.939\"></path>","link":"<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"></path><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"></path>","flag":"<path d=\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\"></path><line x1=\"4\" x2=\"4\" y1=\"22\" y2=\"15\"></line>","pin":"<path d=\"M12 17v5\"></path><path d=\"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z\"></path>","circle-user":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"10\" r=\"3\"></circle><path d=\"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662\"></path>","binoculars":"<path d=\"M10 10h4\"></path><path d=\"M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3\"></path><path d=\"M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z\"></path><path d=\"M 22 16 L 2 16\"></path><path d=\"M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z\"></path><path d=\"M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3\"></path>"};
  function Glyph(p) {
    return h('svg', { className: cx('st-icon', p.className), viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false', dangerouslySetInnerHTML: { __html: G[p.name] || '' } });
  }
  function Avatar(p) { return h('span', { className: cx('st-avatar', p.className), title: p.title }, p.children); }

  /* ---- Website shell ---- */
  function SiteHeader(p) {
    var nav = p.nav || [];
    var user = p.user;
    return h('header', { className: 'wb-head' },
      h('a', { className: 'wb-logo', href: p.logoHref || '#', 'aria-label': 'Walk Into The Wild home' }, p.logo ? h('img', { src: p.logo, alt: 'Walk Into The Wild' }) : null),
      h('nav', { className: 'wb-nav', 'aria-label': 'Website' }, nav.map(function (n, i) {
        var on = n.current, off = !on && !n.href;
        return h('a', { key: i, className: on ? 'is-on' : off ? 'is-off' : null, href: n.href, 'aria-current': on ? 'page' : undefined }, n.icon ? h('img', { src: n.icon, alt: '' }) : null, n.label);
      })),
      h('div', { className: 'wb-right' }, user ? [
        h('div', { key: 'b', className: 'wb-wrap' }, h('button', { type: 'button', className: 'wb-ic is-bell', 'aria-label': 'Notifications', 'aria-haspopup': 'dialog', 'aria-expanded': false, onClick: p.onBell },
          h(Glyph, { name: 'mail' }), p.count ? h('span', { className: 'wb-cnt' }, p.count) : null)),
        h('div', { key: 'u', className: 'wb-wrap' }, h('button', { type: 'button', className: 'wb-ic', 'aria-label': 'Account: ' + (user.name || ''), 'aria-haspopup': 'true', 'aria-expanded': false, onClick: p.onAccount },
          user.logo !== undefined ? h('span', { className: 'wb-me pk-me' }, user.logo ? h('img', { src: user.logo, alt: '' }) : h(Glyph, { name: 'store' })) : h('span', { className: 'wb-me' }, user.initial || (user.name || '?').charAt(0))))
      ] : h('a', { className: 'wb-ic', href: p.signInHref || '#', 'aria-label': 'Sign in' }, h(Glyph, { name: 'circle-user' }))));
  }
  function SiteHero(p) {
    return h('section', { className: 'wb-hero' }, h('h1', null, p.title), p.text ? h('p', null, p.text) : null);
  }
  var FOOT = {
    about: ['We offer a seamless experience, connecting you with multiple safari tour operators and providing all the essential details you need to make informed decisions about your wildlife safari, all at no cost.',
      'Our shared safari feature connects you with fellow safari enthusiasts, enabling you to form a group and embark on a shared safari adventure together.'],
    policy: ['Privacy Policy', 'Terms & Conditions', 'Refund Policy'],
    links: ['About Us', 'Contact us', 'FAQs'],
    address: 'New Delhi, India', email: 'support@walkintothewild.in', instagram: 'walkintothewild.in',
    developer: 'Developed by Mediarc Technologies Private Limited', copyright: 'Copyright © 2025 | All rights reserved'
  };
  function SiteFooter(p) {
    var f = Object.assign({}, FOOT, p);
    function link(l, i) { return typeof l === 'string' ? h('a', { key: i, className: 'is-off' }, l) : h('a', { key: i, href: l.href }, l.label); }
    return h('footer', { className: 'wb-foot' },
      f.grass ? h('img', { className: 'wb-grass', src: f.grass, alt: '' }) : null,
      h('div', { className: 'wb-cols' },
        h('div', null, h('h2', null, 'About Us'), f.about.map(function (t, i) { return h('p', { key: i }, t); })),
        h('div', null, h('h2', null, 'Policy'), f.policy.map(link)),
        h('div', null, h('h2', null, 'Useful Links'), f.links.map(link)),
        h('div', null, h('h2', null, 'Contact Info'),
          h('p', { className: 'wb-line' }, h('b', null, 'Address:'), ' ' + f.address),
          h('p', { className: 'wb-line' }, h('b', null, 'Email:'), ' ' + f.email),
          h('a', { className: 'wb-insta is-off' }, h('span', null, h(Glyph, { name: 'instagram' })), f.instagram))),
      h('div', { className: 'wb-bottom' }, f.wordmark ? h('img', { src: f.wordmark, alt: 'Walk Into The Wild' }) : null, h('span', null, f.developer), h('span', null, f.copyright)));
  }
  function SiteDialog(p) {
    if (p.open === false) return null;
    var steps = p.steps || 0, step = p.step || 1;
    return h('div', { className: 'st-overlay', onClick: p.onClose },
      h('form', { className: 'st-modal wb-modal', role: 'dialog', 'aria-modal': 'true', 'aria-label': p.title, noValidate: true, onClick: function (e) { e.stopPropagation(); }, onSubmit: function (e) { e.preventDefault(); } },
        h('div', { className: 'wb-mh' }, h('h2', null, p.title), h('button', { type: 'button', 'aria-label': 'Close', onClick: p.onClose }, h(S.Icon, { name: 'x' }))),
        h('div', { className: 'wb-mb' }, p.children),
        h('div', { className: 'wb-mf' },
          h('button', { type: 'button', className: 'wb-tb is-muted', onClick: p.onCancel || p.onClose }, p.cancelLabel || 'Cancel'),
          h('button', { type: 'button', className: 'wb-tb', onClick: p.onNext }, p.nextLabel || (steps && step < steps ? 'Next' : 'Save'))),
        steps > 1 ? h('div', { className: 'wb-dots', 'aria-label': 'Step ' + step + ' of ' + steps },
          Array.apply(null, Array(steps)).map(function (_, i) { return h('span', { key: i, className: cx('wb-dot', i + 1 === step && 'is-on') }); })) : null));
  }

  /* ---- Shared Safari, website ---- */
  var ACTIONS = { join: ['Join Safari', 'st-btn-primary'], view: ['View Safari', 'st-btn-secondary'], leave: ['Leave Safari', 'st-btn-secondary wb-leave'], full: ['Seat Full', 'st-btn-secondary is-full'] };
  function SafariCard(p) {
    var a = ACTIONS[p.action || 'join'] || ACTIONS.join, faces = p.faces || [];
    return h('div', { className: 'wb-card', onClick: p.onOpen },
      h('div', { className: 'wb-img' }, p.image ? h('img', { src: p.image, alt: '' }) : null, p.month ? h('span', { className: 'wb-date' }, p.month, h('br'), p.day) : null),
      h('div', { className: cx('wb-strip', (p.full || p.action === 'full') && 'is-full') }, h('span', null, 'Safaris', h('b', null, p.safaris)), h('span', null, 'Seats', h('b', null, p.seats))),
      h('div', { className: 'wb-body' },
        h('h3', { className: 'wb-title' }, h('a', { href: p.href || '#' }, p.title)),
        h('div', { className: 'wb-host' }, h(Avatar, null, p.hostInitials),
          h('div', null, h('div', { className: 'wb-by' }, h('b', null, p.host), ' has shared a safari'),
            h('div', { className: 'wb-park' }, h(Glyph, { name: 'map-pin' }), h('span', null, p.park)))),
        h('div', { className: 'wb-cfoot' },
          h('div', { className: 'wb-faces' },
            faces.length ? h('span', { className: 'wb-stack' }, faces.map(function (f, i) { return h(Avatar, { key: i, title: f.name }, f.initials); }), p.more ? h(Avatar, { className: 'wb-more' }, '+' + p.more) : null) : null,
            h('span', { className: 'ss-cap' }, (p.joined != null ? p.joined : faces.length + (p.more || 0)) + ' joined')),
          h('button', { type: 'button', className: cx('st-btn', a[1], 'wb-join'), onClick: function (e) { e.stopPropagation(); if (p.onAction) p.onAction(p.action || 'join'); } }, p.actionLabel || a[0]))));
  }
  function inr(n) { return '₹' + Number(n).toLocaleString('en-IN'); }
  function Range(p) {
    return h('div', { className: 'st-field' }, h('span', { className: 'st-label' }, p.label),
      h('div', { className: 'wb-range' },
        h('input', { type: 'range', min: p.min, max: p.max, step: p.step || 1, 'aria-label': p.lowLabel, defaultValue: p.from != null ? p.from : p.min }),
        h('input', { type: 'range', min: p.min, max: p.max, step: p.step || 1, 'aria-label': p.highLabel, defaultValue: p.to != null ? p.to : p.max })),
      h('div', { className: 'wb-range-v' }, h('span', null, p.minText), h('span', null, p.maxText)));
  }
  function Checks(p) {
    var on = p.checked || [];
    return h('div', { className: 'st-field' }, h('span', { className: 'st-label' }, p.label),
      h('div', { className: 'ss-checks' }, p.options.map(function (o, i) { return h('label', { key: i, className: 'st-check' }, h('input', { type: 'checkbox', defaultChecked: on.indexOf(o) >= 0 }), o); })));
  }
  function SafariFilters(p) {
    var price = p.price || { min: 100, max: 50000, step: 100 }, count = p.safaris || { min: 1, max: 10 };
    function sel(id, label, opts) {
      return h('div', { className: 'st-field' }, h('label', { className: 'st-label', htmlFor: id }, label),
        h('select', { id: id, className: 'st-select' }, h('option', { value: '' }, 'Any / All'), (opts || []).map(function (o, i) { return h('option', { key: i, value: i + 1 }, o); })));
    }
    return h('aside', { className: 'wb-side' },
      p.onOrganise !== false && p.organise !== false ? h('button', { type: 'button', className: 'st-btn st-btn-primary wb-org', onClick: p.onOrganise }, p.organiseLabel || '+ Organize a Shared Safari') : null,
      h('div', { className: 'wb-filters', 'aria-label': 'Filters' }, h('h2', null, 'Select Filters'),
        sel('f-park', 'Safari Park', p.parks), sel('f-month', 'Month', p.months),
        h(Range, { label: 'Budget Price Per Person', min: price.min, max: price.max, step: price.step, from: price.from, to: price.to, lowLabel: 'Lowest price per person', highLabel: 'Highest price per person', minText: inr(price.from != null ? price.from : price.min), maxText: inr(price.to != null ? price.to : price.max) + '+' }),
        h(Range, { label: 'Total Safaris', min: count.min, max: count.max, from: count.from, to: count.to, lowLabel: 'Fewest safaris', highLabel: 'Most safaris', minText: String(count.from != null ? count.from : count.min), maxText: (count.to != null ? count.to : count.max) + '+' }),
        h(Checks, { label: 'Theme', options: p.themes || ['Photography', 'Safari Experience'], checked: p.checked }),
        h(Checks, { label: 'Stay Category', options: p.stays || ['Premium', 'Standard', 'Economical', 'Not Included', 'Forest Rest House', 'Home Stay'], checked: p.checked })));
  }
  function FilterChip(p) {
    return h('span', { className: 'ss-chip' }, p.label, h('button', { type: 'button', className: 'st-iconbtn', 'aria-label': 'Remove ' + p.label, onClick: p.onRemove }, h(S.Icon, { name: 'x' })));
  }
  var FACT_ICON = { trip: 'calendar', seats: 'users', safaris: 'car', stay: 'hotel', theme: 'binoculars', cost: 'indian-rupee' };
  var SOCIAL = [['Facebook', 'facebook', 'rgb(59, 89, 152)'], ['X', 'x-brand', 'rgb(0, 0, 0)'], ['Instagram', 'instagram', 'rgb(225, 48, 108)'], ['WhatsApp', 'whatsapp', 'rgb(37, 211, 102)'],
    ['LinkedIn', 'linkedin', 'rgb(10, 102, 194)'], ['Telegram', 'telegram', 'rgb(34, 158, 217)'], ['Copy link', 'link', 'rgb(244, 194, 13)']];
  function SafariSummary(p) {
    return h('section', { className: 'ss3-top' },
      h('div', { className: 'ss3-head' },
        h('div', { className: 'ss3-main' },
          h('div', { className: 'ss3-pic' }, p.image ? h('img', { src: p.image, alt: '' }) : null),
          h('div', { className: 'ss3-info' },
            h('div', { className: 'ss3-title' }, h('h1', null, p.title), p.badge || null),
            h('span', { className: 'ss3-dates' }, p.dates),
            h('span', { className: 'ss3-park' }, h(Glyph, { name: 'map-pin' }), h('span', null, p.park)),
            h('span', { className: 'ss3-org' }, 'Organized by ', h('b', null, p.organiser)))),
        h('div', { className: 'ss3-facts' }, (p.facts || []).map(function (f, i) {
          return h('div', { key: i, className: 'ss3-fact' }, h(Glyph, { name: FACT_ICON[f.icon] || f.icon }), h('div', null, h('div', { className: 'ss3-fl' }, f.label), h('div', { className: 'ss3-fv' }, f.value)));
        }))),
      h('div', { className: 'ss3-share' },
        p.share === false ? h('span') : h('div', { className: 'ss3-sl' }, h('span', null, p.shareLabel || 'Share this safari with your friends:'),
          h('div', { className: 'ss3-soc' }, SOCIAL.map(function (s) { return h('span', { key: s[0], title: s[0], 'aria-label': s[0], style: { background: s[2] } }, h(Glyph, { name: s[1] })); }))),
        h('div', { className: 'ss3-acts' }, p.actions)));
  }
  function SitePanel(p) {
    var head = p.onTitle
      ? h('button', { type: 'button', className: 'ss3-bh ss3-bh-btn', 'aria-haspopup': 'dialog', onClick: p.onTitle }, p.icon ? h(Glyph, { name: p.icon }) : null, h('span', null, p.title))
      : h('div', { className: 'ss3-bh' }, p.icon ? h(Glyph, { name: p.icon }) : null, p.title);
    return h('div', { className: 'ss3-box2' }, head,
      h('div', { className: 'ss3-bb' }, p.text ? h('p', { className: 'ss-pre' }, p.text) : null,
        p.faces ? h('div', { className: 'ss3-faces' }, p.faces.map(function (f, i) { return h(Avatar, { key: i, className: 'ss3-face', title: f.name }, f.initials); })) : null,
        p.children),
      p.note ? h('div', { className: 'ss3-note' }, h('p', { className: 'ss3-empty' }, p.note)) : null);
  }
  function Comment(p) {
    var one = h('div', { className: 'ss3-c', key: 'c' }, h(Avatar, { className: 'ss-av' }, p.initials),
      h('div', { className: 'ss3-cb' },
        h('div', { className: 'ss3-ch' },
          h('span', null, h('span', { className: 'ss3-cn' }, p.name + (p.host ? ' (Host)' : '')), ' ', h('span', { className: 'ss-cap' }, '· ' + p.time)),
          p.canFlag === false ? null : h('span', { className: 'ss3-cacts' }, h('button', { type: 'button', className: 'st-iconbtn', 'aria-label': 'Flag this comment', 'data-tooltip': 'Flag', onClick: p.onFlag }, h(Glyph, { name: 'flag' })))),
        h('p', { className: 'ss3-ct' }, p.text)));
    if (!p.replies || !p.replies.length) return one;
    return h(Fragment, null, one, p.replies.map(function (r, i) { return h('div', { key: i, className: 'ss3-reply' }, h(Comment, Object.assign({}, r, { replies: null }))); }));
  }
  function RadioList(p) {
    return h('div', { role: 'radiogroup', 'aria-label': p.label }, p.options.map(function (o, i) {
      o = typeof o === 'string' ? { value: o, label: o } : o;
      return h('label', { key: i, className: 'ss-radio', style: p.tight ? { padding: '4px 0px' } : undefined },
        h('input', { type: 'radio', name: p.name, value: o.value, defaultChecked: p.value === o.value, onChange: p.onChange ? function () { p.onChange(o.value); } : undefined }),
        h('span', null, o.label, o.hint ? h('small', null, o.hint) : null));
    }));
  }
  function WebNotificationItem(p) {
    return h('a', { className: cx('wn-i', p.unread && 'is-unread'), href: p.href || '#' }, h(Avatar, null, p.initials),
      h('span', null, h('span', { className: 'wn-t' }, p.children || p.text),
        h('span', { className: 'wn-m' }, p.tag ? h(S.StatusBadge, { tone: p.tag.tone }, p.tag.label) : null, h('span', null, p.time))),
      p.unread ? h('span', { className: 'wn-dot', 'aria-label': 'Unread' }) : null);
  }

  /* ---- Shared Safari, console ---- */
  function DetailList(p) {
    var dl = h('dl', { className: p.columns === 2 ? 'ssc-dl' : 'ss-dl' }, (p.items || []).map(function (it, i) {
      return h(Fragment, { key: i }, h('dt', null, it[0]), h('dd', null, it[1] == null || it[1] === '' ? h('span', { className: 'empty-value' }, '–') : it[1]));
    }));
    return p.title ? h('div', { className: 'ss-stack-lg' }, h('span', { className: 'ss-group' }, p.title), dl) : dl;
  }
  function PinButton(p) {
    var label = p.pinned ? 'Unpin' : 'Pin';
    return h('button', { type: 'button', className: cx('st-iconbtn', 'ssc-pinbtn', p.pinned && 'is-on'), 'aria-pressed': !!p.pinned, 'aria-label': label, 'data-tooltip': label, onClick: p.onToggle }, h(Glyph, { name: 'pin', className: 'ssc-pin' }));
  }
  function JoinedLeft(p) {
    return h('span', { className: 'ssc-jl' },
      h('button', { type: 'button', className: 'st-btn st-btn-text', 'aria-label': 'Joined: ' + p.joined, onClick: p.onJoined }, p.joined), '/',
      h('button', { type: 'button', className: 'st-btn st-btn-text', 'aria-label': 'Left: ' + p.left, onClick: p.onLeft }, p.left));
  }

  Object.assign(S, { SiteHeader: SiteHeader, SiteHero: SiteHero, SiteFooter: SiteFooter, SiteDialog: SiteDialog, SafariCard: SafariCard, SafariFilters: SafariFilters, FilterChip: FilterChip,
    SafariSummary: SafariSummary, SitePanel: SitePanel, Comment: Comment, RadioList: RadioList, WebNotificationItem: WebNotificationItem, DetailList: DetailList, PinButton: PinButton, JoinedLeft: JoinedLeft });
})();

/* Packages: website, Partner portal and Console parts, from the Responsive prototype's Packages boards (P1–P6, PP1–PP10, PC1–PC9). */
(function () {
  var React = window.React, h = React.createElement, Fragment = React.Fragment, S = window.Starter;
  var useState = React.useState, useEffect = React.useEffect;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  var G = {"map-pin":"<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle>","clock":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 6 12 12 16 14\"></polyline>","car":"<path d=\"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2\"></path><circle cx=\"7\" cy=\"17\" r=\"2\"></circle><path d=\"M9 17h6\"></path><circle cx=\"17\" cy=\"17\" r=\"2\"></circle>","bed":"<path d=\"M2 4v16\"></path><path d=\"M2 8h18a2 2 0 0 1 2 2v10\"></path><path d=\"M2 17h20\"></path><path d=\"M6 8v9\"></path>","camera":"<path d=\"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z\"></path><circle cx=\"12\" cy=\"13\" r=\"3\"></circle>","flag":"<path d=\"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528\"></path>","utensils":"<path d=\"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2\"></path><path d=\"M7 2v20\"></path><path d=\"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7\"></path>","star":"<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\"></path>","chevron-left":"<path d=\"m15 18-6-6 6-6\"></path>","chevron-right":"<path d=\"m9 18 6-6-6-6\"></path>","chevron-down":"<path d=\"m6 9 6 6 6-6\"></path>","check":"<path d=\"M20 6 9 17l-5-5\"></path>","x":"<path d=\"M18 6 6 18\"></path><path d=\"m6 6 12 12\"></path>","package":"<path d=\"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z\"></path><path d=\"M12 22V12\"></path><path d=\"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7\"></path><path d=\"m7.5 4.27 9 5.15\"></path>","external-link":"<path d=\"M15 3h6v6\"></path><path d=\"M10 14 21 3\"></path><path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path>","circle-check":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"m16 9-5.5 5.5L8 12\"></path>","send":"<path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\"></path><path d=\"m21.854 2.147-10.94 10.939\"></path>"};
  function Glyph(p) {
    return h('svg', { className: cx('st-icon', p.className), viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false', dangerouslySetInnerHTML: { __html: G[p.name] || '' } });
  }
  function Badge(s) { return s ? h(S.StatusBadge, { tone: s.tone || 'success' }, s.label) : null; }
  function Field(p) {
    return h('div', { className: 'st-field' }, h('label', { className: 'st-label', htmlFor: p.id }, p.label, p.required ? h('span', { className: 'st-req', 'aria-hidden': 'true' }, '*') : null), p.children, p.helper ? h('span', { className: 'st-helper' }, p.helper) : null);
  }
  function Tag(t) { return t ? h('span', { className: 'pk-tag', style: { background: t.bg || 'var(--primary)', color: t.color || '#FFFFFF' } }, t.text) : null; }
  function Best(on) { return on ? h('span', { className: 'pk-best' }, h(Glyph, { name: 'star' }), 'Best deal') : null; }

  /* Small shared part */
  function Banner(p) {
    return h('div', { className: cx('st-banner', 'st-banner-' + (p.tone || 'info'), 'pq-banner'), role: p.tone === 'danger' ? 'alert' : 'status' }, p.children);
  }

  /* ---- Website ---- */
  function PackageCard(p) {
    return h('div', { className: 'pk-card', onClick: p.onOpen },
      h('div', { className: 'pk-img' }, p.image ? h('img', { src: p.image, alt: '' }) : null, Best(p.best), Tag(p.tag)),
      h('div', { className: 'pk-body' },
        h('h3', { className: 'pk-name' }, p.title),
        h('div', { className: 'pk-park' }, h(Glyph, { name: 'map-pin' }), h('span', null, p.park)),
        h('div', { className: 'pk-lines' }, h('span', { className: 'pk-line' }, h(Glyph, { name: 'clock' }), p.duration), p.activity ? h('span', { className: 'pk-line' }, h(Glyph, { name: 'car' }), p.activity) : null),
        h('div', { className: 'pk-foot' },
          h('div', null, p.before ? h('span', { className: 'pk-old' }, p.before) : null, h('span', { className: 'pk-ppp' }, p.price + ' ', h('small', null, '/Person')), h('span', { className: 'pk-tot' }, 'Total Price ' + p.total)),
          h('button', { type: 'button', className: 'st-btn st-btn-primary pk-view', onClick: function (e) { e.stopPropagation(); if (p.onView) p.onView(); } }, p.actionLabel || 'View Details')),
        h('div', { className: 'pk-msg' }, p.message || 'Include taxes and fees')));
  }
  function inr(n) { return '₹' + Number(n).toLocaleString('en-IN'); }
  function Range(p) {
    return h('div', { className: 'st-field' }, h('span', { className: 'st-label' }, p.label),
      h('div', { className: 'wb-range' },
        h('input', { type: 'range', min: p.min, max: p.max, step: p.step || 1, 'aria-label': p.label + ', lowest', defaultValue: p.min }),
        h('input', { type: 'range', min: p.min, max: p.max, step: p.step || 1, 'aria-label': p.label + ', highest', defaultValue: p.max })),
      h('div', { className: 'wb-range-v' }, h('span', null, p.minText), h('span', null, p.maxText)));
  }
  function Checks(label, list) {
    return h('div', { className: 'st-field' }, h('span', { className: 'st-label' }, label),
      h('div', { className: 'ss-checks' }, list.map(function (o) { return h('label', { key: o, className: 'st-check' }, h('input', { type: 'checkbox' }), o); })));
  }
  var STAYS = ['Premium', 'Standard', 'Economical', 'Not Included', 'Forest Rest House', 'Home Stay'];
  var FEATURES = ['Multiple Parks', 'Customizable', 'Private Room', 'Shared Room', 'Private Safari', 'Shared Safari', 'Photography Special', 'Forest Rest House Stay', 'Other Activities'];
  var INCLUSIONS = ['Accommodation', 'Meals', 'Pick & Drop', 'Camera Fee', 'Permit', 'Guide Fee'];
  function PackageFilters(p) {
    return h('aside', { className: 'wb-side' },
      h('div', { className: 'wb-filters', 'aria-label': 'Filters' }, h('h2', null, 'Select Filters'),
        p.park === false ? null : h('div', { className: 'st-field' }, h('label', { className: 'st-label', htmlFor: 'f-park' }, 'Park'),
          h('select', { id: 'f-park', className: 'st-select' }, h('option', { value: '' }, 'Any / All'), (p.parks || []).map(function (o, i) { return h('option', { key: i, value: i + 1 }, o); }))),
        h(Range, { label: 'Cost (Per Person)', min: 0, max: 50000, step: 1000, minText: inr(0), maxText: inr(50000) + '+' }),
        h(Range, { label: 'Tour Duration (Nights)', min: 0, max: 10, minText: '0', maxText: '10+' }),
        h(Range, { label: 'Total Safaris', min: 1, max: 10, minText: '1', maxText: '10+' }),
        Checks('Stay Category', p.stays || STAYS), Checks('Features', p.features || FEATURES), Checks('Included', p.inclusions || INCLUSIONS)));
  }
  var FACT = { duration: 'clock', safaris: 'car', vehicle: 'car', stay: 'bed', theme: 'camera', start: 'map-pin', end: 'flag', meals: 'utensils', pickup: 'car' };
  function PackageSummary(p) {
    return h('div', { className: 'pk2-top' },
      h('div', { className: 'pk2-main' },
        h('div', { className: 'pk2-pic' }, p.image ? h('img', { src: p.image, alt: '' }) : null),
        h('div', null, h('h2', { className: 'pk2-name' }, p.title),
          h('div', { className: 'pk2-parks' }, h(Glyph, { name: 'map-pin' }), h('span', null, p.parks)),
          h('div', { className: 'pk2-tags' }, Tag(p.tag), Best(p.best)))),
      h('div', { className: 'pk2-facts' }, (p.facts || []).map(function (f, i) {
        return h('div', { key: i, className: 'pk2-fact' }, h(Glyph, { name: FACT[f.icon] || f.icon }), h('div', null, h('small', null, f.label), h('b', null, f.value)));
      })));
  }
  function PriceBar(p) {
    return h('div', { className: 'pk2-pricebar' }, p.left ? h('span', { className: 'pk2-op' }, p.left) : h('span'),
      h('div', { className: 'pk2-price' },
        h('div', null, p.before ? h('span', { className: 'pk-old' }, p.before) : null, h('span', { className: 'pk-ppp' }, p.price + ' ', h('small', null, '/Person')),
          h('span', { className: 'pk-tot' }, 'Total Price ' + p.total), h('span', { className: 'pk-tot' }, p.message || 'Include taxes and fees')),
        p.action === false ? null : h('button', { type: 'button', className: 'st-btn st-btn-primary', onClick: p.onAction }, p.actionLabel || 'Request a quote')));
  }
  function SectionTabs(p) {
    var st = useState(p.active || 0), a = st[0];
    return h('div', { className: 'nt-tabs pk2-tabs', role: 'tablist' }, p.tabs.map(function (t, i) {
      t = typeof t === 'string' ? { label: t } : t;
      return h('a', { key: i, className: cx('nt-tab', i === a && 'is-on'), role: 'tab', 'aria-selected': i === a, onClick: function () { st[1](i); if (p.onChange) p.onChange(i); } }, t.label, t.count != null ? h('span', null, t.count) : null);
    }));
  }
  function PackageSection(p) {
    return h('div', { className: cx('pk2-sec', p.className) }, h('div', { className: 'pk2-sec-h' }, p.title, p.aside ? h('span', null, p.aside) : null), h('div', { className: 'pk2-sec-b' }, p.children));
  }
  function GallerySlider(p) {
    var photos = p.photos || [], n = photos.length;
    var st = useState(p.index || 0), i = st[0];
    useEffect(function () {
      if (p.autoplay === false || n < 2) return undefined;
      var t = setInterval(function () { st[1](function (x) { return (x + 1) % n; }); }, 3000);
      return function () { clearInterval(t); };
    }, [n, p.autoplay]);
    if (!n) return null;
    var ph = photos[i];
    return h(Fragment, null, h('p', { className: 'pk2-gt' }, p.title || 'Gallery'),
      h('div', { className: 'pk2-slider', 'aria-roledescription': 'carousel', 'aria-label': p.title || 'Gallery' },
        h('img', { src: ph.src, alt: ph.title || '' }), h('span', { className: 'pk2-dots' }, (i + 1) + ' / ' + n),
        h('button', { type: 'button', className: 'pk2-arrow is-l', 'aria-label': 'Previous photo', onClick: function () { st[1]((i + n - 1) % n); } }, h(Glyph, { name: 'chevron-left' })),
        h('button', { type: 'button', className: 'pk2-arrow is-r', 'aria-label': 'Next photo', onClick: function () { st[1]((i + 1) % n); } }, h(Glyph, { name: 'chevron-right' })),
        ph.title || ph.caption ? h('div', { className: 'pk2-cap' }, ph.title ? h('b', null, ph.title) : null, ph.caption ? h('span', null, ph.caption) : null) : null));
  }
  function ItineraryDay(p) {
    return h('div', { className: 'pk2-day' }, h('h3', null, h('span', null, (p.label || 'Day ' + p.n) + ':'), ' ' + p.title),
      h('p', { className: 'pk2-text' }, p.text),
      p.details && p.details.length ? h('dl', { className: 'pk2-dl' }, p.details.map(function (d, i) { return h(Fragment, { key: i }, h('dt', null, d[0]), h('dd', null, d[1])); })) : null,
      p.image ? h('img', { className: 'pk2-dimg', src: p.image, alt: '' }) : null, p.children);
  }
  function InclusionList(p) {
    var yes = p.items.filter(function (x) { return x.included; }), no = p.items.filter(function (x) { return !x.included; });
    function list(t, xs, cls, g) { return h('div', null, h('h3', null, t), h('ul', null, xs.map(function (x, i) { return h('li', { key: i, className: cls }, h(Glyph, { name: g }), x.label); }))); }
    return h(Fragment, null, h('div', { className: 'pk2-inc' }, list('Included', yes, 'is-y', 'check'), list('Not included', no, 'is-n', 'x')),
      p.more ? h('div', null, h('h3', { className: 'pk2-gt' }, 'More inclusions'), h('p', { className: 'pk2-text' }, p.more)) : null,
      p.exclusions ? h('div', null, h('h3', { className: 'pk2-gt' }, 'Exclusions'), h('p', { className: 'pk2-text' }, p.exclusions)) : null);
  }
  function FaqItem(p) {
    var st = useState(!!p.open);
    return h('div', { className: 'pk2-faq' },
      h('button', { type: 'button', 'aria-expanded': st[0], onClick: function () { st[1](!st[0]); } }, p.question, h(Glyph, { name: 'chevron-down' })),
      st[0] ? h('p', null, p.answer) : null);
  }
  var DISC = 'This tour is operated by our authorised safari tour operator, not directly by Walk Into The Wild. This tour is governed by the terms and conditions set forth by Walk Into The Wild.';
  function Disclaimer(p) { return h('div', { className: 'pk2-disc' }, h('h2', null, 'Disclaimer'), h('p', null, p.children || DISC)); }
  function QuoteForm(p) {
    var body;
    if (p.viewer === 'guest') body = h('div', { className: 'pk2-note' }, h('span', null, 'Log in to send a quote request to this operator.'), h('a', { className: 'st-btn st-btn-primary', href: p.loginHref || '#' }, 'Login'));
    else if (p.viewer === 'partner') body = h('div', { className: 'pk2-note' }, h('span', null, 'Partners can’t send quote requests. Your own packages and quote requests are in the Partner portal.'), h('a', { className: 'st-btn st-btn-secondary', href: p.portalHref || '#' }, h(Glyph, { name: 'external-link' }), 'Partner portal'));
    else body = h(Fragment, null,
      h('div', { className: 'pk2-qrow' },
        h(Field, { id: 'q-travellers', label: 'Travellers', required: true }, h('input', { id: 'q-travellers', className: 'st-input', type: 'number', min: 1, max: 100, inputMode: 'numeric' })),
        h(Field, { id: 'q-start', label: 'Start date', required: true }, h('input', { id: 'q-start', className: 'st-input', type: 'date' }))),
      h(Field, { id: 'q-notes', label: 'Notes', required: true }, h('textarea', { id: 'q-notes', className: 'st-textarea', rows: 4, maxLength: 1000, placeholder: 'Tell the operator about your group and what you need' })),
      h('span', { className: 'pk-counter' }, '0 / 1,000'),
      h('button', { type: 'button', className: 'st-btn st-btn-primary', onClick: p.onSend }, 'Request a quote'));
    return h(PackageSection, { className: 'pk2-quote', title: 'Request a quote' }, body);
  }
  function NotInUse(p) {
    return h('div', { className: 'pk2-state' }, h(Glyph, { name: 'package' }), h('h2', null, p.title || 'Package Not In Use!'),
      h('p', null, p.text || 'This package isn’t available right now.'), h('a', { className: 'st-btn st-btn-primary', href: p.href || '#' }, p.actionLabel || 'See all packages'));
  }
  function ParkCard(p) {
    return h('div', { className: 'pk-card pk5-card', onClick: p.onOpen },
      h('div', { className: 'pk-img' }, p.image ? h('img', { src: p.image, alt: '' }) : null),
      h('div', { className: 'pk-body' }, h('h3', { className: 'pk-name' }, p.name), h('span', { className: 'pk5-region' }, p.region),
        h('span', { className: 'pk5-price' }, p.price ? [p.price + ' ', h('small', { key: 's' }, 'average safari price')] : 'Price not set')));
  }
  function ParkMap(p) {
    return h('div', { className: 'pk6-map', role: 'img', 'aria-label': 'Map of ' + p.name },
      h('div', { className: 'pk6-zoom', 'aria-hidden': 'true' }, h('span', null, '+'), h('span', null, '−')),
      h('span', { className: 'pk6-pin' }, h(Glyph, { name: 'map-pin' })),
      h('span', { className: 'pk6-ll' }, p.lat + ', ' + p.lng + ' · Leaflet map'));
  }
  function FormPanel(p) {
    return h('div', { className: 'pk4-form' }, p.title ? h('h2', null, p.title) : null, p.children,
      p.footer ? h('div', { className: 'ss-row' }, p.footer) : null);
  }
  function StepsPanel(p) {
    return h('aside', { className: 'pk4-side' }, h('h3', null, p.title || 'How it works'), h('ol', null, p.steps.map(function (s, i) { return h('li', { key: i }, s); })));
  }
  function ParkPicker(p) {
    var st = useState(p.value || []), v = st[0];
    function toggle(x) { var n = v.indexOf(x) >= 0 ? v.filter(function (y) { return y !== x; }) : v.concat([x]); st[1](n); if (p.onChange) p.onChange(n); }
    return h('div', { className: 'pk-parkbox' },
      h('div', { className: 'st-input-group' }, h(S.Icon, { name: 'search' }), h('input', { className: 'st-input', placeholder: 'Search parks', 'aria-label': 'Search parks' })),
      v.length && p.chips !== false ? h('div', { className: 'pk-picked' }, v.map(function (x) { return h(S.FilterChip, { key: x, label: x, onRemove: function () { toggle(x); } }); })) : null,
      h('div', { className: 'pk-parklist', role: 'group', 'aria-label': 'Parks' }, p.parks.map(function (x) {
        return h('label', { key: x, className: 'st-check' }, h('input', { type: 'checkbox', checked: v.indexOf(x) >= 0, onChange: function () { toggle(x); } }), x);
      })));
  }
  function LogoField(p) {
    return h('div', { className: 'st-field' }, h('label', { className: 'st-label', htmlFor: p.id || 'b-logo' }, p.label || 'Logo'),
      h('div', { className: 'pk-logo' }, h('span', { className: 'pk-logo-box' }, p.image ? h('img', { src: p.image, alt: '' }) : (p.initials || 'Logo')),
        h('div', { className: 'ss-stack' }, h('input', { id: p.id || 'b-logo', className: 'st-input', type: 'file', accept: p.accept || '.jpg,.jpeg,.png,.webp' }))),
      h('span', { className: 'st-helper' }, p.helper || 'JPG, JPEG, PNG or WEBP, up to 1 MB'));
  }

  /* ---- Partner portal and Console ---- */
  function PortalSignIn(p) {
    return h('div', { className: 'pq-auth' }, h('form', { className: 'pq-auth-card', onSubmit: function (e) { e.preventDefault(); } },
      p.logo ? h('img', { src: p.logo, alt: 'Walk Into The Wild', style: { background: 'var(--primary)', padding: '8px 12px', borderRadius: '8px', height: '36px' } }) : null,
      h('h1', null, p.title || 'Partner Portal'), h('p', null, p.text || 'Sign in with your Walk Into The Wild website details.'),
      h(Field, { id: 'si-email', label: 'Email', required: true }, h('input', { id: 'si-email', className: 'st-input', type: 'email', autoComplete: 'email' })),
      h(Field, { id: 'si-password', label: 'Password', required: true }, h('input', { id: 'si-password', className: 'st-input', type: 'password', autoComplete: 'current-password' })),
      h('a', { href: p.forgotHref || '#', style: { alignSelf: 'flex-end', marginTop: '-12px', font: '500 13px/18px var(--font-sans)' } }, 'Forgot password?'),
      h('button', { type: 'button', className: 'st-btn st-btn-primary', style: { width: '100%' } }, 'Sign in'),
      h('p', { style: { textAlign: 'center' } }, 'Not a partner yet? ', h('a', { href: p.partnerHref || '#', style: { fontWeight: 600 } }, 'Become a Partner')),
      p.hint ? h('div', { className: 'pq-hint' }, p.hint) : null));
  }
  function AccessGuard(p) {
    return h('div', { className: 'pq-guard' }, h(Glyph, { name: p.icon || 'circle-check', className: 'state-icon' }), h('h2', null, p.title), p.text ? h('p', null, p.text) : null, p.action || null);
  }
  function KpiTile(p) { return h('a', { className: 'pq-kpi', href: p.href || '#' }, h('span', null, p.label), h('b', null, p.value)); }
  function PackageListItem(p) {
    return h('div', { className: 'pq-pk' }, p.image ? h('img', { src: p.image, alt: '' }) : null,
      h('div', null, h('b', null, p.title), h('span', { className: 'ss-cap' }, p.meta), h('br'), h('span', { className: 'ss-cap' }, p.price), h('br'), h('a', { href: p.href || '#' }, p.actionLabel || 'Open')));
  }
  function PackageCell(p) {
    var text = h('div', { className: 'pq-cell' }, h('b', null, p.title), p.sub ? h('span', { className: 'ss-cap' }, p.sub) : null);
    return p.image ? h('div', { className: 'ss-row', style: { flexWrap: 'nowrap' } }, h('img', { className: 'pq-thumb', src: p.image, alt: '' }), text) : text;
  }
  function VersionCell(p) { return h('div', { className: 'pq-ver' }, h('span', { className: 'ss-cap' }, p.live || 'Not live yet'), p.working ? Badge(p.working) : null); }
  function EditorCard(p) {
    var st = useState(p.active || 0), a = st[0];
    var inner = h(Fragment, null,
      p.tabs ? h('div', { className: 'nt-tabs', role: 'tablist' }, p.tabs.map(function (t, i) {
        return h('a', { key: i, className: cx('nt-tab', i === a && 'is-on'), role: 'tab', 'aria-selected': i === a, 'aria-disabled': !!(p.disabledFrom && i >= p.disabledFrom), onClick: function () { st[1](i); if (p.onChange) p.onChange(i); } }, t);
      })) : null,
      h('div', { className: 'pq-body' }, typeof p.children === 'function' ? p.children(a) : p.children));
    return h('div', { className: 'pq-card' }, p.readOnly ? h('div', { className: 'pq-ro' }, inner) : inner, p.footer ? h('div', { className: 'pq-foot' }, p.footer) : null);
  }
  function SidePanel(p) { return h('div', { className: 'pq-card' }, p.title ? h('h3', null, p.title) : null, p.children); }
  function VersionRow(p) { return h('div', { className: 'pq-vrow' }, h('div', null, h('b', null, p.version), h('span', null, p.text)), Badge(p.status)); }
  function DayEditor(p) { return h('div', { className: 'pq-day' }, h('h3', null, p.title || 'Day ' + p.n), p.children); }
  function FaqEditRow(p) {
    return h('div', { className: 'pq-faq' }, h('div', null, h('b', null, p.question), h('p', { className: 'ss-cap', style: { margin: '4px 0 0' } }, p.answer)),
      h('div', { className: 'us-acts' }, h(S.IconButton, { icon: 'pencil', label: 'Edit', onClick: p.onEdit }), h(S.IconButton, { icon: 'x', label: 'Delete', danger: true, onClick: p.onDelete })));
  }
  function ImageField(p) {
    return h(Field, { id: p.id, label: p.label, helper: p.helper },
      h('div', { className: 'pq-img' }, p.image ? h('img', { src: p.image, alt: '' }) : null,
        h('div', { className: 'ss-stack' }, h('input', { id: p.id, className: 'st-input', type: 'file', accept: p.accept || '.jpg,.jpeg,.png' }),
          p.image ? h('button', { type: 'button', className: 'st-btn st-btn-text', style: { alignSelf: 'flex-start' }, onClick: p.onRemove }, 'Remove') : null)));
  }
  function TagColors(p) {
    var bg = useState(p.bg || '#C0392B'), fg = useState(p.color || '#FFFFFF');
    return h('div', { className: 'pq-colors' },
      h('label', null, 'Background ', h('input', { type: 'color', value: bg[0], onChange: function (e) { bg[1](e.target.value); } })),
      h('label', null, 'Text ', h('input', { type: 'color', value: fg[0], onChange: function (e) { fg[1](e.target.value); } })),
      p.text ? h('span', { className: 'pq-tagprev', style: { background: bg[0], color: fg[0] } }, p.text) : null);
  }
  function PhotoTile(p) {
    return h('div', { className: cx('pq-photo', p.thumbnail && 'is-thumb') },
      h('div', { className: 'pq-photo-img' }, h('img', { src: p.image, alt: p.title || '' }), p.thumbnail ? h(S.StatusBadge, { tone: 'success' }, 'Thumbnail') : null),
      h('input', { className: 'st-input', maxLength: 255, placeholder: 'Title (optional)', 'aria-label': 'Photo title', defaultValue: p.title }),
      h('textarea', { className: 'st-textarea', rows: 2, placeholder: 'Caption (optional)', 'aria-label': 'Photo caption', defaultValue: p.caption }),
      h('div', { className: 'pq-photo-acts' },
        h('div', { className: 'us-acts' }, h(S.IconButton, { icon: 'chevron-left', label: 'Move left', disabled: p.first }), h(S.IconButton, { icon: 'chevron-right', label: 'Move right', disabled: p.last })),
        h('div', { className: 'us-acts' }, h('button', { type: 'button', className: 'st-btn st-btn-text', disabled: p.thumbnail }, 'Set as thumbnail'),
          h(S.IconButton, { icon: 'x', label: p.thumbnail ? 'The thumbnail can’t be removed' : 'Remove', danger: true, disabled: p.thumbnail }))));
  }
  function GalleryCard(p) {
    return h('div', { className: 'pq-gal' }, p.image ? h('img', { src: p.image, alt: '' }) : null,
      h('div', { className: 'pq-gal-b' }, h('b', null, p.title), p.meta ? h('span', { className: 'ss-cap' }, p.meta) : null, p.note ? h('span', { className: 'ss-cap' }, p.note) : null,
        h('div', { className: 'pq-gal-f' }, Badge(p.status), h('div', { className: 'us-acts' }, h(S.IconButton, { icon: p.action === 'view' ? 'eye' : 'pencil', label: p.action === 'view' ? 'View' : 'Edit', onClick: p.onOpen })))));
  }
  function HotCold(p) {
    var st = useState(p.value || null), v = st[0];
    function set(x) { var n = v === x ? null : x; st[1](n); if (p.onChange) p.onChange(n); }
    return h('div', { className: 'pq-seg', role: 'group', 'aria-label': 'Mark' },
      h('button', { type: 'button', className: v === 'hot' ? 'is-hot' : '', 'aria-pressed': v === 'hot', onClick: function () { set('hot'); } }, 'Hot'),
      h('button', { type: 'button', className: v === 'cold' ? 'is-cold' : '', 'aria-pressed': v === 'cold', onClick: function () { set('cold'); } }, 'Cold'));
  }
  function BusinessProfile(p) {
    return h('div', { className: 'pq-card' }, h('div', { className: 'pq-prof' }, h('span', { className: 'pk-logo-box' }, p.logo ? h('img', { src: p.logo, alt: '' }) : p.initials),
      h('dl', { className: 'ss-dl' }, (p.items || []).map(function (it, i) { return h(Fragment, { key: i }, h('dt', null, it[0]), h('dd', null, it[1])); }))));
  }

  Object.assign(S, { Banner: Banner, PackageCard: PackageCard, PackageFilters: PackageFilters, PackageSummary: PackageSummary, PriceBar: PriceBar, SectionTabs: SectionTabs, PackageSection: PackageSection,
    GallerySlider: GallerySlider, ItineraryDay: ItineraryDay, InclusionList: InclusionList, FaqItem: FaqItem, Disclaimer: Disclaimer, QuoteForm: QuoteForm, NotInUse: NotInUse, ParkCard: ParkCard, ParkMap: ParkMap,
    FormPanel: FormPanel, StepsPanel: StepsPanel, ParkPicker: ParkPicker, LogoField: LogoField, PortalSignIn: PortalSignIn, AccessGuard: AccessGuard, KpiTile: KpiTile, PackageListItem: PackageListItem,
    PackageCell: PackageCell, VersionCell: VersionCell, EditorCard: EditorCard, SidePanel: SidePanel, VersionRow: VersionRow, DayEditor: DayEditor, FaqEditRow: FaqEditRow, ImageField: ImageField,
    TagColors: TagColors, PhotoTile: PhotoTile, GalleryCard: GalleryCard, HotCold: HotCold, BusinessProfile: BusinessProfile });
})();
