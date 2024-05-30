import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function POST(req: NextRequest, res: NextResponse) {
  
  const data = await req.json();

  const checkIsUserExist = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });
  if (checkIsUserExist) {
    return NextResponse.json({success:false, user:checkIsUserExist, message:"User already exist"});
  } else {
    const create = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: data.password,
      },
    });
    return NextResponse.json({success:true, user:create});
  }
}