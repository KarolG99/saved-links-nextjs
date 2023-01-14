export default async function getUserLinks(id: string) {
  const userLinks = await fetch(`http://localhost:3000/api/get-links/${id}`, {
    next: { revalidate: 10 },
  });
  return userLinks.json();
}
