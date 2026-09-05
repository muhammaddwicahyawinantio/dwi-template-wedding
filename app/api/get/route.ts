import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Wish from "@/lib/models/Wish";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "5", 10);

  try {
    await connectToDatabase();

    const wishes = await Wish.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalWishes = await Wish.countDocuments();

    return NextResponse.json({
      wishes,
      totalPages: Math.ceil(totalWishes / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error("Error fetching wishes:", error);
    return NextResponse.json(
      { message: "Gagal mengambil ucapan", error },
      { status: 500 }
    );
  }
}
