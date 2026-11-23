# ChatThread

An open conversation: the other user (their name opens the profile), the messages with day markers, and the ChatComposer.

- Provide: `other` `{name, initials, photo, href, deactivated}`, `messages` `[{text, time, mine} | {day}]`; optional `onSend`, `onBack` (shows the back arrow on phones).
- New messages arrive live; opening a conversation marks its messages as read.
