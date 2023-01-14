import AddLinkButton from "@/components/AddLinkButton/AddLinkButton";
import SingleLink from "@/components/SingleLink/SingleLink";
import getUserLinks from "@/lib/getUserLinks";

export default async function page({ params }: any) {
  const { id } = params;
  const { links, tags } = await getUserLinks(id);

  return (
    <div className="max-w-[600px] mx-auto p-[10px]">
      {tags.length > 0 && (
        <div className="flex">
          {tags.map((tag: string) => (
            <>
              {tag.length > 0 && (
                <button
                  className="bg-tagBg text-tagText font-medium px-[10px] py-[1px] m-2 rounded-[7px]"
                  key={tag}
                >
                  #{tag}
                </button>
              )}
            </>
          ))}
        </div>
      )}

      {links.length > 0 ? (
        links.map((link: any, index: number) => (
          <SingleLink key={index} link={link} />
        ))
      ) : (
        <div className="text-center mt-5">
          <p>No link yet.</p>
          <p>Click the green button on the bottom right to add a link.</p>
        </div>
      )}

      <AddLinkButton id={id} />
    </div>
  );
}
