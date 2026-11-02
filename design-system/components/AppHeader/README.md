# AppHeader

The top bar: wordmark mark, app name, role chip, language switch, bell with count, user menu.

- Provide: `appName` ("Admin Console"), `logo` (replaces the mark), `role` ("Super Admin"), `languages` (["EN"]), `count`, `userName`, `onBell`, `onMenu` (shows the menu button, on phones).
- Height `header-height`, `surface`, bottom `border`, padding `space-xl`. Mark: 32px `primary` square, `radius-md`, white `shield-check`. Wordmark `section` in `primary`. Role chip `role-chip-height`, `primary-soft`.
- Language switch: segmented, `border-strong`, current language filled `primary`. Bell count: `required` red, `count` style, white ring. User menu: `avatar-size` initials on `primary-soft`, name, chevron.
- On phones the role chip, language switch, name and chevron hide and the wordmark drops to 14px.
