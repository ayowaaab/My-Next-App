import { NextRequest, NextResponse } from "next/server";
import { schema } from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user)
    return NextResponse.json({ error: "user not found" }, { status: 400 });

  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!user)
    return NextResponse.json({ error: "user not found" }, { status: 400 });

  const newUser = await prisma.user.update({
    where: { id: parseInt(params.id) },
    data: {
      email: body.email,
      name: body.name,
    },
  });
  return NextResponse.json(newUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user)
    return NextResponse.json({ error: "User Not Found" }, { status: 400 });

  await prisma.user.delete({
    where: { id: user.id },
  });

  return NextResponse.json({});
}
