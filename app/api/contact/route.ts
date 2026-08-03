import { NextResponse } from "next/server";

import { appendContactRow } from "@/lib/google-sheet";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    await appendContactRow(body);

    return NextResponse.json({
      success: true,
      message: "Contact request submitted.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit contact request.",
      },
      {
        status: 500,
      },
    );
  }
}
