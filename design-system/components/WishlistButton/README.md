# WishlistButton

The wishlist heart (♥) on package cards, the package page and the shared safari page.

- Provide: `saved`, `onToggle(saved)`; optional `variant` (`overlay` default, a white round button on a picture | `inline`, a bordered button with "Wishlist" / "Saved" for the package and safari pages), `label`, `state`.
- Saved fills the heart in `accent-2`. `aria-pressed` carries the state; the label reads "Add to wishlist" or "Remove from wishlist".
- Signed-in users only: a guest's tap opens the Login page, and after logging in they tap again (nothing is added for them). Partners don't get the heart.
- After each tap show a Toast: "You added the Package to your wishlist!" / "You removed the Package from your wishlist!" (the same with "Shared Safari").
- PackageCard and SafariCard draw it when given `saved` or `onWish` (top right on a package, top left on a safari, clear of the date tag).
