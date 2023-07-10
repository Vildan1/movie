import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import axios from "axios";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-[#96c3ec] p-8">
      <div className="flex text-white justify-center text-base font-semibold	">
        En Popüler İlk 10 Film Listesi
      </div>
      <div>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            className="w-full border-solid border-b-2 border-gray-400 mt-4 text-base cursor-pointer	"
            key={index}
          >
            <div className=" flex-col justify-center text-white mb-2 line-clamp-2 ">
              1-Star Wars 1.Bolum: Yeni bir Umut
            </div>
            <div className="flex flex-row j w-full mb-2 text-base">
              <div className="flex mr-2">
                <AiFillLike size={16} className="mr-1 mt-0.5 text-gray-500" />{" "}
                6.9
              </div>
              <div className="flex">350000 Oy</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
