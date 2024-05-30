import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function POST(req: NextRequest, res: NextResponse) {
  
  const data = await req.json();
    const user = await prisma.user.findFirst({
        where: {
            email: data.email,
            password: data.password,
        },
    });
    if (!user) {
        return NextResponse.json({success:false, message:"Invalid credentials"});
    }
    return NextResponse.json({success:true, user:user});
  
}