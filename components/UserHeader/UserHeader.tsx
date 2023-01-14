"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function UserHeader() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [router, session, status]);

  return (
    <div className="flex justify-between items-center p-2 shadow-sm rounded-b-[12px]">
      <div className="flex justify-start items-center">
        {session?.user?.image && (
          <Image
            src={session?.user?.image}
            alt=""
            width={45}
            height={45}
            className="rounded-full mr-2"
          />
        )}
        {session?.user?.name && (
          <h2 className="font-bold">{session.user.name}</h2>
        )}
      </div>

      <button
        className=" shadow aspect-square p-3 rounded-full bg-white"
        onClick={() => signOut()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-darkText"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
      </button>
    </div>
  );
}
