import React from "react";
import UserNavigation from "../../components/UserNavigation";
import { useParams } from "react-router-dom";

function NullUser() {
  const { handle } = useParams();
  return (
    <>
      <UserNavigation />
      <div className="w-full aspect-[3/1] bg-[#cfd9de]"></div>
      <div className="flex flex-col py-4 px-4 gap-4">
        <div className="flex justify-between py-2">
          <div className="relative">
            <div className="w-[130px] aspect-[1/1] absolute -top-24 bg-[#f7f9f9] rounded-full"></div>
          </div>
        </div>

        <div className="my-4 font-medium">{handle}</div>
      </div>

      <div className="flex justify-center">
        <div className="mt-12">
          <h2 className=" text-lg font-bold">Ce compte n'existe pas.</h2>
          <p className="text-gray-500">
            Essayez d'effectuer une autre recherche.
          </p>
        </div>
      </div>
    </>
  );
}

export default NullUser;
