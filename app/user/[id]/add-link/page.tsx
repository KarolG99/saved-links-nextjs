"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
  tag: string;
  description: string;
  link: string;
};

async function addUserLink(id: string, link: Inputs) {
  try {
    const response = await fetch(`/api/add-link/${id}`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(link),
    });
    return await response.json();
  } catch {
    return { error: "Something went wrong" };
  }
}

export default function Page({ params }: any) {
  const { id } = params;
  const router = useRouter();
  const [isAdding, setIsAdding] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsAdding(true);
    setIsSuccess(false);
    setErrorMsg("");
    addUserLink(id, data).then((res) => {
      setIsAdding(false);
      if (res.error) {
        setErrorMsg(res.error);
      } else {
        setIsSuccess(true);
      }
    });
    reset();
  };

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

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <input
            {...register("title", { required: true })}
            className="input"
            placeholder="Title"
          />
          {errors.title && (
            <span className="error">This field is required</span>
          )}

          <input className="input" {...register("tag")} placeholder="tag" />

          <input
            className="input"
            {...register("description", { required: true })}
            placeholder="Description"
          />
          {errors.description && (
            <span className="error">This field is required</span>
          )}

          <input
            className="input"
            {...register("link", { required: true, minLength: 8 })}
            placeholder="https://..."
          />
          {errors.link && (
            <span className="error">
              This field is required (min. length is 8)
            </span>
          )}

          {isAdding && !isSuccess && (
            <p className="text-center mt-[20px] bg-yellow-100 text-yellow-700 w-fit mx-auto px-3 py-1 rounded-[7px]">
              Adding ...
            </p>
          )}

          {!isAdding && isSuccess && (
            <p className="text-center mt-[20px] bg-green-100 text-green-700 w-fit mx-auto px-3 py-1 rounded-[7px]">
              Link added!
            </p>
          )}

          {!isAdding && errorMsg.length > 0 && (
            <p className="text-center mt-[20px] bg-red-100 text-red-700 w-fit mx-auto px-3 py-1 rounded-[7px]">
              Something went wrong
            </p>
          )}

          <button
            type="submit"
            className="mt-[30px] bg-[#12A744] text-white w-fit px-[15px] py-[5px] rounded-[7px] self-center"
          >
            Add link
          </button>
        </form>
      </div>
    </div>
  );
}
