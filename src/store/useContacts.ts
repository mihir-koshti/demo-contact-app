import { create } from "zustand";
import contactsData from "@/data/dummy_contacts_with_ids.json";

// Type of Contact Data
export type ContactType = {
  id?: number | undefined;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  address: string;
  department: string;
  notes: string;
  image: string;
  starred: boolean;
  frequent?: boolean;
};

// Type of Contact Store
type ContactsStore = {
  contacts: ContactType[];
  searchQuery: string;
  setSearch: (value: string) => void;
  filteredContacts: () => ContactType[];
  selectedContact: number | undefined;
  setSelectedContact: (value: number) => void;
  setContacts: (value: ContactType[]) => void;
  selectedMenu: string;
  setSelectedMenu: (value: string) => void;
  addContact: (value: ContactType) => void;
  edit: boolean;
  setEdit: (value: boolean) => void;
  deleteContact: (value: number) => void;
};

//define Hooks for Contacts
export const useContacts = create<ContactsStore>((set, get) => ({
  contacts: contactsData, // load static json
  searchQuery: "",
  setSearch: (value) => set({ searchQuery: value }),
  filteredContacts: () => {
    const { contacts, searchQuery } = get();
    if (!searchQuery) return contacts;
    return contacts.filter(
      (c) =>
        c.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.lastname.toLowerCase().includes(searchQuery.toLowerCase())
    );
  },
  setContacts: (value: ContactType[]) => {
    set({ contacts: value });
  },
  selectedContact: 0,
  setSelectedContact: (value: number) => set({ selectedContact: value }),
  selectedMenu: "",
  setSelectedMenu: (value: string) => set({ selectedMenu: value }),
  addContact: (value: ContactType) =>
    set((state) => {
      const lastId =
        state.contacts.length > 0
          ? state.contacts[state.contacts.length - 1].id
          : 0;

      const { id, ...rest } = value; // remove incoming id if exists

      return {
        contacts: [...state.contacts, { id: lastId && lastId + 1, ...rest }],
      };
    }),
  edit: false,
  setEdit: (value: boolean) => set({ edit: value }),
  deleteContact: (value: number) =>
    set((state) => {
      return { contacts: state.contacts.filter((c) => c.id !== value) };
    }),
}));
