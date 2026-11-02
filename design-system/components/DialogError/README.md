# DialogError

The message shown at the top of a dialog's body when its save fails for a reason that isn't about one field (no connection, a server error). The dialog stays open; no toast.

- **Never use it for field errors**: those go under their own field (FormField `error`).

- Provide: the message as children, or pass `error` to Dialog, which places it.
- Full width, `danger-soft` ground, `danger` text in `body`, `radius-lg`, padding `space-md` × `space-lg`, `space-lg` above the fields.
- Words: "The user could not be saved. Please try again." / "The password could not be changed. Please try again." / "It could not be saved. Please try again."
