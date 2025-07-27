import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "";

  if (query.length < 3) {
    return NextResponse.json([]);
  }

  const results = await prisma.dictionary.findMany({
    where: {
      OR: [
        { word: { startsWith: query } },
        { cyrillic: { startsWith: query } },
      ],
    },
    take: 5,
  });

  return NextResponse.json(results);
}
