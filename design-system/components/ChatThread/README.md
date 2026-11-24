# ChatThread

An open conversation: the other person (their name opens the profile), the messages, and the ChatComposer.

- Provide: `other` `{name, initials, photo, href, deactivated}`, `messages` `[{text, time, mine}]`; optional `onSend`, `onBack`, `error`.
- Back shows on phones only. New messages arrive live; opening a conversation marks its messages as read.
- Source: U5.
