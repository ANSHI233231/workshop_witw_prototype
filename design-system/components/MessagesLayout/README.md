# MessagesLayout

The Messages page: conversations on the left (latest first), the open conversation on the right.

- Provide: `conversations` (ConversationItem props), `active`, `messages`; optional `onOpen(index)`, `onSend`.
- On a phone pass `view: 'list'` or `'thread'` to show one side at a time, with a back arrow on the thread. With no conversations: "No messages yet."
