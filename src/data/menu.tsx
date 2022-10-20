import { AiOutlineHome } from "react-icons/ai";
import { FaBlogger, FaCode, FaRegUser } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { RiContactsBookLine } from "react-icons/ri";

// Menu items for Homepage One
export const menuItem = [
  {
    id: "01",
    name: "Home",
    link: "/home",
    icon: <AiOutlineHome />,
  },
  {
    id: "02",
    name: "About",
    link: "/about",
    icon: <FaRegUser />,
  },
  {
    id: "06",
    name: "Experience",
    link: "/experience",
    icon: <CgNotes />,
  },
  {
    id: "03",
    name: "Skills",
    link: "/skills",
    icon: <FaCode />,
  },
  {
    id: "04",
    name: "Blogs",
    link: "/blogs",
    icon: <FaBlogger />,
  },
  {
    id: "05",
    name: "Contact",
    link: "/contact",
    icon: <RiContactsBookLine />,
  },
];
