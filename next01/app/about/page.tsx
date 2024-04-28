import React from "react";
import Link from "next/link";

export default function About() {
  // throw new Error("Not Today"); // Uncomment this for testing the Errror system
  return (
    <>
      <h1>About</h1>
      <Link href="/">Link To the home Page</Link>
      <br />
      <Link href="/contact">Link To Contact page</Link>
    </>
  );
}
