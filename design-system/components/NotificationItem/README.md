# NotificationItem

One notification row, as in the bell popover.

- Provide: `children` (the sentence, names in `<b>`), `time`, `kind` (`test` | `jobs` | `account`), `unread`, `initial`, `href`.
- Avatar `notify-avatar-size` on `avatar-bg`; kind marker in `notify-<kind>` with a white icon. Text `popover-text`; time `caption` in `text-subtle`. Unread: `primary-soft` ground and an 8px `primary` dot.
