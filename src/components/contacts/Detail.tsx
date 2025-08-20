import React, { useEffect, useState } from "react";

import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Card, CardContent } from "../ui/card";
import { ContactType, useContacts } from "@/store/useContacts";
import { FiEdit } from "react-icons/fi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import DetailCard from "./DetailCard";
import EditForm from "./EditForm";
import { initialValue } from "@/contants";
import { confirmDelete } from "@/utils";
import { toast } from "sonner";

const Detail = () => {
  const [detail, setDetail] = useState<ContactType>(initialValue);

  //get function and variables from useContacts
  const {
    selectedContact,
    setEdit,
    edit,
    contacts,
    deleteContact,
    setSelectedContact,
    setContacts,
  } = useContacts();

  useEffect(() => {
    const data = contacts.find((c) => c.id === selectedContact);
    if (selectedContact && data) {
      setDetail(data);
    }
  }, [selectedContact, contacts]);

  // onDelete function for deleting specific contact record
  const onDelete = (id: number) => {
    deleteContact(id);
    setSelectedContact(0);
    toast.success("Contact is delete");
  };

  // onStarredChange function for changing state of starred for specific contact
  const onStarredChange = (id: number) => {
    const filter = contacts.map((c) =>
      c.id === id ? { ...c, starred: !c.starred } : c
    );

    setContacts(filter);
  };
  return (
    <div>
      <TooltipProvider>
        <div className="p-4 border-b flex items-center justify-between">
          <h1 className="text-xl font-semibold">Contact Details</h1>
          <div className="flex space-x-3">
            <Tooltip>
              <TooltipTrigger>
                <div
                  className="hover:bg-blue-300/15 rounded-md p-3 cursor-pointer"
                  onClick={() => onStarredChange(detail.id || 0)}
                >
                  {!detail.starred ? (
                    <FaRegStar className="text-gray-400 text-xl" />
                  ) : (
                    <FaStar className="text-yellow-400 text-xl" />
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Important</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <div
                  className="hover:bg-blue-300/15 rounded-md p-3 cursor-pointer"
                  onClick={() => setEdit(true)}
                >
                  <FiEdit className="text-gray-400 text-xl" />
                </div>
              </TooltipTrigger>
              <TooltipContent>Edit</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <div
                  onClick={() =>
                    detail.id && confirmDelete(detail.id, onDelete)
                  }
                  className="hover:bg-blue-300/15 rounded-md p-3 cursor-pointer"
                >
                  <RiDeleteBin6Line className="text-gray-400 text-xl" />
                </div>
              </TooltipTrigger>
              <TooltipContent>Delete</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </TooltipProvider>
      {selectedContact !== 0 && !edit && (
        <DetailCard detail={detail} onDelete={onDelete} />
      )}
      {edit && <EditForm />}

      {selectedContact === 0 && !edit && (
        <Card className="h-auto items-center flex justify-center m-4">
          <CardContent className="flex p-0 items-center h-full">
            <div className="px-6 py-10 bg-opacity-10 text-center text-2xl">
              No Contact Has Selected
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Detail;
