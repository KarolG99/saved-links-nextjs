"use client";

import { useRouter } from "next/navigation";

export default function Page({ params }: any) {
  const { id } = params;
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="m-3 font-medium text-primaryBlue"
      >
        {"<-"} Back
      </button>
      <div className="max-w-[600px] mx-auto p-[10px] mt-[20px]">
        <h1 className="text-center font-bold text-2xl">Add link</h1>
      </div>
    </div>
  );
}
