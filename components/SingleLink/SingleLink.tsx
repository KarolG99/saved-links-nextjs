"use client";
import Image from "next/image";

import CopyImage from "../../public/copy.png";
import LinkImage from "../../public/newscreen.png";

export default function SingleLink({ link }: any) {
  return (
    <div className="bg-white min-w-full px-4 py-3 rounded-[12px] shadow-sm my-5">
      <h2 className=" font-bold text-lg">{link.title}</h2>
      {link.tag.length > 0 && (
        <span className="text-tagText text-xs font-semibold">#{link.tag}</span>
      )}

      <p className="mb-2 text-[0.9rem]">{link.description}</p>

      <div className=" flex w-full justify-end">
        <button
          onClick={() => navigator.clipboard.writeText(link.link)}
          className=" flex justify-center items-center text-[#0066FF] mr-[20px]"
        >
          Copy
          <Image src={CopyImage} alt="" className="ml-[5px]" />
        </button>
        <a
          href={link.link}
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center bg-[#0066FF] text-white px-[10px] py-[4px] w-fit rounded-[10px]"
        >
          Visit site
          <Image src={LinkImage} alt="" className=" ml-[5px]" />
        </a>
      </div>
    </div>
  );
}
