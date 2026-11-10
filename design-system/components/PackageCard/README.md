# PackageCard

A package in the website's list: photo with an optional tag and Best deal badge, name, main park, days / nights, activity line, price per person (with the struck-out price), price message, total price and View Details.

- **You supply** `image` (the package image; with none, the main park's image), `tag` (`text`, `bg`, `color` — the partner's own colours), `best` (set by the Super Admin), `title`, `park`, `days` ("3 Days / 2 Nights"), `activity` ("4 Shared Safaris", or the partner's activity message), `price`, `before` (struck out), `message` (defaults to "Include taxes and fees") and `total`.
- `variant: 'portal'` is the Partner portal dashboard card: price, a `live` version Tag and a `status` badge in place of the price lines and the button.
- Show a card only when the package has a live version, is Active and its partner is Active. Prices in whole rupees with Indian grouping (₹1,25,000).
- Best deal is `accent-3` (yellow on the website) with `on-accent` text. Source: PK-W2, PK-W3, PK-P3.
