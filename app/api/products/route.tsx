import { NextRequest, NextResponse } from "next/server";
import { productSchema } from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const products = await prisma.products.findMany();
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = productSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const addProduct = await prisma.products.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });
  return NextResponse.json(addProduct,{status:201});
}
