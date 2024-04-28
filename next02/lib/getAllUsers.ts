export default async function getAllUsers() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) return undefined;

  return res.json();
}
