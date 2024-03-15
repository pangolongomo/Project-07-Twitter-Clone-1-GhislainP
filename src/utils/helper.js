import { BiMessageRounded, BiRepost } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { FiShare } from "react-icons/fi";

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

  const dateValueMonth = dateValue.toLocaleString("en-US", {
    month: "short",
  });
  const dateValueDay = dateValue.toLocaleString("en-US", { day: "numeric" });
  const dateValueYear = dateValue.toLocaleString("en-US", {
    year: "numeric",
  });

  const daysDifference = new Date().getDate() - dateValueDay;
  if (dateValue.getMonth() === new Date().getMonth() && daysDifference < 32) {
    return daysDifference + "d";
  }

  if (dateValue.getFullYear() === new Date().getFullYear()) {
    return dateValueMonth + " " + dateValueDay;
  }

  return dateValueMonth + " " + dateValueDay + " " + dateValueYear;
}

export function joinDateFormatter(date) {
  const dateValue = new Date(date);
  const month = dateValue.toLocaleString("fr-FR", { month: "long" });
  if (dateValue.getFullYear() === new Date().getFullYear()) {
    return month;
  } else {
    return month + " " + dateValue.getFullYear();
  }
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

export const sortByDate = (arr) => {
  return arr.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export function handleActionStyle(name, actionActive) {
  let textStyle;
  let iconBg;

  if (name === "message") {
    textStyle = `hover:text-[#1e9cf1] ${actionActive ? `text-[#1e9cf1]` : ""}`;
    iconBg = `group-hover:bg-[#1e9cf1]`;
  } else if (name === "repost") {
    textStyle = `hover:text-[#14c288] ${actionActive ? `text-[#14c288]` : ""}`;
    iconBg = `group-hover:bg-[#14c288]`;
  } else if (name === "like") {
    textStyle = `hover:text-[#f92f8d] ${actionActive ? `text-[#f92f8d]` : ""}`;
    iconBg = `group-hover:bg-[#f92f8d]`;
  } else if (name === "share") {
    textStyle = `hover:text-[#1e9cf1] ${actionActive ? `text-[#1e9cf1]` : ""}`;
    iconBg = `group-hover:bg-[#1e9cf1]`;
  }

  return { textStyle, iconBg };
}
