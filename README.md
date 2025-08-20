# 📇 Contacts Manager App

![Dashboard](public/Screenshot.png)

A modern **Contacts Manager** built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v3**, **shadcn/ui**, **Zustand**, and **SweetAlert2**.  
Manage contacts, filter by tabs, and confirm destructive actions with a polished UI.

---

## ✨ Features

- ➕ Add new contacts with **auto-increment ID** (based on the max existing ID)
- ⭐ Mark contacts as **starred/favorite**
- 📌 Mark contacts as **frequent**
- 🗑 Delete contacts with **SweetAlert2 confirmation**
- 🧭 Three tabs: **All**, **Frequent**, **Starred** (config-driven filters)
- 🧰 Centralized **menu config** (`menulist`) with per-tab filter functions
- 🗂 State management with **Zustand**
- 🎨 **Tailwind v3** + **shadcn/ui** components
- 🔁 Easy to swap static JSON for a real API later

> Note: **Auto-detect male/female profile images** is intentionally **not included**.

---

## 🛠 Tech Stack

- **Next.js 14+/15** (App Router)
- **TypeScript**
- **Tailwind CSS v3** (+ `tailwindcss-animate`)
- **shadcn/ui**
- **Zustand**
- **SweetAlert2**
- **React Icons**

---

## 📂 Project Structure

````
src
├── app
│   ├── global.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── contact
│     └── page.tsx
│
├── components
│     ├── contacts
│     │     ├── AddForm.tsx
│     │     ├── CommonForm.tsx
│     │     ├── ContactList.tsx
│     │     ├── Detail.tsx
│     │     ├── DetailCard.tsx
│     │     ├── EditForm.tsx
│     │     └── PanelList.tsx
│     │
│     └── ui
│         ├── avatar.tsx
│         ├── button.tsx
│         ├── card.tsx
│         ├── dialog.tsx
│         ├── input.tsx
│         ├── label.tsx
│         ├── select.tsx
│         ├── separator.tsx
│         ├── skeleton.tsx
│         ├── sonner.tsx
│         ├── textarea.tsx
│         └── tooltip.tsx
│
├── contants
│     └── index.js
│
├── data
│     └── dummy_contacts_with_ids.json
│
├── store
│     └── useContacts.ts
│
└── utils
      └── index.ts

---

## ⚡ Getting Started

### 1) Install & Run
```bash
npm install
npm run dev
# http://localhost:3000
````

### 2) Tailwind v3 + shadcn/ui

- Ensure `tailwind.config.js` has the `content` paths pointing to `./src/**/*.{ts,tsx,js,jsx}`.
- Include shadcn tokens & variables in `globals.css`:
  - `@tailwind base; @tailwind components; @tailwind utilities;`
  - `:root { --background: ...; --foreground: ...; --border: ...; }` etc.
- Install animation plugin:

```bash
npm i tailwindcss-animate
```

### 3) Seed Data (Static JSON)

Add your contacts to `src/data/contacts.json`:

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "image": "/avatars/john.png",
    "department": "Engineering",
    "frequent": true,
    "starred": false
  }
]
```

---

## 🧭 Tabs via Config (constants)

```ts
// src/constants/menulist.ts
import { HiWallet } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import { TbTagStarred } from "react-icons/tb";
import type { Contact } from "@/types/contact";

export type MenuKey = "All" | "Frequent" | "Starred";

export const menulist: {
  icon: JSX.Element;
  menuName: MenuKey;
  menuid: number;
  filter: (c: Contact) => boolean;
}[] = [
  {
    icon: <HiWallet className="text-2xl" />,
    menuName: "All",
    menuid: 1,
    filter: () => true,
  },
  {
    icon: <FiSend className="text-2xl" />,
    menuName: "Frequent",
    menuid: 2,
    filter: (c) => !!c.frequent,
  },
  {
    icon: <TbTagStarred className="text-2xl" />,
    menuName: "Starred",
    menuid: 3,
    filter: (c) => !!c.starred,
  },
];
```

Usage:

```ts
const active = menulist.find((m) => m.menuName === selectedMenu);
const list = contacts.filter(active?.filter ?? (() => true));
```

---

## 🗑 SweetAlert2 Confirm (reusable)

```ts
// src/utils/confirmDelete.ts
import Swal from "sweetalert2";

export const confirmDelete = (
  id: number,
  onConfirm: (id: number) => void,
  message: string = "Are you sure you want to delete this Contact?"
) => {
  Swal.fire({
    title: "Confirm Deletion",
    text: message,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it",
    cancelButtonText: "Cancel",
  }).then((res) => {
    if (res.isConfirmed) onConfirm(id);
  });
};
```

Component usage:

```tsx
<div onClick={() => confirmDelete(contact.id, onDelete)}>
  <RiDeleteBin6Line />
</div>
```

---

## 🔧 Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit: `git commit -m "feat: add your feature"`
4. Push: `git push origin feat/your-feature`
5. Open a Pull Request

---

## 📜 License

Licensed under the **MIT License**.
