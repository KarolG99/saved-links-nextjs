import AddLinkButton from "@/components/AddLinkButton/AddLinkButton";
import SingleLink from "@/components/SingleLink/SingleLink";
import getUserLinks from "@/lib/getUserLinks";

export default async function page({ params }: any) {
  const { id } = params;
  const userLinks = await getUserLinks(id);
  return (
    <div className="max-w-[600px] mx-auto p-[10px]">
      {userLinks &&
        userLinks.map((link: any, index: number) => (
          <SingleLink key={index} link={link} />
        ))}
        <AddLinkButton id={id} />
    </div>
  );
}
