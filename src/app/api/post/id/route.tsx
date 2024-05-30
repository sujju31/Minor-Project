import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  const post = await prisma.post.findFirst({
    where: {
      id: data.id,
    },
   });
  if (!post) {
    return NextResponse.json({ success: false, message: "Failed to create post" });
  }
  return NextResponse.json({ success: true, post });
}
