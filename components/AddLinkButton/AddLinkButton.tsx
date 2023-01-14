"use client";

import Link from "next/link";

export default function AddLinkButton({ id }: { id: string }) {

  return (
    <Link
      href={`/user/${id}/add-link`}
      className=" bg-[#12A744] text-white flex justify-center items-center p-3 fixed bottom-[15px] right-[15px] rounded-full aspect-square cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </Link>
  );
}
