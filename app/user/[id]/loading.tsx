"use client";
import { Player } from "@lottiefiles/react-lottie-player";

export default function UserLoading() {
  return (
    <div className=" h-[90vh] flex justify-center items-center">
      <Player
        src="https://assets9.lottiefiles.com/packages/lf20_usmfx6bp.json"
        loop
        autoplay
        className="w-40 h-40"
      />
    </div>
  );
}
