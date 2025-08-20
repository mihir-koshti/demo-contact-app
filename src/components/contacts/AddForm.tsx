import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { initialValue } from "@/contants";
import { ContactType, useContacts } from "@/store/useContacts";
import CommonForm from "./CommonForm";

const AddForm = () => {
  const [open, setOpen] = useState(false);

  //get function and variables from useContacts
  const { addContact } = useContacts();


  // Submit function for Adding new contact
  const handleSubmit = (data: ContactType) => {
    addContact(data);
    setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  return (
    <div>
      <Dialog open={open}>
        <form>
          <DialogTrigger asChild>
            <Button
              onClick={() => setOpen(true)}
              className="bg-blue-500 hover:bg-blue-300 transition-all text-lg w-full px-5 py-6"
            >
              Add New Contact
            </Button>
          </DialogTrigger>
          <DialogContent className="w-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl mb-6">
                Add New Contact
              </DialogTitle>
              <DialogDescription>
                {
                  "Let's add a new contact for your application. Fill in all fields and click the submit button."
                }
              </DialogDescription>
            </DialogHeader>

            <div className="">
              <CommonForm
                value={initialValue}
                onSubmit={handleSubmit}
                setOpen={setOpen}
              />
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};

export default AddForm;
