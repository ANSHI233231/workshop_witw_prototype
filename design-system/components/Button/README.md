# Button

Buttons for actions: `primary` for the page's main action ("Add User", "Save"), `secondary` beside it ("Export", "Cancel"), `text` for light actions ("Reset", "Open"), `danger` for deletes.

- Provide: `variant`, the label as children, optional `icon` (left of the label: `plus` on Add, `file-down` on Export, `rotate-ccw` on Reset, `save` on Save), `size="sm"`, `block`, `disabled`, or `href` to render a link.
- Height `control-height`, min width `button-min-width` (not text buttons), padding `control-padding-x`, `radius-md`, style `button`.
- Hover: primary → `primary-hover`, pressed `primary-active`; secondary → `surface-alt`; text → `primary-soft`; danger → `danger-hover`. Disabled is 50% opacity. Focus is the 3px `focus-ring`.
