# ServerSelect

A dropdown with a search box for long lists fetched from the server, 20 at a time: users, and the switcher's list.

- Provide: `load(query, offset, limit)` returning a Promise of `{items, hasMore}` (`items`: `[{value, label, context?, detail?}]`), `value` (the chosen item, or null), `onChange(item | null)`, `allLabel` ("All users"), `placeholder` ("Select a user"), `searchPlaceholder` ("Search user…"), `emptyText` ("No matches"), `width` (default `md`), `disabled`, `invalid`, `label`.
- Closed and open it looks like SearchSelect; the panel is at least `server-combo-min-width` (320) wide and the list scrolls past `server-combo-list-max-height` (288).
- Opening loads the first 20. Typing waits `search-debounce` (250 ms) after the last key, then searches the server and shows the first 20 matches. Scrolling near the end, or ↓ past the last loaded option, loads the next 20 below.
- The first option is always "All [things]", which clears the choice.
- Options: the label, then the context in `text-muted` ("Priya Sharma · Admin"), and an optional second line of details. Highlighted: `primary` on `primary-soft`. Chosen: 600.
- While loading: a `text-muted` "Loading…" line at the end of the list. Nothing found: "No matches".
- Keys, error and disabled: as SearchSelect.
