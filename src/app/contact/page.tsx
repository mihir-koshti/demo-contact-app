"use client";
import { ContactType, useContacts } from "@/store/useContacts";
import { useEffect, useState } from "react";
import PanelList from "@/components/contacts/panelList";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Detail from "@/components/contacts/Detail";
import { menulist } from "@/contants";
import ContactList from "@/components/contacts/ContactList";
import Image from "next/image";

export default function Home() {
  //get function and variables from useContacts
  const {
    setSearch,
    filteredContacts,
    selectedMenu,
    contacts,
    searchQuery,
    edit,
  } = useContacts();
  const [filterContacts, setFilterContacts] = useState<ContactType[]>([]);

  // useEffect for filtering data on based of search query
  useEffect(() => {
    const data = filteredContacts();
    setFilterContacts(data as ContactType[]);
  }, [searchQuery]);

  // useEffect for filtering contacts data on based on selection of tab or menu
  useEffect(() => {
    const menu = menulist.find((m) => m.menuName === selectedMenu);

    const filteredContacts = contacts.filter(menu?.filter || (() => true));
    setFilterContacts(filteredContacts);
    setSearch("");
  }, [contacts, selectedMenu]);

  return (
    <div className="m-12 space-y-10">
      <Card className="border h-36 grid bg-blue-100 items-center ">
        <CardHeader>
          <CardTitle className="text-xl">Contact App</CardTitle>
          <CardDescription>Home </CardDescription>
        </CardHeader>
        {/* <div className="flex justify-end w-full h-full">
          <Image src={"/ChatBc.png"} alt="Chat Image" width={80} height={66} />
        </div> */}
      </Card>
      <div className="grid grid-cols-7">
        <PanelList />
        <ContactList filterContacts={filterContacts} />
        <div className="col-span-3 border">
          <Detail />
        </div>
      </div>
    </div>
  );
}
