# MessagesLayout

The Messages page: the conversations on the left (340px, latest first) and the open one on the right, in one card.

- Provide: `conversations` (ConversationItem props), `active`, `messages`; optional `onOpen(index)`, `onSend`, `onBack`, `phone`.
- Nothing open: "Select a conversation". No conversations: "No conversations yet."
- Under 700px (or with `phone`) it shows the list, or the open conversation with Back.
- Partners don't use Direct Chat. Each new message notifies the recipient ("<name> sent you a message.") and adds to the unread count on Messages.
- Source: U5.
