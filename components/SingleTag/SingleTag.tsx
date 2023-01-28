import { MouseEventHandler } from "react";

export default function SingleTag({
  onClick,
  isActive,
  tag,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
  tag: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-tagBg text-tagText font-medium px-[10px] py-[1px] m-2 rounded-[7px] ${
        isActive && "border-[1px] border-yellow-500"
      }`}
    >
      #{tag}
    </button>
  );
}
