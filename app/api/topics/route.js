import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  //desturing the request  body
  const { title, description } = await request.json();

  //database connection
  await connectMongoDB();

  //inserting data to the Topic model
  await Topic.create({ title, description });

  //returning a next response
  return NextResponse.json({ message: "Topic created" }, { status: 201 });
}

export async function GET() {
  //database connection
  await connectMongoDB();

  const topics = await Topic.find();

  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  //getting the id from the request url
  const id = request.nextUrl.searchParams.get("id");

  //database connection
  await connectMongoDB();

  //finding and deleting by id
  await Topic.findByIdAndDelete(id);

  //returning a next response
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
