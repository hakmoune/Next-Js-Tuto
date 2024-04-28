export default async function getUser(userId: string) {
  const res = await fetch(`https://dummyjson.com/products/${userId}`);

  if (!res.ok) return undefined;

  return res.json();
}
