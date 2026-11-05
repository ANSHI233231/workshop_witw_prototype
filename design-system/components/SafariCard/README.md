# SafariCard

A shared safari in the list: photo with the start date, a green strip with the number of safaris and seats, the title, who shared it and where, the faces of those who joined, and one action.

Use it in a 3-column grid (2 under 1280px, 1 on phones) on the Shared Safaris list.

- **You supply** `image` (the safari's photo; the Images group has the sample photos and `default-cover.jpg`), `month` / `day`, `safaris`, `seats` ("5 of 6"), `title`, `host` and `hostInitials`, `park`, `faces` (up to 3) and `more` (the rest, shown as "+N" on `face-more`).
- `action` follows who is looking: **join** "Join Safari" (`primary`), **view** "View Safari" for your own safari, **leave** "Leave Safari" once you joined, **full** "Seat Full" — the strip then turns `strip-full`.
- The date tag is `accent-2` with white text; the park is italic `primary` with a filled pin.
- Clicking the card opens the safari (`onOpen`); the button's click does not.
- Source: W1 Shared Safaris list, W2 Safari card.
