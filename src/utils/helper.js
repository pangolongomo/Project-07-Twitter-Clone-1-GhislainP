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
    return monthFormater(dateValue.getMonth()) + " " + dateValue.getDate();
  }

  return (
    monthFormater(dateValue.getMonth()) +
    " " +
    dateValue.getDate() +
    " " +
    dateValue.getFullYear()
  );
}

function monthFormater(month) {
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

export const iconSizes = { width: "1.5em", height: "1.5em" };
