# WishlistButton

The wishlist heart (♥): a 36px round button on a card picture, or `inline` with a border beside the price on the package page and on the shared safari page.

- Provide: `saved`, `onToggle(saved)`; optional `variant` (`inline`), `state`.
- Off: `text-muted` heart on a white circle; saved and on hover: filled `danger`. `aria-pressed` carries the state; the label reads "Add to wishlist" / "Remove from wishlist".
- Signed-in users only. A guest's tap opens the Login page and they tap again after logging in. **Partners have no wishlist**, so leave it out for them.
- After each tap show a Toast: "You added the Package to your wishlist!" / "You removed the Package from your wishlist!" (the same with "Shared Safari").
- PackageCard (top right), SafariCard (top left, clear of the date tag) and PriceBar draw it when given `saved` or `onWish`.
- Source: U1 Wishlist, U2, P1, P2, W1, W3.
