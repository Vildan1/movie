"use client";
import React, { useState, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";
const Navbar = () => {
  const stateArray = Array.from({ length: 1000 }, () => ({
    id: Math.floor(Math.random() * 1000),
  }));
  const [movies, setMovies] = useState(stateArray);

  const [screen, setScreen] = useState(false);
  const toggleScreen = () => {
    setScreen(!screen);
  };

  const navRef = React.useRef(null);
  return (
    <div className="relative">
      <nav className="bg-[#fdf3d3] fixed top-0 left-0 right-0 ">
        {screen ? (
          <div>
            <div className=" mx-auto ">
              <div
                className="flex items-center justify-startß h-[50px] text-blue-700 "
                onClick={toggleScreen}
              >
                <AiOutlineLeft size={30}> </AiOutlineLeft>
              </div>
              <div className="border-t-2 border-blue-500"></div>
            </div>
            <div className="flex flex-col items-center h-screen overflow-y-scroll bg-white">
              {movies.map((movie) => (
                <a>{movie.id}</a>
              ))}
            </div>
          </div>
        ) : (
          <div className=" mx-auto ">
            <div className="flex items-center justify-center h-[50px] ">
              <div className="flex items-center">
                <div className="">
                  <div className=" flex items-center ">
                    <a
                      href="#home"
                      className="text-blue-800 font-bold px-3 py-2 rounded-md text-lg font-large"
                      onClick={() => setScreen(!screen)}
                    >
                      MOVIEPARK
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-yellow-500"></div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
