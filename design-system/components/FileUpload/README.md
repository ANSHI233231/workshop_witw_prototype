# FileUpload

The one file box every file field on the website, the Partner portal and the Console uses: a bordered box with Choose file and the chosen file's name ("No file chosen" until then).

- Optional `id`, `accept` (default `.jpg,.jpeg,.png`), `fileName`, `invalid` (red border), `buttonLabel`, `onChange(file)`.
- The real file input covers the whole box, so a click anywhere opens the picker. PhotoUpload, LogoField and ImageField use it.
- Source: U4 Edit Profile, and the file fields on P4, PP5 and PP7 (canvas version 33).
