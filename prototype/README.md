# Starter Prototype

A clickable prototype of the Starter app, in one HTML file: the Console (admin) app and the Portal (web) app, each at Desktop (1366 px) and Mobile (390 px). It covers 22 boards, 44 screens in all.

## Open it

1. Double-click `starter-prototype.html` to open it in Chrome, Edge, Firefox or Safari.
2. No internet or server is needed. Only the Inter font loads from Google Fonts when online. Offline, the browser's default sans-serif is used.
3. It opens on **Admin-Sign-In**. To open any board directly, add its name after `#` in the address bar, e.g. `starter-prototype.html#Admin-Language-Translation` or `#Web-Dashboard.mobile`.
4. The browser's Back and Forward buttons move between boards.

## The prototype bar (top of every screen)

| Control | What it does |
|---|---|
| Console / Portal | Switch app. Matching boards are paired (Sign-In, Forgot Password, Dashboard, Notifications, Not Found). |
| Board dropdown | Jump to any of the 22 boards. |
| Reset data | Clear everything added or changed and go back to the sample data. |
| Desktop / Mobile | Switch between 1366 px and a 390 px phone frame. The active one is yellow. |

## Boards

**Console (16):** Admin-Sign-In, Admin-Forgot-Password, Admin-Dashboard, Admin-Users-Roles-Users, Admin-Users-Roles-Roles, Admin-Notifications, Admin-Notification-Templates, Admin-Delivery-Log, Admin-Audit-Log, Admin-System-Logs, Admin-Error-Logs, Admin-Background-Jobs, Admin-Language-Master, Admin-Language-Translation, Admin-Tech-Documentation, Admin-Not-Found.

**Portal (6):** Web-Welcome, Web-Sign-In, Web-Forgot-Password, Web-Dashboard, Web-Notifications, Web-Not-Found.

## Sample data

| Data | Sample records |
|---|---|
| Users | Ananya Iyer, Vikram Mehta (Super Admin), Starter Admin (built in, Super Admin). |
| Signed-in admin | Vikram Mehta, vikram.mehta@example.test. |
| Signed-in portal user | Ananya Iyer, ananya.iyer@example.test. |
| Languages | English (en, EN, the base language, shown everywhere and the default everywhere). Hindi (hi, हि, Native Name हिन्दी, active, shown in Manage and Web Portal). |
| App Translations (English → Hindi) | Dashboard → डैशबोर्ड, Users → उपयोगकर्ता, Roles → भूमिकाएँ, Add User → उपयोगकर्ता जोड़ें, Save → सहेजें, Cancel → रद्द करें, Export → निर्यात, Reset → रीसेट, Notifications → सूचनाएँ, Background Jobs → (empty: missing). These start already published. |

## How the screens are linked

Every screen reads and writes the same sample data, which is kept in your browser until you press **Reset data**:

- **Users:** adding or switching a user changes the Users count on Admin-Dashboard.
- **Audit Log:** every add, edit, switch, upload and publish adds an event at the top of Admin-Audit-Log.
- **Bells:** "Mark all as read" clears the bell count in the header on every board.
- **Language switch:** the header shows one button per active language shown in that app. The choice stays while moving between boards and between Console and Portal.
- **Translations:** after **Publish translations**, every text with a published translation shows in the chosen language on every board. That includes menu items, page titles and buttons. Texts without a translation stay in English.

## What works

### Sign-in and accounts

- **Sign-in:** field checks run, and the "Login as" role picker fills in the sample account (Super Admin, or Portal User on the Portal).
- **Forgot password:** shows field checks, then a "Check your email" step.
- **User menu:** opens Change Password, with field checks, a mismatch check and the "Password updated." toast.
- **Header:** the bell popover, the mobile menu, and the sidebar groups that open and close.

### Users and logs

