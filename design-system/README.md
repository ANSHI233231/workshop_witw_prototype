The WITW Design System is the shared UI of the Starter's two apps, in the Walk Into The Wild (WITW) theme: **Console** (the "Admin Console") and **Portal**, the web app and public website. They are one system in two themes. Portal uses WITW's website values exactly; Console uses WITW's colours refined for admin screens, with text that meets WCAG AA. Components, sizes, spacing and layout are the Starter's own and are shared.

The components and values here follow the Console app's own stylesheet, the one the Starter Prototype boards run on.

## Using this system

- **Copy, don't design.** Prototypes match the running app. Use these tokens and components as they are; new ideas come later, per project.
- **One theme switch.** Set `data-theme="console"` for Console boards and `data-theme="portal"` for Portal boards. Never hard-code a colour: the primary family, text greys, status colours and the danger button all differ per theme, so always use the tokens.
- **Components** load as `window.Starter` (React 18) with `components/bundle.css`. Each card shows a component in both themes.
- **Board names** follow the app's: `Admin-…` for Console, `Web-…` for Portal, with `-M-` after the app name for phone boards (`Admin-M-Dashboard`). Name the source of any library a board uses with `data-lib="…"`.
- **Token names in the app's code** differ slightly: `--color-<name>` for colours, `--control-h`, `--sidebar-w`, `--sno-col-w`, `--modal-w-md`, `--ease`, and so on. The values are the same.

## Content

- UI copy is short and plain. Buttons, titles and menu items are Title Case: "Add User", "Export", "Reset", "Change Password", "Go Back", "Contact Us".
- Filters name themselves in their first option: "Role: All", "Status: All". Search says what it searches: "Search by name, mobile, email…".
- Counts read "Total Items: **3**" (number bold) and "Showing 1–3 of 3". Empty cells show "–".
- Sign-in says "Login": title "Login", subtitle "Login to the Admin Console.", fields "Login ID" ("Mobile no. or email") and "Password", link "Forgot Password?", "Remember me".
- Field errors tell the person what to do: "Enter a name.", "Enter a 10-digit mobile number.", "Re-enter the password."
- Dates and times: "28 Oct 2026", "Yesterday, 02:38 PM", "29 Oct 2026, 02:38 PM".
- Footer: "© 2026 All rights reserved."
- Required fields carry a red `*` right after the label. Sample people are neutral names such as "Starter Admin", "Priya Sharma" and "Rahul Verma", never test names.

## Messages

- After an action, show a **toast**: green (`success` line, `circle-check`) when it worked, red (`danger` line, `circle-alert`) when it failed. Desktop: top right under the header. Phone: across the bottom. It closes after 5 seconds or on ×; several stack 8px apart.
- **Errors in what was typed go under their own field**, never in one box at the top. The field gets a `danger` border and the message sits right under it in `helper` (12px) `danger` text. On Save, every field with a problem shows its message at once and the form scrolls to the first one. Server checks (a username, email or mobile already in use) show the same way, under their field. This holds for every form in both apps.
- When a **save inside a dialog** fails for a reason that isn't about one field (no connection, a server error), keep the dialog open and show one message at the top of its body (DialogError). No toast. This box is never used for field errors.
- Words: say what happened, name the row in quotes, and end failures with "Please try again." "in the dialog" below means the DialogError box.

Field messages (Add User):

| Field | Message |
|---|---|
| Name (empty) | Enter a name. |
| Mobile (empty or wrong) | Enter a 10-digit mobile number. |
| Email (empty or wrong) | Enter a valid email address. |
| Email (already used) | This email is already in use. |
| Password (empty) | Enter a password. |
| Confirm Password (empty) | Re-enter the password. |

Action messages:

