The WITW Design System is the shared UI of two apps built from one codebase: **Console** (the "Admin Console") and **Portal**, the website for end users, in the **Walk Into The Wild** theme. They are one system in two themes. The Portal theme uses the Walk Into The Wild website's own values exactly; the Console theme uses the same colours refined for admin screens, with text that meets WCAG AA. Components, sizes, spacing, layout, corners and shadows are shared.

The components and values here follow the Console app's own stylesheet, the one the Starter Prototype boards run on.

## Using this system

- **Copy, don't design.** Prototypes match the running app. Use these tokens and components as they are; new ideas come later, per project.
- **One theme switch.** Set `data-theme="console"` for Console boards and `data-theme="portal"` for Portal boards. Never hard-code a colour: every colour token can differ between the themes, status colours included.
- **Components** load as `window.Starter` (React 18) with `components/bundle.css`. Each card shows a component in both themes; the website and Shared Safari cards show only the theme they belong to.
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
- Text is `text`; secondary text `text-muted`; placeholders, input icons and empty cells `text-subtle` (never body copy).
- `overlay` sits behind dialogs and behind the phone menu.
- Status: `success`, `warning`, `info`, `danger`, each with a `-soft` ground. Badges use `badge-<tone>-text`, `-bg` and `-dot`. `required` marks required fields.
- Danger buttons fill with `danger-fill`, text `on-danger`, hover `danger-hover`; an input with an error gets a `danger` border and a `danger-ring`.
- The bell's count is `count-text` on `count-bg` (the orange accent).
- Notifications: avatars on `avatar-bg` with `avatar-text`; kind markers `notify-jobs`, `notify-account`, `notify-test`; tags `tag-<kind>-text` on `tag-<kind>-bg`.
- `accent-1` draws the 4px rule on the sign-in brand panel; accents are never text. The six `event-*` colours exist in the code for events and are not on a board yet; the theme doesn't change them.

| | Console | Portal (the website, exactly) |
|---|---|---|
| `primary` | #09422D | #09422d |
| `primary-hover` | #073A28 | #fd5634 (orange) |
| `primary-active` | #073A28 | #073a28 |
| `primary-soft` | #E7EFEB | #faf7f3 (cream) |
| `accent-1` / `-2` / `-3` | #F9D600 / #FD5634 / #E7EFEB | #99ff33 / #fd5634 / #f9d600 |
| `background` · `surface` · `border` | #F5F5F5 · #FFFFFF · #D1D5DB | #f5f5f5 · #ffffff · #d1d5db |
| `text` · `text-muted` · `text-subtle` | #1E1E1E · #4B4B4B · #6B6B6B | #1e1e1e · #4b4b4b · #7a7a7a |
| `success` · `warning` · `danger` · `info` | #047857 · #B45309 · #B91C1C · #2563EB | #10b981 · #f59e0b · #ef4444 · #3b82f6 |
| `danger-fill` · `on-danger` | #DC2626 · #FFFFFF | #f9d600 (yellow) · #1e1e1e |

**Contrast.** Every Console text colour meets WCAG AA on the grounds its token note names. WITW lists its status colours as #10B981, #F59E0B, #EF4444 and #3B82F6; on the Console these are the badge dots, and text uses darker shades of the same hues. The Portal uses the website's values unchanged, so these text pairs fall under 4.5:1 there: `success` 2.5:1, `warning` 2.2:1, `info` 3.7:1, `danger` and `required` 3.8:1, `text-subtle` 4.3:1 (all on `surface`). The same holds for `border-strong` around inputs, at 1.5:1 in both themes.

## Type

**Roboto** (fallback system-ui, -apple-system, Segoe UI, Noto Sans), weights 400, 500, 600 and 700, from Google Fonts. On the Portal, display headings (`auth-headline`, `error-code`) use **Devator Exp, Bold Expanded**, the website's self-hosted display face, through `--font-display`. The Console sets `--font-display` back to Roboto: it uses Roboto only. Devator Exp's font files are not in this system yet, so until they're added the display headings show in Roboto.