- **Users:** Add User, Edit User (filled in), Set password, the status switch, search, filters, Reset and CSV export.
- **Notifications and templates:** tabs, "Mark all as read", and the in-app and email template dialogs (the eye icon on the Email tab's "Password reset" row).
- **Logs:** view dialogs, filters and export on Delivery, Audit, System and Error logs. Error Logs also has "Copy request ID".

### Background Jobs

Tabs, Add or Edit Scheduled Job, the status switch, Run now, Run Command and the run view.

### Language Master

- **Table:** search by name or code, a Status filter and Reset.
- **Add Language:** Save adds the row and shows "Language added.".
- **Edit Language:** the dialog opens filled in, with Code locked, and Save shows "Language updated.". For English the Shown ticks are locked and the dialog says "English is the base language and is shown everywhere.".
- **Status switch:** "Language activated." / "Language deactivated.". English's switch is shown on and locked (dimmed, with the tooltip "English is the base language"); clicking it does nothing. A language that is switched off gives its Default places back to English.
- **Where it is shown:** ticking Default also ticks Shown, and unticking Shown unticks Default. Each place has exactly one Default, so ticking it on one language takes it off the other.
- **Field rules (errors under each field):**
  - **Name:** "Enter a name." / "Name must be at least 2 characters." / "This name is already in use."
  - **Native Name:** "Enter the native name."
  - **Short Name:** "Enter the short name."
  - **Code:** "Enter the two-letter code in small letters, e.g. hi." / "This code is already in use."

### App Translations

- **Table:** one column per language other than English. Search covers every language, the Missing filter picks rows with no translation, and there's a Status filter and Reset. An empty result shows "No translations match this filter.".
- **Add / Edit Translation:**
  - **English Text:** required, up to 500 characters, unique ignoring case. Errors are "Enter the English text." / "This text is already in use."
  - **Hindi Text:** optional, with the hint "Leave empty to show the English text.".
  - **Toasts:** "Translation added." / "Translation updated.".
- **Status switch:** "Translation activated." / "Translation deactivated.".
- **Publish note:** after any change, "Press Publish translations to show the changes in the apps." shows near the buttons.
- **Download:** saves `language-translations-YYYY-MM-DD.csv` with the columns "English Text" and "Hindi Text".
- **Upload:** takes a CSV in the Download format and shows "Uploading…", then the Upload Result dialog.
  - **Counts:** Added, Updated, Unchanged and Refused, plus a Row / Reason table of refused rows. A row with no English text is refused with "Enter the English text."; one over 500 characters with "English text can be at most 500 characters.".
  - **Matching:** a row whose English text already exists updates its Hindi text. An empty cell keeps the old text.
  - **Size limit:** a file over 2 MB shows "The file can be at most 2 MB.".
- **Publish translations:** shows "Publishing…", then "Translations published. (n)", where n is the number of active texts. Last published changes to the current date and time.

## Failure examples (built into the sample data)

| Where | How to see it | Message |
|---|---|---|
| Users | Add or edit a user with an email that's already used | under Email: This email is already in use. |
| Users | Edit Starter Admin → Save | in the dialog: The user could not be saved. Please try again. |
| Users | Switch Starter Admin | User "Starter Admin" could not be changed. Please try again. |
| Users | Starter Admin → Set password | in the dialog: The password could not be changed. Please try again. |
| Language Master | Add or edit a language named "Test" | in the dialog: It could not be saved. Please try again. |
| App Translations | Add or edit a translation with the English Text "Test" | in the dialog: It could not be saved. Please try again. |
| App Translations | Switch the "Background Jobs" row | It could not be changed. Please try again. |
| App Translations | Upload a CSV without an "English Text" column | This could not be done. Please try again. |
| Users | Export when no rows match the filters | Nothing to export — no rows match your filters. |

## Notes

- **Sample data only:** nothing is sent anywhere. Data is kept in this browser until you press Reset data or clear the site data.
- **Failure toasts:** every failure toast is red.
- **Phone width:** the Portal header keeps the EN / हि language switch. On App Translations, Last published, Download and Upload share one row, with Add Translation and Publish translations on the next.
