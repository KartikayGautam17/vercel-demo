import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  return NextResponse.json({ data: "Your Data is " + data.data });
};
