# PriceBox

The price box beside a package page's details: price per person (with the struck-out price), price message, total, and Request a quote.

- **You supply** `price`, `before`, `message`, `total` and `onAction`. A guest's button goes to Login.
- A partner can't request a quote: pass `note: true` to show "You are signed in as a partner. Quote requests for your packages are in the Partner portal." with an "Open the Partner portal" link (`noteHref`).
- It stays in view while the page scrolls (sticky). Source: PK-W4, PK-W5.
