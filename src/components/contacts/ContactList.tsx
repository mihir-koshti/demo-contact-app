import React from "react";

import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { ContactType, useContacts } from "@/store/useContacts";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { confirmDelete } from "@/utils";
import { toast } from "sonner";

// Props type
interface ContactListProps {
  filterContacts: ContactType[];
}
const ContactList: React.FC<ContactListProps> = ({ filterContacts = [] }) => {
  //get function and variables from useContacts
  const {
    setSearch,
    setSelectedContact,
    searchQuery,
    setContacts,
    contacts,
    deleteContact,
  } = useContacts();

  // onStarredChange function for changing state of starred for specific contact
  const onStarredChange = (id: number) => {
    const filter = contacts.map((c) =>
      c.id === id ? { ...c, starred: !c.starred } : c
    );

    setContacts(filter);
  };

  // onDelete function for deleting specific contact record
  const onDelete = (id: number) => {
    deleteContact(id);
    setSelectedContact(0);
    toast.success("Contact is delete");
  };

  return (
    <div className="border py-4 col-span-2  ">
      <div className="p-5">
        <Input
          type="text"
          placeholder="Search contacts..."
          onChange={(e) => setSearch(e.target.value)}
          className=" p-5 border rounded-md "
          value={searchQuery}
        />
      </div>
      <div className="p-4 flex font-mono pt-0 text-gray-500 font-semibold justify-between">
        <div>Total Contacts </div> <div>{filterContacts.length}</div>
      </div>

      <ul className="space-y- w-auto h-screen overflow-auto">
        {filterContacts.length > 0 &&
          filterContacts.map((contact: ContactType) => {
            return (
              <div
                key={contact.id}
                className="p-4  flex items-center group justify-between hover:bg-blue-100 hover:cursor-pointer duration-300 transition-all bg-white shadow-sm"
                onClick={() => setSelectedContact(contact?.id || 0)}
              >
                <div className="flex gap-2 items-center">
                  <Avatar>
                    <AvatarImage
                      src={contact.image}
                      alt={contact.firstname}
                      className="bg-slate-100"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-lg group-hover:text-blue-500 transition-all duration-200">
                      {contact.firstname} {contact.lastname}
                    </p>
                    <p className="text-xs text-gray-500">
                      {contact.companyName}
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div onClick={() => onStarredChange(contact?.id || 0)}>
                    {contact?.starred ? (
                      <FaStar className="text-yellow-400" />
                    ) : (
                      <FaRegStar />
                    )}
                  </div>
                  <div
                    onClick={() =>
                      contact?.id && confirmDelete(contact?.id, onDelete)
                    }
                  >
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default ContactList;
