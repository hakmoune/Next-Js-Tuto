import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
  description: "Users Description for SEO",
};

export default async function UsersPage() {
  const usersData: Promise<IUsers> = await getAllUsers();
  const users = await usersData;

  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {users?.products?.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.title}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );

  return content;
}
