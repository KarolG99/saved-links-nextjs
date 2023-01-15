import React from "react";
import AddLinkButton from "../AddLinkButton/AddLinkButton";
import SingleLink from "../SingleLink/SingleLink";

export default function DisplayLinks({
  id,
  tags,
  links,
}: {
  id: string;
  tags: any;
  links: any;
}) {
  return (
    <div className="max-w-[600px] mx-auto p-[10px]">
      {tags.length > 0 && (
        <div className="flex flex-wrap">
          {tags.map((tag: string) => (
            <React.Fragment key={tag}>
              {tag.length > 0 && (
                <button className="bg-tagBg text-tagText font-medium px-[10px] py-[1px] m-2 rounded-[7px]">
                  #{tag}
                </button>
              )}
            </React.Fragment>
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
