# Starter Prototype

Clickable HTML prototype of Walk Into The Wild (WITW): **Admin Console**, **website** (Portal), **Shared Safari** and **Packages** with the new **Partner portal**. Same boards as the design canvas "Starter Prototype – Repo Copy". Works offline in any modern browser; no install or server.

## How to open

| Option | Open this | What you get |
|---|---|---|
| All-in-one | `Starter-Prototype.html` | Every screen in one file (photos included), starting at Admin-Sign-In |
| Single screen | `screens/<Screen>.html` | One screen; links and the board list move between screen files |

- Open a board directly by adding its name after `#`, e.g. `Starter-Prototype.html#PK-W2-Package-list` or `#PK-P5-Package-builder.mobile`.
- Keep `screens/` together: its stylesheets, `support.js` and `img/` must stay beside the screen files.
- Only the Roboto font loads from the internet; offline, the system font is used.

## Prototype bar (top of every screen)

| Control | Use |
|---|---|
| Console / Portal / Partner | Switch app (Partner = Partner portal, on Package boards) |
| Board list | Jump to any screen (Package boards list every board) |
| Desktop / Mobile | Switch between 1366 px and a 390 px phone frame |
| Reset data | Clear everything added or changed and return to the sample data |
| View as · State · Package · Park · Screen | Choose the viewer and what a screen shows (varies by board) |

## Screens (62 boards × desktop + mobile = 124 screens)

| Group | Boards |
|---|---|
| Console (16) | Admin-Sign-In, Forgot-Password, Dashboard, Users, Roles, Notifications, Notification-Templates, Delivery-Log, Audit-Log, System-Logs, Error-Logs, Background-Jobs, Language-Master, Language-Translation, Tech-Documentation, Not-Found |
| Portal (5) | Web-Sign-In, Web-Sign-Up, Web-Forgot-Password, Web-Notifications, Web-Not-Found |
| Shared Safari · Website (9) | W1 Shared Safaris list · W2 Safari card · W3 Shared Safari view · W4 Who joined · W5 Organise a Safari / Edit · W6 Change status · W7 Delete and Leave · W8 Flag a comment · W9 My Shared Safaris |
| Shared Safari · Console (7) | C1 Shared Safaris list · C2 Joined / Left list · C3 Shared Safari detail · C4 Flagged Comments · C5 Parks list · C6 Park detail · C7 Flag Reasons |
| Packages · Website (9) | PK-W1 Become a Partner · PK-W2 Package list · PK-W3 Package card · PK-W4 Package page · PK-W5 Request a quote · PK-W6 My Quote Requests · PK-W7 Park list · PK-W8 Park page · PK-W9 Package Not In Use! |
| Packages · Partner portal (8) | PK-P1 Portal Sign In · PK-P2 Business details / Pending / Rejected / Deactivated · PK-P3 Dashboard · PK-P4 Packages list · PK-P5 Package builder · PK-P6 Gallery · PK-P7 Quote Requests · PK-P8 Business Profile / Notifications |
| Packages · Console (8) | PK-C1 Partner Requests · PK-C2 Partners · PK-C3 Package Approvals · PK-C4 Packages · PK-C5 Package Delete Reasons · PK-C6 Gallery Approvals · PK-C7 Galleries · PK-C8 Quote Requests |

Mobile files add `.mobile`, e.g. `screens/PK-W2-Package-list.mobile.html`.

## Packages: flows to try

| Flow | Where |
|---|---|
| Become a partner (guest or signed in), then approve or reject | PK-W1 → PK-C1 |
| Build a package (5 sections), send for approval, approve | PK-P5 → PK-P4 → PK-C3 → PK-W2 |
| Edit a live package: new version, live one stays until approved | PK-P4 Edit → PK-P5 |
| Request a quote, see it in My Quote Requests and mark Hot / Cold | PK-W4 → PK-W6 → PK-P7 |
| Gallery: add photos, send, approve or reject | PK-P6 → PK-C6 |
| Delete a package with a reason → “Package Not In Use!” | PK-C4 → PK-W4 |
| Send a notification to a partner | PK-C8 → PK-P8 |

## Sizes and notes

| Topic | Detail |
|---|---|
| Desktop / Mobile | 1366 × 768 / 390 × 844 |
| Design | WITW Design System (primary #09422D) |
| Data | Parks from the SQL file; Indian names and rupee prices; kept in this browser until Reset data |
| Map | Park page shows the location with a link to open the map (no live map offline) |
