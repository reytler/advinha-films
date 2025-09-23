import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { slug: string[] } }) {
  const [resource, id] = params.slug || [];

  if (resource === "users") {
    if (id) {
      return NextResponse.json({ user: { id, name: "User " + id } });
    }
    return NextResponse.json([{ id: 1, name: "User A" }, { id: 2, name: "User B" }]);
  }

  if (resource === "posts") {
    return NextResponse.json([{ id: 1, title: "Post A" }, { id: 2, title: "Post B" }]);
  }

  return NextResponse.json({ error: "Not found" }, { status: 404 });
}