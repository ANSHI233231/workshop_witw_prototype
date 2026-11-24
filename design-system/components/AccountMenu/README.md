# AccountMenu

The website account menu under the header's account button: name and email, then the links.

- **User** (`role` left out), as on the boards: My Profile, My Shared Safaris, My Quote Requests, Wishlist, Messages (with the unread count), Change Password, then Log Out.
- **Partner** (`role: 'partner'`), from the workflow of 24 Nov 2026: My Profile, My Packages, Change Password, Partner portal, Log Out. No Wishlist, Messages, My Shared Safaris or My Quote Requests. Where My Profile and My Packages lead is still open (§9 #8).
- Provide `user` `{name, email}`; optional `unread`, `current`, or your own `items` `[{label, icon, href, count, button, divider}]`.
- Source: the header on every website board (canvas version 33); the partner list from the workflow.
