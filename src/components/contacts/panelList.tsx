import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useContacts } from "@/store/useContacts";
import { Separator } from "../ui/separator";
import { menulist } from "@/contants/index";
import AddForm from "./AddForm";

const PanelList = () => {
  const [selectMenu, setSelectMenu] = useState("All");

  //get function and variables from useContacts
  const { contacts, selectedMenu, setSelectedMenu } = useContacts();

  useEffect(() => {
    if (selectMenu) {
      setSelectedMenu(selectMenu);
    }
  }, [selectMenu]);
  
  return (
    <div className="border  p-8 col-span-2">
      <div className="space-y-5">
        <AddForm />

        <div className="space-y-2">
          {menulist
            .filter((c) => !c.catergory)
            .map((menu) => {
              return (
                <div
                  key={menu?.menuid}
                  className={`flex rounded-lg items-center  hover:bg-blue-300/15 transition-all duration-300 hover:cursor-pointer p-3 gap-4 ${
                    selectedMenu === menu.menuName ?
                    "bg-blue-500/15 text-blue-400" : "text-gray-400"
                  }`}
                  onClick={() => setSelectMenu(menu.menuName)}
                >
                  <div>{menu.icon}</div>
                  <p className="font-normal text-lg">{menu.menuName}</p>
                </div>
              );
            })}
        </div>
        <Separator className="my-4" />
        <div className="space-y-4">
          <span className="uppercase  py-6 font-semibold font-sans tracking-wide">
            Categories
          </span>
          <div className="space-y-1 ">
            {menulist
              .filter((c) => c.catergory)
              .map((menu) => {
                return (
                  <div
                    key={menu?.menuid}
                    className={`flex rounded-lg text-gray-400 items-center hover:bg-blue-300/15 transition-all duration-300 hover:cursor-pointer p-3 gap-4 ${
                      selectedMenu === menu.menuName &&
                      "bg-blue-500/15 text-blue-400"
                    }`}
                    onClick={() => setSelectMenu(menu.menuName)}
                  >
                    <div>{menu.icon}</div>
                    <p className="font-normal  font- text-lg">
                      {menu.menuName}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelList;
