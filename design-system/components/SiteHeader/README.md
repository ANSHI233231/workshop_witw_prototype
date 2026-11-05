# SiteHeader

The WITW website header: the W mark, three picture links (Plan Safari, Safari Packages, Shared Safari) and, on the right, the notifications button and the account initial, or a sign-in icon for guests.

Use it at the top of every Portal (website) page; the Console keeps AppHeader.

- **You supply** `logo` (the W mark from the Logos group), `nav` with each link's `icon` from the Icons group, `user` (`null` for a guest) and `count` (unread notifications; none hides the dot).
- The current link gets an `accent-1` (yellow) underline; a link with no `href` is shown but does nothing, as Plan Safari and Safari Packages are today.
- The header is `primary` with white text; the count sits on `accent-2` in white (WITW's own pair, 3.2:1 at 10px — flagged). The account initial sits on `success`.
- 64px tall, sticky; the logo is 30px high, nav pictures 20px.
- Source: every Web board (W1–W9, Web-Notifications, Web-Not-Found, Web-Sign-In / Sign-Up).
