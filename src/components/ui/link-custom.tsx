import Link from "next/link";
import { GetIcon } from ".";

interface Props {
  url: string;
  title: string;
  icon: string;
}

const LinkCustom = ({ url, title, icon }: Props) => {
  return (
    <Link
      className="flex items-center gap-2 p-3 border border-gray-700/40 hover:border-gray-700/80 rounded-md group transition duration-150"
      target="_blank"
      href={url}
    >
      <GetIcon
        icon={icon}
        className="text-gray-300/50 group-hover:text-white text-xl transition duration-150"
      />
      <span className="text-gray-300/50 group-hover:text-white">{title}</span>
    </Link>
  );
};

export default LinkCustom;
