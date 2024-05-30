import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <main className=" w-full min-h-screen flex bg-white flex-col relative">
      <div className=" w-full min-h-screen flex flex-row justify-center items-center">
        <div className="w-1/2 h-screen flex justify-center flex-col items-center ">
          <h1 className=" text-[38px] text-gray-700">
            Recruitment Infrastructure for
            <br />
            Campus Hiring
          </h1>
          <h4 className=" w-2/3 mt-8 text-lg text-gray-500">
            Thousands of Employers of all sizes — from startups to large
            enterprises — use Superset to accept applications, conduct
            assessments and interviews, roll out offers ‐ all with one account
          </h4>
          <div className=" w-2/3">
            <Link href={"/dashboard"}>
              <button className=" btn btn-wide bg-yellow-300 text-black mt-5 hover:bg-yellow-200">
                Dashboard
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 h-screen flex justify-center items-center ">
          <Image
            src={"/recuiter.webp"}
            width={1000}
            height={1000}
            className=" w-full h-auto"
            alt="recuiter"
          />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
