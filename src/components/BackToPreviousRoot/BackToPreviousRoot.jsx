import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function BackToPreviousRoot() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="rounded-full hover:bg-[#ffffff] p-4 hover:bg-opacity-20 border border-[#2f3336] border-opacity-70">
      <BiArrowBack />
    </button>
  );
}

export default BackToPreviousRoot;
