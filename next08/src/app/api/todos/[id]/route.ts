import { NextResponse } from "next/server";

const DATA_SOURCE_URL: string = "https://jsonplaceholder.typicode.com/todos";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params: { id } }: Params) {
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);
  const todo: Todo = await res.json();

  if (!todo.id) return NextResponse.json({ message: "Todo not found" });

  return NextResponse.json(todo);
}
