# Dialog

A modal over the `overlay`: forms such as Add User and Change Password.

- Provide: `title`, optional `icon`, children, `error` (a failed save's message — no connection, server error — shown at the top of the body as DialogError; field errors go on each FormField instead), `footer` (Cancel `secondary`, then the main action `primary`), `size` (`sm` → `dialog-width-sm`, default `dialog-width-md`), `onClose`, `open`.
- `surface`, `radius-xl`, `shadow-lg`; title `section`. Head padded `space-lg` × `space-xl`, body `space-xl`, footer `space-md` × `space-xl`, divided by `border`. On phones it becomes a bottom sheet.
