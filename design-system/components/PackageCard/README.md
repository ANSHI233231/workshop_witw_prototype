# PackageCard

A package in the website list (P1) and on a park page: picture, name, park, nights and safaris, price per person and total.

- Provide: `image`, `title`, `park`, `duration`, `activity`, `price`, `total`; optional `before` (struck out), `message`, `best` (the Best deal ribbon) and `tag` `{text,bg,color}` (the partner’s own colours).
- Prices in ₹ with Indian grouping and the word "/Person". The whole card opens the package; `onView` drives the View button.
- Cards sit in `.pk-grid` (three across, two under 900px, one on phones).
