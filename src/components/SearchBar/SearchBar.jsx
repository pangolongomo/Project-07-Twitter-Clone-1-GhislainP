import React from "react";
import { CiSearch } from "react-icons/ci";

function SearchBar({ placeholder }) {
  return (
    <div className="flex flex-nowrap gap-2 items-center px-4 py-3 bg-[#202327] text-[#6e767d] rounded-full sticky top-0">
      <CiSearch className="text-2xl" />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent text-white w-full border-none text-lg"
      />
    </div>
  );
}

export default SearchBar;
