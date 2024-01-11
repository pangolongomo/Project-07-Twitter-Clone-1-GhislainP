import React from "react";
import { Link } from "react-router-dom";

function SuggestionMenu({ title, optionIcon: Icon, children }) {
  return (
    <div className="flex flex-col gap-4 bg-[#202327] p-4 rounded-[20px]">
      <div className="flex items-center justify-between ">
        <h3 className="font-bold text-lg">{title}</h3>
        {Icon && <Icon className="text-xl" />}
      </div>
      {children}
      <Link to="/" className="text-sky-400 font-bold">Show more</Link>
    </div>
  );
}

export default SuggestionMenu;