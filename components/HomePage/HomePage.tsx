"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import headerImg from "../../public/headerImg.png";
import { Player } from "@lottiefiles/react-lottie-player";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "authenticated") {
      setIsLoading(true);
      fetch("/api/signin", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(session.user),
      })
        .then((res) => res.json())
        .then((userId) => {
          router.push(`/user/${userId}`);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setError("Something went wrong");
        });
    }
  }, [router, session?.user, status]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-around p-1">
      <div className="text-center">
        <h1 className="font-black text-primaryBlue text-4xl mb-2">
          Saved Links
        </h1>
        <h4>All useful links in one place.</h4>
        <p>Save the links for later and keep them all in one place.</p>
        {isLoading && !error && (
          <Player
            src="https://assets9.lottiefiles.com/packages/lf20_usmfx6bp.json"
            loop
            autoplay
            className="w-20 h-20"
          />
        )}
        {!isLoading && !error && (
          <button
            onClick={() => signIn("google")}
            className="mt-10 bg-primaryBlue text-white px-4 py-2 text-lg rounded-xl"
          >
            Sign in with Google
          </button>
        )}
        {!isLoading && error && <p className="mt-5 font-bold">{error}</p>}
      </div>
      <Image src={headerImg} alt="" className=" w-full max-w-[500px]" />
    </div>
  );
}
