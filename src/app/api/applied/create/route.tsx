import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  const create = await prisma.applied.create({
    data: {
      username: data.username,
      postId: data.postId,
      email: data.email,
      about: data.about,
      percentage: data.percentage,
    },
  });
  if (!create) {
    return NextResponse.json({
      success: false,
      message: "Failed to create post",
    });
  }
  return NextResponse.json({ success: true, applied: create });
}
