import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import { notFound } from "next/navigation";

type Params = {
  params: {
    userId: string;
  };
};

// Function generateMetadata to generate Metadata dynamically
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<TUser> = getUser(userId);
  const user = await userData;

  if (!user) {
    return {
      title: "User Not Found",
    };
  }

  return {
    title: user.brand,
    description: `This is the page of the user ${user.title}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<TUser> = getUser(userId);
  const userPostsData: Promise<IPosts> = getUserPosts(userId);

  const user = await userData;

  if (!user) notFound();

  return (
    <>
      <h2>{user.title}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const usersData: Promise<IUsers> = await getAllUsers();
  const users = await usersData;

  return users?.products?.map((user) => ({
    userId: user.id.toString(),
  }));
}
