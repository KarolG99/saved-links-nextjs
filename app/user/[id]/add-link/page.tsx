"use client";

import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
  tag: string;
  description: string;
  link: string;
};

export default function Page({ params }: any) {
  const { id } = params;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
            {...register("link", { required: true, minLength: 10 })}
            placeholder="https://..."
          />
          {errors.link && <span className="error">This field is required</span>}

          <button
            type="submit"
            className="mt-[30px] bg-[#12A744] text-white w-fit px-[15px] py-[5px] rounded-[7px] self-center"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
