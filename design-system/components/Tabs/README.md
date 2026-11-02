# Tabs

Tabs that switch a view. `pill` is what the app uses on Notification Templates (inside the table card); `underline` for page-level tabs.

- Provide: `items` (strings or `{label, icon, count, disabled}`), `active`, `onChange`, `variant` (`pill` | `underline`).
- Pill: `pill-tab-height`, `radius-full`, `text-muted`; selected `primary` with `on-primary`; a count chip (`chip`) on `count-chip-bg`. The strip is `surface-alt` with a bottom `border`.
- Underline: `tab-height`, style `menu`; selected `primary` with a 2px underline.
