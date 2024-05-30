"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useMyContext } from "../../../context/Context";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const context = useMyContext();
  const { activeUser, setActiveUser } = context;
  const [Email, setEmail] = useState<string>();
  const [Password, setPassword] = useState<string>();
  const [username, setUsername] = useState<string>();

  const date = new Date();
    console.log(date.toISOString());
  const submitData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: Email,
          password: Password,
          username: username,
        }),
      });
      const data = await res.json();
      console.log(data);

      if (data.user) {
        toast.success("Login success");
        setActiveUser(data.user);
        // redirect("/dashboard")
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      toast.error("Invalid credentials");
    }
  };
  return (
    <main className=" w-full h-screen justify-center items-center bg-[#f0eded] flex flex-row">
      <div className=" w-1/2  h-screen flex justify-center items-center">
        <div className=" w-full rounded-lg h-[450px] flex justify-center flex-col items-center bg-gray-200">
          <h1 className=" text-xl text-gray-700 font-bold font-serif">
            Let's register 🦄{" "}
          </h1>
          <div className=" w-full justify-around items-center flex flex-row my-4 ">
            <input
              type="text"
              placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              className="input input-bordered my-4 w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered my-4 w-full max-w-xs"
            />
          </div>
          <div className=" w-full justify-around items-center flex flex-row my-4 ">
            <input
              type="text"
              placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered my-4 w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="confirm password"
              className="input input-bordered my-4 w-full max-w-xs"
            />
          </div>

          <button className="btn btn-wide font-serif mt-6" onClick={()=>submitData()}>SignUp now</button>
          <Link href="/login">
            <h3 className=" text-gray-700 hover:text-blue-300 mt-3">
              Already have a account? login now
            </h3>
          </Link>
        </div>
      </div>

      <Image
        src="https://images.unsplash.com/photo-1621799754526-a0d52c49fad5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        width={1500}
        height={1200}
        className=" w-1/2 h-screen object-cover"
      />
    </main>
  );
};

export default SignUpPage;
