import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { ContactType, useContacts } from "@/store/useContacts";
import { initialValue } from "@/contants";
import CommonForm from "./CommonForm";
import { toast } from "sonner";

const EditForm = () => {
  const [editFormData, setEditFormData] = useState<ContactType>(initialValue);

  //get function and variables from useContacts
  const { selectedContact, setEdit, setContacts, contacts } = useContacts();

  // getting selected Contact details
  useEffect(() => {
    const data = contacts.find((c) => c.id === selectedContact);
    if (selectedContact && data) {
      setEditFormData(data);
    }
  }, [selectedContact, contacts]);

  // onSubmit function for updating contact record
  const onSubmit = (data: ContactType) => {
    const filterContacts = contacts.map((c) =>
      c.id === selectedContact ? data : c
    );

    setContacts(filterContacts);
    setEdit(false);
    toast.success("Contact has been updated");
  };

  return (
    <div>
      <Card className="m-4 p-5 py-10">
        <CommonForm
          value={editFormData}
          onSubmit={onSubmit}
          setOpen={() => setEdit(false)}
        />
      </Card>
    </div>
  );
};

export default EditForm;
