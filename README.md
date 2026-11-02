# Starter Prototype

The design prototype of the **Starter** app ([starter_nodejs-nextjs](https://github.com/aayush-cmd/starter_nodejs-nextjs)): its design system and every screen of its two apps, the **Console** (Super Admin) and the **Portal** (signed-in users and the public website). It looks exactly like the running starter today.

It has two jobs:

1. **The starter's own prototype.** The starter repo includes it as the submodule `docs/prototype`, pinned to one commit.
2. **The starting point for every new project's prototype.** When a project is created from the starter, `node init.js` asks for the project's own prototype repository and, when it is empty, copies this repository into it. So every project's design starts exactly like the app, and is changed per project from there (colours, new screens, new features).

## What's inside

| Path | What | Status |
|---|---|---|
| `design-system/` | The Starter design system: tokens (colours per theme, type, spacing, sizes), 27 components and their guidelines, and a standalone page per component. Start with [design-system/README.md](design-system/README.md) and [design-system/HOW-TO-USE.md](design-system/HOW-TO-USE.md) | Ready |
| `prototype/` | The clickable prototype in one file, `starter-prototype.html`: the 22 boards of the Console (16) and the Portal (6), each at Desktop (1366 px) and Mobile (390 px), working on shared sample data. Its [README](prototype/README.md) lists the boards, the sample data and everything that works | Ready |

## Viewing it

- **Design system:** open `design-system/standalone/index.html` in a browser (it needs an internet connection for React and the Inter font). If your browser blocks local files, run `npx serve .` and open `/design-system/standalone/`.
- **Prototype:** double-click `prototype/starter-prototype.html` (Chrome, Edge, Firefox or Safari; no server, works offline except the Inter font). It opens on Admin-Sign-In. The bar at the top of every screen:

  | Control | What it does |
  |---|---|
  | Console / Portal | Switch app; matching boards are paired |
  | Board dropdown | Jump to any of the 22 boards |
  | Reset data | Go back to the sample data (changes are kept in your browser until then) |
  | Desktop / Mobile | Switch between 1366 px and a 390 px phone frame |

  Open any board directly with its name after `#`: `starter-prototype.html#Admin-Language-Translation`, `#Web-Dashboard.mobile`.

## Two themes, one system

The Console and the Portal share everything except the main colour family: Console is slate (`#334155`), Portal is blue (`#1D4ED8`). A board sets its theme with `data-theme="console"` or `data-theme="portal"`; changing a theme's colours in the design system changes every board, so a new project can rebrand in one place.

## Rules

- **Copy, don't design.** Every board matches the starter app's screen. New ideas belong in a project's own prototype, not here.
- **Board names follow the app's code:** `Admin-…` for the Console, `Web-…` for the Portal (for example `Admin-Users-Roles-Users`, `Web-Dashboard`). A board's mobile version has the same name (`#Web-Dashboard.mobile` in the prototype).
- **Name the source of any library** a board uses: `data-lib="…"`.
- **Same messages as the app:** success and error toasts, errors under each field, and the save-failed box at the top of a dialog only when a save fails.

## Keeping it in step with the starter

- A change to a starter screen updates its board here in the same piece of work.
- The design is changed in Claude Design and exported here; this repository is the shared, versioned copy.
- After a change is pushed here, the starter moves its pin: `git submodule update --remote docs/prototype`, then commit `docs/prototype` (and update `docs/PROTOTYPE-SYNC.md`).

## Using it in a new project

You don't copy it by hand. When creating a project from the starter:

```bash
npx degit git@github.com:aayush-cmd/starter_nodejs-nextjs.git my-project --mode=git
cd my-project && node init.js
```

At the end, `init.js` asks for your project's prototype repository URL (create an empty one first). It copies this repository into it and adds it to the project as `docs/prototype`. Skipped it? Run `node init.js --prototype=<your empty prototype repository URL>` later.
