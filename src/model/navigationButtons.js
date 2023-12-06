import { BiHomeCircle } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { CiHashtag, CiMail, CiBookmark } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { BsCardText } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { PiDotsThreeCircle } from "react-icons/pi";

export const navigationButtons = [
  { icon: FaTwitter, link: "/" },
  { icon: BiHomeCircle, text: "Home", link: "/" },
  { icon: CiHashtag, text: "Explore", link: "/" },
  { icon: GoBell, text: "Notifications", link: "/" },
  { icon: CiMail, text: "Messages", link: "/" },
  { icon: CiBookmark, text: "Bookmarks", link: "/" },
  { icon: BsCardText, text: "Lists", link: "/" },
  { icon: FaRegUser, text: "Profile    ", link: "/" },
  { icon: PiDotsThreeCircle, text: "More    ", link: "/" },
];
