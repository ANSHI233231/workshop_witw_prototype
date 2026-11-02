# SearchSelect

A dropdown with a search box for lists the page already has in full: roles, statuses, modules, languages.

- Provide: `options` (`[{value, label, detail?, badge?}]`), `value`, `onChange(value, option)`, `placeholder` ("Select a role"), `searchPlaceholder` ("Search role…"), `clearLabel` (an optional first option that clears the choice, e.g. "All roles"), `emptyText` ("No roles found."), `width` (`xs`–`lg`), `disabled`, `invalid`, `label` (screen-reader name).
- Closed it looks exactly like Select: `control-height`, `border-strong`, `radius-md`, `control-padding-x`, chevron on the right; placeholder in `text-subtle`. A chosen option with a badge shows as "Label (badge)".
- Open (click, Enter, Space or the arrow keys): a panel `space-xs` below the field, `surface`, `border`, `radius-lg`, `shadow-md`, padding `space-sm`, at least as wide as the field (`combo-filter-min-width` 260 inside a filter bar). Search input on top, focused at once; the list scrolls past `combo-list-max-height` (240).
- Typing filters straight away on the label, the second line and the badge. The clear option shows only while the search is empty. Nothing left: one `text-muted` line, e.g. "No roles found."
- Options: padding `space-sm` × `combo-option-padding-x`, `radius-md`, `body` in `text`; second line `helper` in `text-muted`; badge a pill (`chip` 11px semibold, `text-muted` on `surface-alt`, 1px `border`). Highlighted: `primary` on `primary-soft` (second line `primary` too). Chosen: 600.
- Keys: ↑ ↓ move the highlight, Enter chooses, Escape closes back to the field; Tab or a click outside closes.
- Error: pass `invalid` and put it in a FormField with `error`, so the message sits under it like every field. Disabled: as the disabled select.
