import React from "react";

function Button({ rounded, children, color, bg, margin, padding, action,border,width }) {
  return (
    <button
      className={`${rounded || "rounded-full"} ${color || "text-white"} ${
        margin || ""
      } ${width||""} 
        ${padding || "px-4 py-2"} ${bg || "bg-[#1d9bf0]"} ${border||"border-none"}
      }`}
      onClick={action}
    >
      {children}
    </button>
  );
}

export default Button;
