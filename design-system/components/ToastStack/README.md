# ToastStack

Where toasts appear, and how several stack.

- Provide: `toasts` (`[{id, tone, message}]`), `onClose(id)`, `placement` (`desktop` by default; `mobile` forces the phone layout, which also applies by itself under 768 px).
- Desktop: fixed top right, `space-lg` under the header (`header-height`) and `space-xl` from the right, above everything (`z-toast`).
- Phone: fixed across the bottom, `space-md` from the left, right and bottom, full width.
- Toasts stack `space-sm` apart, newest last.
