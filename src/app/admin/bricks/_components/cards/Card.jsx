import React from "react";
import Image from "next/image";
import CardDropDown from "../dropdowns/CardDropDown"; // Assuming this component is correctly implemented

export default function Card({ number, handleCardClick }) {
  return (
    <>
      <div onClick={() => handleCardClick(number)}>
        <Image
          src={"/bricks/image.svg"} // Use forward slash for the path
          className="rounded-xl"
          width={284}
          height={277.05}
        />
      </div>
      <div className=" mt-[-20px] h-[96px] w-full bg-white p-3 drop-shadow-md">
        <div className="flex items-center justify-between">
          <p className="text-[25.17px] font-semibold">Biostatistics</p>
          <CardDropDown />
        </div>
        <div className="flex gap-2 font-normal">
          28 <p className="font-bold">Bricks</p>
        </div>
      </div>
    </>
  );
}
