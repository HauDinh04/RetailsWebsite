"use server";
import { NextRequest, NextResponse } from "next/server";

export const registerPOST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/user/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Bearer c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f",
        },
        body: JSON.stringify(body),
      }
    );
    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.log("ERR:", err);
    return new NextResponse("server err", { status: 500 });
  }
};
