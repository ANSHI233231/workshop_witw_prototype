# Toast

A short message after an action: green for success, red for a failure.

- Provide: `tone` (`success` | `error`), the message as children, `onClose` (the × button; with it the toast also closes itself after `toast-duration`, 5 s), `autoClose={false}` to keep it.
- `surface` card, 1px `border`, a `toast-accent-width` (3px) left line in `success` or `danger`, `radius-lg`, `shadow-md`. Width `toast-min-width`–`toast-max-width`, padding `space-md` × `space-lg`, `space-sm` between icon, text and ×.
- Icon: Lucide `circle-check` in `success`; `circle-alert` in `danger` for errors. Message in `body`.
- Words: say what happened, with the row's name in quotes: User "Priya Sharma" added. Failures end "Please try again." Full list in the brand book.
- A failed save inside a dialog does not use a toast: use DialogError. Errors in what was typed use neither: they go under their field.
