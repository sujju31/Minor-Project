import React from "react";
import Card from "./card";
import { JobPosting } from "@/types/common";

const DashboardPage = async () => {
  const data = await fetch("http://localhost:3000/api/post/all", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // your data here
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

    console.log(data.posts);
    

  return (
    <main className=" w-full min-h-screen flex flex-col items-center bg-slate-200">
      <div className=" w-full h-[300px] flex justify-center items-center flex-col">
        <div className=" w-2/3">
          <label className="input input-bordered flex w-full items-center gap-2">
            <input
              type="text"
              className="grow w-full text-black"
              placeholder="Search your dream job"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 text-black opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <h1 className=" w-full text-center mt-4 text-gray-400">
            "Welcome to our platform, where we are committed to helping you find
            your dream job. Our mission is to ensure your success by providing a
            comprehensive search tool that connects you with opportunities
            tailored to your skills and interests. We understand that job
            hunting can be challenging, so we strive to make it as seamless as
            possible. With our platform
          </h1>
        </div>
      </div>
      {data &&
        data?.posts &&
        data.posts.map((item: JobPosting) => {
          return <Card key={item.id} item={item} />;
        })}
    </main>
  );
};

export default DashboardPage;
