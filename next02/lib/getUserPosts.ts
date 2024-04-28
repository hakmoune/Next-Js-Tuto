export default async function getUserPosts(userId: string) {
  const res = await fetch(`https://dummyjson.com/posts/search?q=${userId}`, {
    // don't need to do that, Next cach the result by default, // No cache: { cache: "no-store" }
    // cache: "force-cache",
    next: { revalidate: 60 }, // Incremental Static Regeneration (ISR), the data will be refreshed after 60s
  });

  if (!res.ok) return undefined;
  return res.json();
}
