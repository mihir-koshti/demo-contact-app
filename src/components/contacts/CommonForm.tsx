import React, { useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { imageList, initialValue, menulist } from "@/contants";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { ContactType } from "@/store/useContacts";

// Props type
interface CommonFormProps {
  value: ContactType;
  onSubmit: (data: ContactType) => void; // function that receives a ContactType and returns nothing
  setOpen: (open: boolean) => void;
}
const CommonForm: React.FC<CommonFormProps> = ({
  value,
  onSubmit,
  setOpen,
}) => {
  const [formData, setFormData] = useState<ContactType>(initialValue);

  // useEffect for adding data if this form is for Edit 
  useEffect(() => {
    if (value?.id) {
      setFormData(value);
    }
  }, [value]);

  // handlechange function for changing value of form 
  const handlechange = (e: {
    target: { name: string; value: string | number };
  }) => {
    const { value, name } = e?.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div className="grid grid-cols-2 p-[1px] gap-4 overflow-auto max-h-screen">
        {/* Firstname */}
        <div className="grid gap-3">
          <Label htmlFor="firstname" className="text-base">
            Firstname
          </Label>
          <Input
            name="firstname"
            className="p-3"
            value={formData.firstname}
            onChange={(e) => handlechange(e)}
          />
        </div>

        {/* LastName */}
        <div className="grid gap-3">
          <Label htmlFor="lastname" className="text-base">
            Lastname
          </Label>
          <Input
            name="lastname"
            className="p-3"
            value={formData.lastname}
            onChange={(e) => handlechange(e)}
          />
        </div>

        {/* Departmet Selection */}
        <div className="grid gap-3">
          <Label htmlFor="department">Select Department</Label>
          {/* <Input id="name-1" name="name" className="p-3" /> */}
          <Select
            name="department"
            onValueChange={(e) => setFormData({ ...formData, department: e })}
            defaultValue={formData.department}
            value={formData.department}
          >
            <SelectTrigger className="p-3">
              <SelectValue defaultValue={formData.department} />
            </SelectTrigger>
            <SelectContent className="p-3">
              {menulist
                .filter((c) => c.catergory)
                .map((catergory) => (
                  <SelectItem key={catergory.menuid} value={catergory.menuName}>
                    {catergory.menuName}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        {/* Company Name */}
        <div className="grid gap-3">
          <Label htmlFor="companyName" className="text-base">
            Company
          </Label>
          <Input
            name="companyName"
            className="p-3"
            value={formData.companyName}
            onChange={(e) => handlechange(e)}
          />
        </div>

        {/* Phone Number */}
        <div className="grid gap-3">
          <Label htmlFor="phoneNumber" className="text-base">
            Phone
          </Label>
          <Input
            name="phoneNumber"
            className="p-3"
            value={formData.phoneNumber}
            onChange={(e) => handlechange(e)}
          />
        </div>

        {/* Email */}
        <div className="grid gap-3">
          <Label htmlFor="email" className="text-base">
            Email
          </Label>
          <Input
            name="email"
            className="p-3"
            value={formData.email}
            onChange={(e) => handlechange(e)}
          />
        </div>

        {/* Image Selection */}
        <div className="grid col-span-2 gap-3">
          <Label htmlFor="image">Select Image</Label>
          <Select
            name="image"
            onValueChange={(e) => setFormData({ ...formData, image: e })}
            value={formData.image}
          >
            <SelectTrigger className="p-3">
              <SelectValue defaultValue={"Engineering"} />
            </SelectTrigger>
            <SelectContent className="p-3">
              {imageList.map((image) => (
                <SelectItem key={image.id} value={image.value}>
                  <div className="flex justify-center gap-4 items-center">
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        src={image.value}
                        alt={image.name}
                        className="bg-slate-100 border-slate-700"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="text-gray-500 text-base font-semibold">
                      {image.name}
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Address */}
        <div className="grid col-span-2 gap-3">
          <Label htmlFor="address">Address</Label>
          <Textarea
            name="address"
            onChange={(e) => handlechange(e)}
            value={formData.address}
          ></Textarea>
        </div>

        {/* Notes */}
        <div className="grid col-span-2 gap-3">
          <Label htmlFor="notes">Notes</Label>
          <Textarea
            name="notes"
            onChange={(e) => handlechange(e)}
            value={formData.notes}
          ></Textarea>
        </div>
      </div>
      <DialogFooter className="border-t py-5 mt-6">
        {/* <DialogClose asChild onClick={() => setOpen(false)}> */}
        <Button variant="outline" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        {/* </DialogClose> */}
        <Button
          type="submit"
          onClick={() => {
            onSubmit(formData);
          }}
        >
          Save changes
        </Button>
      </DialogFooter>
    </div>
  );
};

export default CommonForm;
