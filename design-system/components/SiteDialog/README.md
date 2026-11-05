# SiteDialog

The website's own dialog: a green title bar with an uppercase display title, a roomy body, text buttons at the bottom right and, for a form in steps, step dots.

Use it on the website for forms people fill in (Organize a Shared Safari in 3 steps). Short questions and confirmations on the website (Change status, Delete this safari?, Flag this comment) use the ordinary Dialog.

- **You supply** `title`, the fields as `children` (FormField, Select…), and `steps` / `step` for a multi-step form; `nextLabel` defaults to Next until the last step, then Save.
- Cancel is a muted text button, Next / Save a `primary` text button; the active step dot is `primary`, the others `border`.
- 560px wide, `radius-lg` corners; the body scrolls when it is taller than the window.
- Source: W5 Organise a Safari / Edit.