| Action | Success | Failure |
|---|---|---|
| Add / edit user | User "[name]" added. / User "[name]" updated. | in the dialog: The user could not be saved. Please try again. |
| Set a user's password | Password changed for [name]. | in the dialog: The password could not be changed. Please try again. |
| User status switch | User "[name]" marked active. / … marked inactive. | User "[name]" could not be changed. Please try again. |
| Opening a row fails | | User "[name]" could not be opened. / The template could not be opened. / The details could not be opened. / This event could not be opened. / The log entry could not be opened. Please try again. |
| Change Password (user menu) | Password updated. | in the dialog: The password could not be updated. Please try again. |
| Mark all as read | All notifications marked as read. | This could not be done. Please try again. |
| Export | (the file downloads) | Nothing to export — no rows match your filters. / This could not be done. Please try again. |
| Copy request ID | Request ID copied. | The request ID could not be copied. |
| Add / edit scheduled job | Scheduled job "[name]" added. / … saved. | in the dialog: It could not be saved. Please try again. |
| Job status switch | Scheduled job "[name]" activated. / … deactivated. | Scheduled job "[name]" could not be changed. Please try again. |
| Run now / Run Command | The job will start in a few seconds. / The job is planned. | "[name]" could not be started. Please try again. / in the dialog: It could not be started. Please try again. |
| Add / edit language | Language added. / Language updated. | in the dialog: It could not be saved. Please try again. |
| Language or translation switch | Language activated. / Translation deactivated. … | It could not be changed. Please try again. |
| Add / edit translation | Translation added. / Translation updated. | This could not be done. / It could not be changed. Please try again. |
| Upload over 2 MB | | The file can be at most 2 MB. |

## Colour