- Screens: `page-title` for a page's title, `section` for dialog titles and the wordmark, `table-title`, `subheading` for card titles, `body` for text and cells, `table-head` (in `text-muted`), `label`, `helper`, `caption`, `group` (uppercase, 0.04em), `button`, `badge`, `menu`, `kpi` for dashboard numbers and the "Login" title.
- App screens: `auth-headline` and `auth-lede` on the sign-in panel; `error-code` and `error-text` on the 404 page; `popover-title` and `popover-text` in the bell popover; `sidebar-section` for "PLATFORM"; `chip` for counts; `count` for the bell number.

## Space, corners, shadows, sizes

- Spacing `space-xs` 4 · `space-sm` 8 · `space-md` 12 · `space-lg` 16 · `space-xl` 24 · `space-2xl` 32. Pages pad `space-xl` and stack sections `space-xl` apart.
- Corners (WITW's scale 4 · 8 · 12 · 16 · 24): `radius-sm` 4 on language buttons, sidebar links and tags; `radius-md` 8 on buttons, inputs, icon buttons, cards, table cards, the sign-in card and the wordmark mark; `radius-lg` 12 on the popover, dropdown panels and toasts; `radius-xl` 16 on dialogs; `radius-2xl` 24 is not used yet; `radius-full` on status badges, pills, toggles, avatars and counts.
- Shadows (WITW's sm · md · lg · xl): `shadow-sm` on cards; `shadow-md` on dropdowns, toasts and the sign-in card; `shadow-lg` on dialogs and the phone menu; `shadow-popover` (the xl value, also `shadow-xl`) on the notification popover.
- Layout: `header-height` 56; the Console shell's sidebar column is `sidebar-width-shell` 264 (the code's `sidebar-width` token is 240); phone menu `sidebar-width-mobile` 280; `footer-height` 40; `content-max` 1440; `form-max` 960.
- Controls: `control-height` 32 (buttons, inputs, 32 × 32 icon buttons), `control-height-sm` 28 (page buttons), padding `control-padding-x` 12, `button-min-width` 72. Tables: rows 40, head 36, S.No 56, Actions 112. Dialogs 400 / 640, drawer 480. Field widths 120 / 180 / 280 / 400.
- Dropdown panels: list max `combo-list-max-height` 240 (SearchSelect) / `server-combo-list-max-height` 288 (ServerSelect); panel min `combo-filter-min-width` 260 in a filter bar, `server-combo-min-width` 320; options padded `space-sm` × `combo-option-padding-x` 10.
- Toasts: `toast-min-width` 280 to `toast-max-width` 400, a `toast-accent-width` 3px left line, `toast-duration` 5 s.
- Stacking: `z-sticky` 10 · `z-header` 20 · `z-sidebar` 30 · `z-dropdown` 40 · `z-drawer` 50 · `z-modal` 60 · `z-toast` 70 · `z-tooltip` 80.

## States and motion

- Hover: `surface-alt` grounds, `text-subtle` input borders, `primary-hover` on primary (the orange hover on the Portal). Focus: a 3px `focus-ring` box-shadow (toggles: a 2px outline). Disabled: 50% opacity on buttons; `surface-alt` ground and `text-subtle` text on inputs. Errors: `danger` border with a `danger-ring`, and the message in `danger` below.
- Transitions use `duration-fast` (120 ms) for colour and `duration-base` (200 ms) for opening, with `easing-standard`; none when the user prefers reduced motion.
- On phones (under 768 px): the sidebar becomes the slide-in menu, dialogs become bottom sheets, filters and action buttons go full width, the header hides the role chip, language switch and user name.

## Choosing from a list

- A short fixed list (a filter like "Role: All"): the native **Select**.
- A list the page already has in full, long enough to want a search (roles, statuses, modules, languages): **SearchSelect**. It filters as you type; it can lead with a clear option ("All roles") and show a badge per option.
- A long list that lives on the server (users, the switcher's list): **ServerSelect**. It loads 20 at a time, searches the server `search-debounce` (250 ms) after typing stops, loads 20 more near the end, and always starts with "All [things]".
- Both look exactly like Select when closed; open, the highlighted option is `primary` on `primary-soft` and the chosen one is bold.

## Website and Shared Safari

The Portal is also the public **Walk Into The Wild website**, and its home is **Shared Safaris**. Its screens are built from their own parts, on the Portal theme; the Console's Shared Safari screens reuse Table, Card and PageHeader with three small additions.

- **Every website page** is SiteHeader → SiteHero (the page's name) → the page → SiteFooter. Sign-in, sign-up and forgot-password pages skip the hero. The page area is `background`, padded 24px × 64px, up to 1920px wide.
- **The list** (Shared Safaris): SafariFilters on the left (280px), then a line "There are currently **10** active shared safaris" with a "Sort by: Newest first" select, FilterChip for chosen filters, and SafariCard in a 3-column grid, 16px apart. Under the grid: "Showing 6 of 10 · more load as you scroll".
- **A safari** (Shared Safari view): SafariSummary on white across the top, then two columns on `surface-alt` — SitePanel "Safari Plan" and SitePanel "Discussion (7)" with Comment, and on the right SitePanel "Interested - 7" with faces; its title opens the who-joined list in a Dialog (green title bar, a Table of S.No, Name, Joined On).
- **Forms on the website** (Organize a Shared Safari, 3 steps) use SiteDialog; short questions (Change status with RadioList, "Delete this safari?" — "This can't be undone.", Flag this comment with RadioList and a Details box) use Dialog.
- **My Shared Safaris** is a website page with PageHeader, pill Tabs (Organised, Joined) and a Table: a 120px photo, the safari with its park and joined count, dates, a StatusBadge (Active, Seat full, Inactive, Over) and View, Edit, Change status, Delete actions.
- **Notifications** on the website use WebNotificationItem rows under Tabs (All, Unread, Shared Safari, Account) and a "Mark all as read" button.
- **Console** (Shared Safaris, Joined / Left, Flagged Comments, Parks, Flag Reasons): Table pages as everywhere; JoinedLeft in the "Joined / left" column, PinButton in Actions, and DetailList inside a Card on detail pages.

Words: buttons say **Join Safari**, **Leave Safari**, **View Safari**, **Seat Full**, **+ Organize a Shared Safari**; cards read "**Riya Sharma** has shared a safari" and "7 joined"; facts are Trip Duration, Available Seats, Safaris, Stay Category, Theme and Cost ("3 Nights, 4 Days", "3/5", "₹8,000 – ₹12,000"); dates read "12 Dec – 15 Dec 2026". The boards spell it "Organize" on the website and "Organise a Safari" on My Shared Safaris; keep each as it is.

Colour on the website: the header, footer, card strips and panel title bars are `primary` with white text; date tags, fact icons and the notification count are `accent-2`; the current nav link is underlined in `accent-1`; dates on a safari are `event-green`; the hero sits on `hero-ground`, a full safari's strip on `strip-full`, "+N" faces on `face-more`. WITW's own pairs that miss 4.5:1 are kept and flagged: white on `accent-2` (3.2:1, the count and date tags), `event-green` dates (3.4:1 at 20px).

## Iconography

The app uses **Lucide** icons: 24px grid, stroke 2, round caps and joins, drawn in `currentColor`. Use `icon-sm` (16) in buttons, inputs and tables, `icon-md` (18) in the sidebar and wordmark mark, `icon-lg` (20) in the header. The Icon card lists the ones the screens use; take any others from Lucide. The website adds Lucide's map-pin (filled, for parks), flag, pin, calendar, users, car, hotel, binoculars and indian-rupee (the safari facts, in `accent-2`), mail (the header's notifications), circle-user (sign in), and the share icons (facebook, instagram, linkedin, message-circle for WhatsApp, send for Telegram, link for Copy link, and X drawn from paths), each on its network's own colour. The header's three nav pictures — tiger, bag, jeep — are images in the Icons group, not Lucide.

## Logo

The Console's mark is a white Lucide `shield-check` in a 32px `primary` square (`radius-md`), next to the wordmark "Admin Console" in `section` weight and `primary`. On the sign-in panel the square turns `surface` with a `primary` icon. The website's logo is Walk Into The Wild's own: the lime W mark (Logos group, `witw-mark.png`) at 30px in SiteHeader, and the "Walk into the Wild" wordmark (`witw-wordmark.png`) at 22px in SiteFooter's bottom bar. Both are images with their own grounds; never redraw them.
