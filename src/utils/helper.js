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

export async function fetchActionIcon(fileName) {
  const { default: svgImage } = await import(`../images/icons/${fileName}.svg`);
  return svgImage;
}
