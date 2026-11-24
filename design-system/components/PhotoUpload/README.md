# PhotoUpload

Edit Profile's Profile Photo and Cover Photo tabs: the preview, the shared FileUpload box, Remove, and the rule.

- Provide: `kind` (`profile` | `cover`); optional `image`, `onRemove`, `onChange(file)`, `error`, `id`, `accept`, `helper`.
- Rules: JPG, JPEG or PNG; profile up to 250 KB, cover up to 500 KB. Remove reads "Remove photo" / "Remove cover photo"; without a photo the placeholder shows.
- Each tab is saved on its own with Save at the bottom right (`ep-foot`).
- Source: U4 Edit Profile.
