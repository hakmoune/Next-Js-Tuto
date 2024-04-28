import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <Link href="/">Link To the home Page</Link>
      <br />
      <Link href="/about">Link To the about Page</Link>
    </>
  );
}
