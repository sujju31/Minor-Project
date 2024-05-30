import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  const create = await prisma.post.create({
    data: {
      title: data.title,
      description: data.description,
      image: data.image,
      skills: data.skills,
      eligibility: data.eligibility,
      lastDate: data.lastDate,
      ctc: data.ctc,
      jobLocation: data.jobLocation,
      shortDescription: data.shortDescription,
    },
  });
  if (!create) {
    return NextResponse.json({ success: false, message: "Failed to create post" });
  }
  return NextResponse.json({ success: true, post: create });
}
