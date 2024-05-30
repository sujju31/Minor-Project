"use client";
import Image from "next/image";
import Link from "next/link";
import React, { use, useState } from "react";
import toast from "react-hot-toast";
import { useMyContext } from "../../../context/Context";


const LoginPage = () => {
    const context = useMyContext()
    const {activeUser, setActiveUser} = context
    const [Email, setEmail] = useState<string>()
    const [Password, setPassword] = useState<string>()
  const submitData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: Email,
          password: Password,
        }),
      });
        const data = await res.json();
        console.log(data);
        
        if (data.user) {
            toast.success("Login success")
            setActiveUser(data.user)
            // redirect("/dashboard")
        }else{
            toast.error(data?.message)
        }
    } catch (error) {
           toast.error("Invalid credentials")
    }
  };
  return (
    <main className=" w-full h-screen justify-center items-center bg-[#f0eded] flex flex-row">
      <div className=" w-[500px]  h-screen flex justify-center items-center">
        <div className=" w-10/12 rounded-lg h-[450px] flex justify-center flex-col items-center bg-gray-200">
          <h1 className=" text-xl text-gray-700 font-bold font-serif">
            Let's go buddy 🦄{" "}
          </h1>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered my-4 w-full max-w-xs text-black"
          />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered my-4 w-full max-w-xs text-black"
          />
          <button className="btn btn-wide font-serif mt-6" onClick={()=>submitData()}>login now</button>
          <Link href="/signup">
            <h3 className=" text-gray-700 hover:text-blue-300 mt-3">
              Not created any account yet? SignUp now
            </h3>
          </Link>
        </div>
      </div>

      <Image
        src="https://images.unsplash.com/photo-1621799754526-a0d52c49fad5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        width={1500}
        height={1200}
        className=" w-2/3 h-screen object-cover"
      />
    </main>
  );
};

export default LoginPage;
