import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { ContactType, useContacts } from "@/store/useContacts";
import { initialValue } from "@/contants";
import { confirmDelete } from "@/utils";

// Props type
interface DetailCardProps {
  detail: ContactType;
  onDelete: (id: number) => void;
}

const DetailCard: React.FC<DetailCardProps> = ({ detail, onDelete }) => {
  //get function and variables from useContacts
  const { setEdit } = useContacts();

  return (
    <div>
      <Card className="m-4">
        <CardHeader className="flex">
          <div className="flex gap-4 items-center">
            <Avatar className="w-20 h-20">
              <AvatarImage
                src={detail?.image}
                alt={detail?.firstname}
                className="bg-slate-100"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-xl font-semibold ">
                {detail?.firstname} {detail?.lastname}
              </div>
              <div className="text-gray-500">{detail?.department}</div>

              <div className="text-gray-500">{detail?.companyName}</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid font-semibold grid-cols-2 gap-8">
            <div>
              <div className="text-gray-500 font-normal">Phone Number</div>

              <div className="">{detail?.phoneNumber}</div>
            </div>
            <div className="col-span-2">
              <div className="text-gray-500 font-normal">Email address</div>

              <div className="">{detail?.email}</div>
            </div>
            <div className="col-span-2">
              <div className="text-gray-500 font-normal">Address</div>

              <div className="">{detail?.address}</div>
            </div>
            <div>
              <div className="text-gray-500 font-normal">Department</div>

              <div className="">{detail?.department}</div>
            </div>
            <div>
              <div className="text-gray-500 font-normal">Company</div>

              <div className="">{detail?.companyName}</div>
            </div>
            <div className="col-span-2">
              <div className="text-gray-500 font-normal">Notes</div>

              <div className="">{detail?.notes}</div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t justify-end">
          <div className="space-x-4 m-3 ">
            <Button
              className="text-lg px-6 py-5 border"
              onClick={() => setEdit(true)}
            >
              Edit
            </Button>
            <Button
              variant={"destructive"}
              className="px-6 py-5 text-lg"
              onClick={() => detail?.id && confirmDelete(detail?.id, onDelete)}
            >
              Delete
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DetailCard;
