export default async function getUserLinks(id: string) {
  const userLinks = await fetch(`/api/get-links/${id}`);
  return userLinks.json();
}
