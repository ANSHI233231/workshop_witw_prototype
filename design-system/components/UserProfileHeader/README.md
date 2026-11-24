# UserProfileHeader

The top of a User Profile: the cover (200px), the round picture (112px, white ring) overlapping it, the name, and the viewer's action.

- Provide: `name`; optional `cover`, `photo`, `action` (`message`: a primary Message button for someone else's profile when signed in | `edit`: Edit Profile, secondary, on your own | none for a guest), `onAction`, `editHref`, `messageHref`.
- No cover: the green `cover-ground` → `cover-ground-2` ground with an image icon. No picture: the placeholder figure on `photo-empty-bg`. A picture, once set, replaces the user's initials everywhere on the website.
- Email and mobile are never shown. Phones: 140px cover, 88px picture.
- Source: U3 User Profile.
