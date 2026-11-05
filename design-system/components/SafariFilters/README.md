# SafariFilters

The left column of the Shared Safaris list: the Organize button and the Select Filters panel (park, month, price range, number of safaris, theme, stay category).

- **You supply** `parks` and `months` for the two selects; `price` and `safaris` ranges default to ₹100–₹50,000+ and 1–10+; `themes` and `stays` default to the board's lists.
- Each range has two handles on one 2px `text-muted` track; the handles are `primary`.
- Leave out the Organize button for guests with `organise: false`.
- Chosen filters show above the list as FilterChip.
- Source: W1 (and W5, which opens Organize from it).
