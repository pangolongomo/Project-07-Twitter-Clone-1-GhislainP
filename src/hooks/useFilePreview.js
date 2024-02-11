import { useEffect, useState } from "react";

export default function useFilePreview(file) {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    if (file && file[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setImgSrc(reader.result);
      };
      reader.readAsDataURL(file[0]);
    }
  }, [file]);

  return [imgSrc, setImgSrc];
}