- Page ground is `background`; cards, header, sidebar and dialogs are `surface`; table heads, the pill-tab strip and hovers are `surface-alt`.
- Lines are `border`; input borders are `border-strong`.
- Text is `text`; secondary text `text-muted`; placeholders, input icons and empty cells `text-subtle` (never body copy; on Portal it is WITW's #7A7A7A, 4.3:1).
- `overlay` sits behind dialogs and behind the phone menu.
- Status: `success`, `warning`, `info`, `danger`, each with a `-soft` ground. Badges use `badge-<tone>-text`, `-bg` and `-dot`; dots are always WITW's own #10B981, #F59E0B, #3B82F6 and #EF4444. On Console the text tokens are darker shades of those so they meet AA; on Portal they are WITW's values exactly (under 4.5:1 as text — use them with an icon or a dot, not alone).
- Delete buttons fill with `danger-fill` and label in `on-danger`: AA red with white on Console, WITW's yellow with dark text on Portal. The bell's number sits on `count-badge-bg` (WITW orange) in `count-badge-text`.
- Notifications: avatars on `avatar-bg` with `avatar-text`; kind markers `notify-jobs`, `notify-account`, `notify-test`; tags `tag-<kind>-text` on `tag-<kind>-bg`.
- `accent-1` (WITW yellow) draws the 4px rule on the sign-in brand panel; `accent-2` (WITW orange) is for rare highlights and the second chart series; accents are never text. The six `event-*` colours exist in the code for events, are not on a board yet and were left as they were.

| | Console | Portal |
|---|---|---|
| `primary` | #09422D | #09422D |
| `primary-hover` | #073A28 | #FD5634 |
| `primary-active` | #073A28 | #073A28 |
| `primary-soft` | #E7EFEB | #FAF7F3 |
| `background` / `surface` | #F5F5F5 / #FFFFFF | #F5F5F5 / #FFFFFF |
| `text` / `text-muted` / `text-subtle` | #1E1E1E / #4B4B4B / #6B6B6B | #1E1E1E / #4B4B4B / #7A7A7A |
| `border` | #D1D5DB | #D1D5DB |
| `danger` / `success` / `warning` / `info` (text) | #B91C1C / #047857 / #B45309 / #1D4ED8 | #EF4444 / #10B981 / #F59E0B / #3B82F6 |
| `danger-fill` / `on-danger` | #B91C1C / #FFFFFF | #F9D600 / #1E1E1E |

## Type

Body and interface: **Roboto** (fallback system-ui, -apple-system, Segoe UI, Noto Sans), weights 400, 500, 600 and 700, from Google Fonts. Display headings (`page-title`, `auth-headline`, `error-code`, and the welcome page's titles) use `font-display`: **Devator Exp** (Bold Expanded) on Portal, Roboto on Console. Devator Exp is self-hosted by WITW and its font files are not in this system yet, so it falls back to Roboto until they are added under `fonts/`.

- Screens: `page-title` for a page's title, `section` for dialog titles and the wordmark, `table-title`, `subheading` for card titles, `body` for text and cells, `table-head` (in `text-muted`), `label`, `helper`, `caption`, `group` (uppercase, 0.04em), `button`, `badge`, `menu`, `kpi` for dashboard numbers and the "Login" title.
- App screens: `auth-headline` and `auth-lede` on the sign-in panel; `error-code` and `error-text` on the 404 page; `popover-title` and `popover-text` in the bell popover; `sidebar-section` for "PLATFORM"; `chip` for counts; `count` for the bell number.

## Space, corners, shadows, sizes

- Spacing `space-xs` 4 · `space-sm` 8 · `space-md` 12 · `space-lg` 16 · `space-xl` 24 · `space-2xl` 32. Pages pad `space-xl` and stack sections `space-xl` apart.
- Corners (WITW scale 4 · 8 · 12 · 16 · 24 · full): `radius-sm` 4 on language buttons, sidebar links and tags; `radius-md` 8 on buttons, inputs, icon buttons and the wordmark mark; `radius-lg` 8 on cards, table cards and the popover; `radius-xl` 12 on dialogs and the sign-in card; `radius-full` on status badges, pills, toggles, avatars and counts.
- Shadows are WITW's: `shadow-sm` on cards; `shadow-md` on dropdowns and the sign-in card; `shadow-lg` on dialogs and the phone menu; `shadow-popover` (same as `shadow-lg`) on the notification popover; `shadow-xl` is available and not used yet.
- Layout: `header-height` 56; the Console shell's sidebar column is `sidebar-width-shell` 264 (the code's `sidebar-width` token is 240); phone menu `sidebar-width-mobile` 280; `footer-height` 40; `content-max` 1440; `form-max` 960.
- Controls: `control-height` 32 (buttons, inputs, 32 × 32 icon buttons), `control-height-sm` 28 (page buttons), padding `control-padding-x` 12, `button-min-width` 72. Tables: rows 40, head 36, S.No 56, Actions 112. Dialogs 400 / 640, drawer 480. Field widths 120 / 180 / 280 / 400.
- Dropdown panels: list max `combo-list-max-height` 240 (SearchSelect) / `server-combo-list-max-height` 288 (ServerSelect); panel min `combo-filter-min-width` 260 in a filter bar, `server-combo-min-width` 320; options padded `space-sm` × `combo-option-padding-x` 10.
- Toasts: `toast-min-width` 280 to `toast-max-width` 400, a `toast-accent-width` 3px left line, `toast-duration` 5 s.
- Stacking: `z-sticky` 10 · `z-header` 20 · `z-sidebar` 30 · `z-dropdown` 40 · `z-drawer` 50 · `z-modal` 60 · `z-toast` 70 · `z-tooltip` 80.

## States and motion

- Hover: `surface-alt` grounds, `text-subtle` input borders, one step darker primary. Focus: a 3px `focus-ring` box-shadow (toggles: a 2px outline). Disabled: 50% opacity on buttons; `surface-alt` ground and `text-subtle` text on inputs. Errors: `danger` border with a faint red ring, and the message in `danger` below. Active tabs carry a 2px `primary` underline.
- Transitions use `duration-fast` (120 ms) for colour and `duration-base` (200 ms) for opening, with `easing-standard`; none when the user prefers reduced motion.
- On phones (under 768 px): the sidebar becomes the slide-in menu, dialogs become bottom sheets, filters and action buttons go full width, the header hides the role chip, language switch and user name.

## Choosing from a list

- A short fixed list (a filter like "Role: All"): the native **Select**.
- A list the page already has in full, long enough to want a search (roles, statuses, modules, languages): **SearchSelect**. It filters as you type; it can lead with a clear option ("All roles") and show a badge per option.
- A long list that lives on the server (users, the switcher's list): **ServerSelect**. It loads 20 at a time, searches the server `search-debounce` (250 ms) after typing stops, loads 20 more near the end, and always starts with "All [things]".
- Both look exactly like Select when closed; open, the highlighted option is `primary` on `primary-soft` and the chosen one is bold.

## Iconography

The app uses **Lucide** icons: 24px grid, stroke 2, round caps and joins, drawn in `currentColor`. Use `icon-sm` (16) in buttons, inputs and tables, `icon-md` (18) in the sidebar and wordmark mark, `icon-lg` (20) in the header. The Icon card lists the ones the screens use; take any others from Lucide.

## Logo

The Console's mark is a white Lucide `shield-check` in a 32px `primary` square (`radius-md`), next to the wordmark "Admin Console" in `section` weight and `primary`. On the sign-in panel the square turns `surface` with a `primary` icon. No image logo has been added.
