"use client";
import { JobPosting } from "@/types/common";
import Image from "next/image";
import React, { useState } from "react";
import { useMyContext } from "../../../context/Context";
import toast from "react-hot-toast";

const ApplyJob = ({data}:{data:JobPosting}) => {

  const context = useMyContext()
  const {activeUser} = context
  const [percentage, setPercentage] = useState<string>()
  const [about, setAbout] = useState<string>()
  const submitData = async () => {
    if (!activeUser) {
      return toast.error("Please login to apply")
    }
    const res = await fetch("/api/applied/create", {
      method: "POST",
      body: JSON.stringify({
        username: activeUser?.username,
        postId: data.id,
        email: activeUser?.email, 
        about,
        percentage: percentage,
    })
    })
    const result = await res.json()
    if(result.applied){
      toast.success("Applied successfully")
    }else{
      toast.error("Failed to apply")
    
    }
  }
  const [displayChange, setDisplayChange] = useState(false)
  return (
    <div className=" w-full min-h-screen flex relative justify-center items-center flex-row bg-gray-300">
     {displayChange && <div className=" w-full fixed h-screen backdrop-blur-lg flex justify-center items-center text-black">
      <div className=" w-2/3 h-screen pt-10 flex flex-col bg-gray-300 justify-evenly items-center">
      <div className=" flex justify-between items-center">
          <div className=" mx-5">
            <h1>Enter name</h1>
            <input
              type="text"
              className="input input-bordered w-96"
              placeholder="name"
            
            />
          </div>
          <div>
            <h1>Enter email</h1>
            <input
              type="text"
              className="input input-bordered w-96"
              placeholder="email"
            />
          </div>
        </div>
        <textarea
          className="textarea w-10/12 h-[300px]"
          placeholder="Tell me about yourself"
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>
        <div className=" flex justify-between items-center">
          <div className=" mx-5">
            <h1>Upload resume</h1>
            <label className="form-control w-full max-w-xs">
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div>
            <h1>overoll gpa in college</h1>
            <input
              type="text"
              className="input input-bordered w-96"
              placeholder="Total percentage"
              onChange={(e) => setPercentage(e.target.value)}
            />
          </div>
        </div>
    <div>
    <button className=" btn btn-wide bg-blue-400 hover:bg-blue-300" onClick={()=>submitData()}>
          Submit</button>
          <button className=" btn btn-wide  mx-5" onClick={()=>setDisplayChange(!displayChange)}>
          Cancel</button>
    </div>
      </div>
      </div>
}
      <div className=" w-1/2 h-screen justify-center items-center flex ">
        <Image
          src={data.image}
          width={1000}
          height={1000}
          className=" w-full h-auto"
          alt="apply"
        />
      </div>
      <div className=" w-1/2 h-screen justify-center items-center flex flex-col ">
        <h1 className=" text-2xl text-gray-800 font-bold  transition cursor-pointer hover:text-blue-500">
          {data.title}
        </h1>
        <h3 className=" text-xl text-gray-500 mt-3 ">
          {data.shortDescription}
        </h3>
        <h3 className=" text-xl text-gray-500 mt-3 p-8 ">{data.description}</h3>
        <div className="w-full justify-between items-center flex flex-row p-8">
          <div>
            <h3 className=" text-lg text-gray-700 mt-3 ">ctc {data.ctc} </h3>
            <h3 className=" text-lg text-gray-700 mt-3 ">
              location {data.jobLocation}{" "}
            </h3>
            <h2 className=" text-sm text-gray-900 font-bold mt-1">
              skills:- {data.skills}
            </h2>
          </div>
          <button className=" btn btn-wide bg-blue-400 hover:bg-blue-300"  onClick={()=>setDisplayChange(!displayChange)}>
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;
