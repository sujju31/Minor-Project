"use client";
import React from "react";
import { useMyContext } from "../../../context/Context";
import Link from "next/link";

const NavBar = () => {
   const context = useMyContext()
   const {activeUser, setActiveUser} = context
  return (
    <div className=" w-full h-14 px-12 z-40 fixed top-0 flex justify-center items-center   ">
      <div className="w-2/3 h-full flex justify-between items-center flex-row max-md:w-full bg-[#ffffff48] backdrop-blur-lg rounded-3xl p-2 max-md:rounded-none">
        <h1 className="text-lg font-serif text-black max-md:text-lg">RecuitmentHub</h1>
        {activeUser ?
        <button className=" w-44 h-10 rounded-2xl bg-white text-black font-serif">{activeUser.username}</button>
        :<Link href="/login">
            <button className=" w-44 h-10 rounded-2xl bg-white text-black font-serif">Login</button>
        </Link>
         }
      </div>
    </div>
  );
};

export default NavBar;
