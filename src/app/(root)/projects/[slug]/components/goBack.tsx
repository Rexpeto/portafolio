"use client";

import { GetIcon } from "@/components/ui";
import { useRouter } from "next/navigation";

const GoBack = ({ back }: { back: string }) => {
  const { push } = useRouter();

  return (
    <button
      className="flex items-center gap-1 text-gray-500 justify-center group transition duration-300"
      onClick={() => push(back)}
    >
      <GetIcon
        icon="FiArrowLeft"
        className="text-md group-hover:text-primary transition duration-300"
      />
      <span className="text-lg group-hover:translate-x-1 group-hover:text-primary transition duration-300">
        Back
      </span>
    </button>
  );
};

export default GoBack;
