"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

import headerImg from "../../public/headerImg.png";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex flex-col items-center justify-around p-1">
      <div className="text-center">
        <h1 className="font-black text-primaryBlue text-4xl mb-2">
          Styled Links
        </h1>
        <h4>All useful links in one place.</h4>
        <p>Save the links for later and keep them all in one place.</p>
        <button
          onClick={() => signIn("google")}
          className="mt-10 bg-primaryBlue text-white px-4 py-2 text-lg rounded-xl"
        >
          Sign in with Google
        </button>
      </div>
      <Image src={headerImg} alt="" className=" w-full max-w-[500px]" />
    </div>
  );
}
