import { NextResponse } from "next/server";

// The URL will be => http://localhost:3000/api/echo?name=Mehdi&instrument=guitar

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  //   const name = searchParams.get("name");
  //   const instrument = searchParams.get("instrument");
  //   return NextResponse.json({ name, instrument });

  // Object.fromEntries() : Transform a list of key-value pairs into an object
  // .entries() : returns an Array Iterator object with key/value pairs:
  const obj = Object.fromEntries(searchParams.entries());
  return NextResponse.json(obj);
}
