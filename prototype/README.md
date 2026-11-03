# Starter Prototype

Clickable HTML prototype of the Starter's two apps: **Console** (Admin Console) and **Portal** (web app and public website), in the Walk Into The Wild (WITW) theme. Works offline in any modern browser; no install or server needed.

## How to open

| Option | Open this | What you get |
|---|---|---|
| All-in-one | `Starter-Prototype.html` | Whole prototype in one file, starting at Admin-Sign-In, with the board switcher |
| Single screen | `screens/<Screen>.html` | One screen; links and the switcher move between screen files |

Keep the `screens/` folder together. Its stylesheets and `support.js` must stay beside the screen files.

## Prototype bar (top of every screen)

| Control | Use |
|---|---|
| Console / Portal | Switch app |
| Board list | Jump to any screen |
| Desktop / Mobile | Switch device view |
| Reset data | Clear everything added or changed in the prototype |

## Screens (22 × desktop + mobile = 44 files)

| # | Console (`Admin-…`) | # | Portal (`Web-…`) |
|---|---|---|---|
| 1 | Admin-Sign-In | 17 | Web-Welcome |
| 2 | Admin-Forgot-Password | 18 | Web-Sign-In |
| 3 | Admin-Dashboard | 19 | Web-Forgot-Password |
| 4 | Admin-Users-Roles-Users | 20 | Web-Dashboard |
| 5 | Admin-Users-Roles-Roles | 21 | Web-Notifications |
| 6 | Admin-Notifications | 22 | Web-Not-Found |
| 7 | Admin-Notification-Templates | | |
| 8 | Admin-Delivery-Log | | |
| 9 | Admin-Audit-Log | | |
| 10 | Admin-System-Logs | | |
| 11 | Admin-Error-Logs | | |
| 12 | Admin-Background-Jobs | | |
| 13 | Admin-Language-Master | | |
| 14 | Admin-Language-Translation | | |
| 15 | Admin-Tech-Documentation | | |
| 16 | Admin-Not-Found | | |

Mobile versions add `.mobile` to the name, e.g. `Admin-Dashboard.mobile.html`.

## Sizes

| View | Size (px) |
|---|---|
| Desktop | 1366 × 768 |
| Mobile | 390 × 844 |

## Files in `screens/`

| File | Purpose |
|---|---|
| `*.html` | One file per screen and device |
| `support.js` | Runtime that renders the screens |
| `console-app.css` / `console-app-phone.css` | Console styles (desktop / mobile) |
| `web-app`, `web-auth`, `web-home` (+ `-phone`) `.css` | Portal styles |
| `proto.css` | Prototype bar and phone frame only; not part of the app design |

## Notes

- Design follows the WITW Design System (Roboto; primary #09422D).
- Sample data only; **Reset data** clears anything added or changed while clicking through.
- The stylesheets refer to a Geist font that isn't included. Text falls back to the system font, as in the source prototype.
