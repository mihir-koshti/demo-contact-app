import { FiSend } from "react-icons/fi";
import { HiWallet, HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { TbTagStarred } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { MdEngineering } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { PiPhoneCall } from "react-icons/pi";

// menu list 
export const menulist = [
  {
    icon: <HiWallet className="text-2xl " />,
    menuName: "All",
    menuid: 1,
    filter: (c) => true,
  },
  {
    icon: <FiSend className="text-2xl " />,
    menuName: "Frequent",
    menuid: 2,
    filter: (c) => c?.frequent, // ✅ only frequent contacts
  },
  {
    icon: <TbTagStarred className="text-2xl " />,
    menuName: "Starred",
    menuid: 3,
    filter: (c) => c?.starred, // ✅ only starred contacts
  },
  {
    icon: <MdEngineering className="text-2xl " />,
    menuName: "Engineering",
    menuid: 4,
    catergory: true,
    filter: (c) => c?.department === "Engineering", // ✅ custom filter
  },
  {
    icon: <BiSupport className="text-2xl " />,
    menuName: "Support",
    menuid: 5,
    catergory: true,
    filter: (c) => c?.department === "Support", // ✅ custom filter
  },
  {
    icon: <BsCreditCard2Front className="text-2xl " />,
    menuName: "Sales",
    menuid: 6,
    catergory: true,
    filter: (c) => c?.department === "Sales", // ✅ custom filter
  },
  {
    icon: <HiOutlineWrenchScrewdriver className="text-2xl " />,
    menuName: "Technical",
    menuid: 7,
    catergory: true,
    filter: (c) => c?.department === "Technical", // ✅ custom filter
  },
  {
    icon: <PiPhoneCall className="text-2xl " />,
    menuName: "Marketing",
    menuid: 8,
    catergory: true,
    filter: (c) => c?.department === "Marketing", // ✅ custom filter
  },
];


// Image List for Contacts
export const imageList = [
  { id: 1, gender: "boy", name: "Boy Image 1", value: "/avatar/boy1.png" },
  { id: 2, gender: "boy", name: "Boy Image 2", value: "/avatar/boy2.png" },
  { id: 15, gender: "girl", name: "Girl Image 5", value: "/avatar/girl5.png" },
  { id: 3, gender: "boy", name: "Boy Image 3", value: "/avatar/boy3.png" },
  { id: 4, gender: "boy", name: "Boy Image 4", value: "/avatar/boy4.png" },
  { id: 11, gender: "girl", name: "Girl Image 1", value: "/avatar/girl1.png" },
  { id: 5, gender: "boy", name: "Boy Image 5", value: "/avatar/boy5.png" },
  { id: 12, gender: "girl", name: "Girl Image 2", value: "/avatar/girl2.png" },
  { id: 6, gender: "boy", name: "Boy Image 6", value: "/avatar/boy6.png" },
  { id: 18, gender: "girl", name: "Girl Image 8", value: "/avatar/girl8.png" },
  { id: 7, gender: "boy", name: "Boy Image 7", value: "/avatar/boy7.png" },
  { id: 13, gender: "girl", name: "Girl Image 3", value: "/avatar/girl3.png" },
  { id: 10, gender: "boy", name: "Boy Image 10", value: "/avatar/boy10.png" },
  { id: 17, gender: "girl", name: "Girl Image 7", value: "/avatar/girl7.png" },
  { id: 14, gender: "girl", name: "Girl Image 4", value: "/avatar/girl4.png" },
  { id: 8, gender: "boy", name: "Boy Image 8", value: "/avatar/boy8.png" },
  { id: 9, gender: "boy", name: "Boy Image 9", value: "/avatar/boy9.png" },
  { id: 16, gender: "girl", name: "Girl Image 6", value: "/avatar/girl6.png" },
  { id: 19, gender: "girl", name: "Girl Image 9", value: "/avatar/girl9.png" },
  { id: 20, gender: "girl", name: "Girl Image 10", value: "/avatar/girl10.png" },
];

export const initialValue = {
  firstname: "",
  lastname: "",
  department: "Engineering",
  companyName: "",
  phoneNumber: "",
  email: "",
  address: "",
  notes: "",
  image: "",
  starred: false,
  frequent: false,
};
