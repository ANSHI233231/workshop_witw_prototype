# Starter Prototype

Clickable HTML prototype of Walk Into The Wild (WITW): **Admin Console**, **website** (Portal), **Shared Safari**, and **Packages** with the **Partner portal**. Same boards as the design canvas "Starter Prototype – Repo Copy" (version 16). Works offline in any modern browser; no install or server.

## How to open

| Option | Open this | What you get |
|---|---|---|
| Single file | `Starter-Prototype.html` | Every screen in one file (photos included), starting at Admin-Sign-In |
| Standalone screens | `screens/<Screen>.html` | One screen per file; links and the board list move between screen files |

- Open a board directly by adding its name after `#`, e.g. `Starter-Prototype.html#P5-Parks-list` or `#PP6-Gallery.mobile`.
- Keep `screens/` together: its stylesheets, `support.js` and `img/` must stay beside the screen files.
- Only the Roboto font loads from the internet; offline, the system font is used.

## Mobile and responsive

| Screen width | What you see |
|---|---|
| Phone (under 700 px) | `Starter-Prototype.html` opens the **mobile** board of every screen automatically |
| Tablet and small laptop (700–900 px) | Desktop boards adapt: header menu stacks, tabs scroll, wide tables scroll inside their card |
| Desktop | Desktop boards; use **Desktop / Mobile** in the prototype bar to switch |

## Prototype bar (top of every screen)

| Control | Use |
|---|---|
| Console / Portal / Partner portal | Switch app |
| Board list | Jump to any screen |
| Desktop / Mobile | Switch between 1366 px and a 390 px phone frame |
| Reset data | Clear everything added or changed and return to the sample data |
| View as · Package · Gallery · Park | Choose the viewer and what a screen shows (varies by board) |

## Screens (62 boards × desktop + mobile = 124 screens)

| Group | Boards |
|---|---|
| Console (16) | Admin-Sign-In, Forgot-Password, Dashboard, Users, Roles, Notifications, Notification-Templates, Delivery-Log, Audit-Log, System-Logs, Error-Logs, Background-Jobs, Language-Master, Language-Translation, Tech-Documentation, Not-Found |
| Portal (5) | Web-Sign-In, Web-Sign-Up, Web-Forgot-Password, Web-Notifications, Web-Not-Found |
| Shared Safari · Website (9) | W1 Shared Safaris list · W2 Safari card · W3 Shared Safari view · W4 Who joined · W5 Organise a Safari / Edit · W6 Change status · W7 Delete and Leave · W8 Flag a comment · W9 My Shared Safaris |
| Shared Safari · Console (7) | C1 Shared Safaris list · C2 Joined / Left list · C3 Shared Safari detail · C4 Flagged Comments · C5 Parks list (Add park) · C6 Park detail (Edit park) · C7 Flag Reasons |
| Packages · Website (6) | P1 Packages list · P2 Package page, Request a quote · P3 My Quote Requests · P4 Become a Partner · P5 Plan Safari (Parks list) · P6 Park page |
| Packages · Partner portal (10) | PP1 Sign In · PP2 Partner request status · PP3 Dashboard · PP4 Packages · PP5 Add / Edit package · PP6 Gallery · PP7 Add / Edit gallery · PP8 Quote Requests · PP9 Business Profile · PP10 Notifications (from the bell: Show all notifications) |
| Packages · Console (9) | PC1 Partner Requests · PC2 Partners · PC3 Package Approvals · PC4 Packages · PC5 Package preview / edit · PC6 Package Delete Reasons · PC7 Gallery Approvals · PC8 Galleries · PC9 Quote Requests |

Mobile files add `.mobile`, e.g. `screens/P6-Park-page.mobile.html`.

## Flows to try

| Flow | Where |
|---|---|
| Build a package, send, approve (Popular is cleared) | PP5 → PP4 → PC3 / PC5 → P1 |
| Price checks: total below price per person, discount price too low | PP5 › Basic › Save |
| Fewer days removes itinerary days after a confirmation | PP5 › Wildlife Marathon › Days |
| View an old (Replaced) version, read-only | PP5 › Wild Kanha Special › Versions › View |
| Super Admin edits only name, prices, messages, overview, getting there | PC5 › Edit |
| Delete a draft: "This draft will be discarded." | PP4 / PP5 |
| Edit an approved gallery: shows in Approved and In Draft | PP6 |
| Send a gallery: notification in the console bell | PP6 › In Draft › Send → PC7 bell |
| Add / edit a park: description, location, feature image | C5 / C6 → P5 / P6 |
| Park page: Overview (map), Packages, Shared Safaris | P6 |
| Plan Safari in the website top bar opens the Parks list | Any website screen → P5 |
| Partner notifications: bell, then Show all notifications (not in the sidebar) | PP3 bell → PP10 |

## Notes

| Topic | Detail |
|---|---|
| Sizes | Desktop 1366 × 768 · Mobile 390 × 844 |
| Design | WITW Design System (primary #09422D), website styled like walkintothewild.in |
| Data | Sample data, kept in this browser until Reset data |
| Map | Park page shows a static Leaflet-style map with a pin (no live map offline) |
| Plan Safari | Opens the Parks list (P5); greyed out on Sign In, Sign Up and Forgot Password |
| To confirm | Items marked "to confirm" in the review (e.g. price checks, park image 2 MB, description 1,000 characters) are assumptions, not signed-off rules |
