import { JobPosting } from "@/types/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface CardProps {
  item: JobPosting;
}
const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className=" w-10/12 h-[220px] my-5 relative flex flex-row bg-gray-100 ">
      <Image
        src={item.image}
        width={400}
        height={400}
        className="w-96 h-full object-cover rounded-xl"
        alt="job"
      />
      <div className=" w-[500px] h-full justify-center  ml-5 flex flex-col">
        <Link href={`/dashboard/${item.id}`}>
          <h1 className=" text-2xl text-gray-800 font-bold  transition cursor-pointer hover:text-blue-500">
            {item.title}
          </h1>
        </Link>
        <h3 className=" text-xl text-gray-500 mt-3 ">
          {item.shortDescription}
        </h3>
        <h3 className=" text-lg text-gray-700 mt-3 ">ctc {item.ctc} </h3>
        <h3 className=" text-lg text-gray-700 mt-3 ">
          location {item.jobLocation}{" "}
        </h3>
        <h2 className=" text-sm text-gray-900 font-bold mt-1">
          skills:- {item.skills}
        </h2>
      </div>

      <div className=" absolute right-2 top-2">
        <h1 className=" text-sm text-gray-900">
          last date: {new Date(item?.lastDate).toLocaleDateString()}
        </h1>
      </div>
    </div>
  );
};

export default Card;
