import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Params {
  params: {
    postId: string;
  };
}

export function generateMetadata({ params: { postId } }: Params) {
  const posts = getSortedPostsData(); // NextJS deduped.

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params: { postId } }: Params) {
  const posts = getSortedPostsData(); // NextJS deduped.

  if (!posts.find((post) => post.id === postId)) notFound(); // The "return" KW is not necessary with notFound()

  const { title, date, contentHtml } = await getPostData(postId);
  const pubDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}

export function generateStaticParams() {
  const posts = getSortedPostsData(); // NextJS deduped.

  return posts.map((post) => ({
    postId: post.id,
  }));
}
