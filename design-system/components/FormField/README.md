# FormField

A form field: label, required `*`, control, then helper text or an error.

- Provide: `label`, `required`, `placeholder`, `value`, `type` (`password` adds a show-password eye button), `as="select"` with `options`, `helper`, `error` (replaces the helper; red border), `aside` (a link on the label row, e.g. "Forgot Password?"), `disabled`; or your own control as children.
- Label style `label`; `*` in `required` straight after the label; helper `helper` in `text-muted`; error `helper` in `danger`.
- **Errors always go under their own field**, never in a box at the top of the form. `error` gives the field a `danger` border (with a faint red ring) and puts the message right under it in `helper` (12px) `danger` text.
- On Save, set `error` on every field with a problem at the same time and scroll to the first one. Server checks (username, email or mobile already in use) use `error` the same way: "This email is already in use." under Email.
- Messages: Name "Enter a name." · Mobile "Enter a 10-digit mobile number." · Email "Enter a valid email address." / "This email is already in use." · Password "Enter a password." · Confirm Password "Re-enter the password."
