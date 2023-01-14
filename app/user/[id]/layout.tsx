import UserHeader from "@/components/UserHeader/UserHeader";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UserHeader />
      {children}
    </>
  );
}
