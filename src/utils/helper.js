export function splitExtension(filename) {
  const i = filename.lastIndexOf(".");
  return [filename.slice(0, i), filename.slice(i)];
}

export async function imageFetcher([fileName, fileExtension]) {
  let image = null;
  if (fileExtension === ".jpg") {
    const { default: jpgImage } = await import(`../images/${fileName}.jpg`);
    image = jpgImage;
  } else if (fileExtension === ".png") {
    const { default: pngImage } = await import(`../images/${fileName}.png`);
    image = pngImage;
  }

  return image;
}

export async function fetchIcons(fileName) {
  const { default: svgImage } = await import(`../icons/${fileName}.svg`);
  return svgImage;
}

export function actionCountformatter(total) {
  let formatedValue = total;
  if (total >= 1e3) {
    return (formatedValue = (total / 1e3).toFixed(1).replace(".0", "") + "K");
  }
  if (total >= 1e6) {
    return (formatedValue = (total / 1e6).toFixed(1).replace(".0", "") + "M");
  }
  if (total >= 1e9) {
    return (formatedValue = (total / 1e9).toFixed(1).replace(".0", "") + "B");
  }
  return formatedValue;
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
