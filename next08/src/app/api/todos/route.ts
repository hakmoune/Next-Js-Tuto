import { NextResponse } from "next/server";

const DATA_SOURCE_URL: string = "https://jsonplaceholder.typicode.com/todos";
// as string, tells the TypeScript compiler to treat the value from process.env.DATA_API_KEY as a string.
const API_KEY: string = process.env.DATA_API_KEY as string;

export async function GET(request: Request) {
  const origin = request.headers.get("origin");

  const res = await fetch(DATA_SOURCE_URL);
  const todos: Todo[] = await res.json();

  return new NextResponse(JSON.stringify(todos), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": origin || "*",
    },
  });
}

export async function DELETE(request: Request) {
  // Partial<Todo> : some of the properties of Todo, not necessarily all of them.
  const { id }: Partial<Todo> = await request.json();

  if (!id) return NextResponse.json({ message: "ID required" });

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
  });

  return NextResponse.json({ message: `TODO ${id} deleted` });
}

export async function POST(request: Request) {
  const { userId, title }: Partial<Todo> = await request.json();

  if (!userId || !title)
    return NextResponse.json({ message: "Missing required data" });

  const res = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed: false,
    }),
  });

  const newTodo: Todo = await res.json();

  return NextResponse.json(newTodo);
}

export async function PUT(request: Request) {
  const { userId, id, title, completed }: Todo = await request.json();

  if (!userId || !title || !id || typeof completed !== "boolean")
    return NextResponse.json({ message: "Missing required data" });

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed,
    }),
  });

  const updatedTodo: Todo = await res.json();

  return NextResponse.json(updatedTodo);
}
