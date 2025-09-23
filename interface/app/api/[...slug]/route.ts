import { categories } from "@/mocks/categories";
import { RoomApp } from "@advinha-films/application";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: { params: Promise<{ slug: string[] }> }) {
  const _roomApp: RoomApp = new RoomApp()
  const { slug } = await context.params;
  const [resource, id] = slug || [] || [];

  if (resource === "room") {
    if (id) {
      const _id = parseInt(id)
      const catName = categories.find(cat=>cat.id === _id)?.name || ""
      const idRoom = await _roomApp.createRoom(_id,catName)
      return NextResponse.json({ idRoom: idRoom });
    }
    return NextResponse.json([{ id: 1, name: "User A" }, { id: 2, name: "User B" }]);
  }

  if (resource === "posts") {
    return NextResponse.json([{ id: 1, title: "Post A" }, { id: 2, title: "Post B" }]);
  }

  return NextResponse.json({ error: "Not found" }, { status: 404 });
}