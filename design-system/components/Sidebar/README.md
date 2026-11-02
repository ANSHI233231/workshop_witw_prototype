# Sidebar

The Console's left menu.

- Provide: `items`: `{label, icon, href}` items, `{section}` labels, and groups `{label, icon, open, children}` whose children are links or sub-groups; `active` (the current page's label).
- Width `sidebar-width-shell`, `surface`, right `border`, padding `space-md`.
- Top items 40px, style `menu`, `text`, 18px icons in `text-muted`; open group `surface-alt`; the group holding the current page: `primary-soft`, `primary`, 3px left bar.
- Section label `sidebar-section`, uppercase, after a 10px `primary` square, with a top `border`.
- Links 32px, `body`, `radius-sm`; the current link is filled `primary` with `on-primary`. Sub-lists hang off a 2px `border` line.
