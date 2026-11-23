# UserProfileHeader

The top of a User Profile: cover photo, profile picture and name, with the action for the viewer.

- Provide: `name`; optional `cover`, `photo`, `initials`, `sub`, `action` (`message` for someone else's profile when signed in | `edit` for your own | none for a guest), `onAction`, `editHref`.
- Without a cover the placeholder ground shows; without a picture, the initials or the placeholder figure. A picture, once set, replaces the user's initials everywhere on the website.
- Email and mobile are never shown.
