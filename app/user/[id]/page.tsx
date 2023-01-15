"use client";
import React, { useEffect, useState } from "react";

import DisplayLinks from "@/components/DisplayLinks/DisplayLinks";
import getUserLinks from "@/lib/getUserLinks";
import UserLoading from "./loading";

export default function Page({ params }: any) {
  const { id } = params;
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState({ links: [], tags: [] });

  useEffect(() => {
    getUserLinks(id)
      .then((res) => {
        setResponse({
          links: res.links,
          tags: res.tags,
        });
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [id]);

  return (
    <>
      {isLoading && <UserLoading />}

      {!isLoading && response.links && (
        <DisplayLinks id={id} tags={response.tags} links={response.links} />
      )}

      {isLoading && isError && (
        <p className="text-center mt-[20px] bg-red-100 text-red-700 w-fit mx-auto px-3 py-1 rounded-[7px]">
          Something went wrong
        </p>
      )}
    </>
  );
}
