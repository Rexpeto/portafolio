import Link from "next/link";
import { GetIcon } from ".";

const LinkCustom = ({ attributes: { name, icon, url } }: any) => {
  if (!icon) {
    return (
      <Link className="p-4 border border-gray-700/40 rounded-md" href={url}>
        {name}
      </Link>
    );
  }

  return (
    <Link
      className="p-3 border border-gray-700/40 hover:border-gray-700/80 rounded-md group transition duration-150"
      target="_blank"
      href={url}
      title={name}
    >
      <GetIcon
        icon={`${icon}`}
        className="text-gray-300/50 group-hover:text-white text-xl transition duration-150"
      />
    </Link>
  );
};

export default LinkCustom;
