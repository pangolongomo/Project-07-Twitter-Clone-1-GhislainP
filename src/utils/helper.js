import { BiMessageRounded, BiRepost } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { FiShare } from "react-icons/fi";
import { TbLink } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { MdBusinessCenter } from "react-icons/md";

export function actionCountformatter(total) {
  function formatValue(divider, rank) {
    return (total / divider).toFixed(1).replace(".0", "") + rank;
  }
  if (total < 1e3) {
    return total;
  } else if (total < 1e6) {
    return formatValue(1e3, "K");
  } else if (total < 1e9) {
    return formatValue(1e6, "M");
  } else return formatValue(1e9, "B");
}

export function dateFormatter(date) {
  const dateValue = new Date(date);
  const differenceFromNow = new Date() - dateValue;
  const hour = 1000 * 3600;
  if (differenceFromNow < hour) {
    return new Date(differenceFromNow).getMinutes() + "m";
  }

  const day = hour * 24;
  if (differenceFromNow < day) {
    return new Date(differenceFromNow).getUTCHours() + "h";
  }

  const daysDifference = new Date().getDate() - dateValue.getDate();
  if (dateValue.getMonth() === new Date().getMonth() && daysDifference < 32) {
    return daysDifference + "d";
  }

  if (dateValue.getFullYear() === new Date().getFullYear()) {
    return monthFormaterShort(dateValue.getMonth()) + " " + dateValue.getDate();
  }

  return (
    monthFormaterShort(dateValue.getMonth()) +
    " " +
    dateValue.getDate() +
    " " +
    dateValue.getFullYear()
  );
}

export function joinDateFormatter(date) {
  const dateValue = new Date(date);
  if (dateValue.getFullYear() === new Date().getFullYear()) {
    return monthFormater(dateValue.getMonth());
  } else {
    return monthFormater(dateValue.getMonth()) + " " + dateValue.getFullYear();
  }
}

function monthFormaterShort(month) {
  if (month === 0) return "Jan";
  else if (month === 1) return "Feb";
  else if (month === 2) return "Mar";
  else if (month === 3) return "Apr";
  else if (month === 4) return "May";
  else if (month === 5) return "Jun";
  else if (month === 6) return "Jul";
  else if (month === 7) return "Aug";
  else if (month === 8) return "Sep";
  else if (month === 9) return "Oct";
  else if (month === 10) return "Nov";
  else if (month === 11) return "Dec";
}

function monthFormater(month) {
  if (month === 0) return "janvier";
  else if (month === 1) return "février";
  else if (month === 2) return "mars";
  else if (month === 3) return "avril";
  else if (month === 4) return "mai";
  else if (month === 5) return "juin";
  else if (month === 6) return "juillet";
  else if (month === 7) return "août";
  else if (month === 8) return "septembre";
  else if (month === 9) return "octobre";
  else if (month === 10) return "novembre";
  else if (month === 11) return "decembre";
}

export function getActionIcon(name, actionState) {
  let icon = null;
  if (name === "message") {
    icon = BiMessageRounded;
  } else if (name === "repost") {
    icon = BiRepost;
  } else if (name === "like") {
    icon = actionState ? IoMdHeart : IoMdHeartEmpty;
  } else if (name === "share") {
    icon = FiShare;
  }
  return icon;
}

export function getUserInfoIcons(type) {
  let icon = null;
  if (type === "website") {
    icon = TbLink;
  } else if (type === "location") {
    icon = GrLocation;
  } else if (type === "profession") {
    icon = MdBusinessCenter;
  }
  return icon;
}
