# Table

The list page's table card: optional tabs, filter bar, "Total Items", the table with S.No and Actions, and the pager.

- Provide: `columns` (`[{key, title, render?, align?}]`), `rows`, `filters` (search, selects, Reset), `tabs` (pill Tabs), `renderActions(row)` (icon buttons and a toggle), `total`, `start`, `page`, `pages`, optional `title`.
- Card: `surface`, `border`, `radius-lg`, `shadow-sm`. Head `table-head-height` on `surface-alt`, style `table-head` in `text-muted`; rows `table-row-height`, hover `surface-alt`; numbers tabular.
- Empty cells show `–` in `text-subtle`. S.No column `col-sno-width`, Actions `col-actions-width`, both centred.
- "Total Items: **3**" sits in its own strip; the pager reads "Showing 1–3 of 3" with 28px page buttons, the current one `primary`.
