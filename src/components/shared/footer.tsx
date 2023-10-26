import Link from "next/link";
import { GetIcon } from "../ui";

const Footer = () => {
  return (
    <footer className="border-t border-gray-700/40 mt-auto py-3">
      <div className="container flex justify-center">
        <span className="text-muted flex items-center gap-2">
          Realizado con
          <GetIcon
            icon="AiFillHeart"
            className="text-red-600 animate-heartBeat"
          />
          por
          <Link
            className="hover:text-white transition duration-150"
            href="https://github.com/rexpeto"
            target="_blank"
          >
            Carlos Gallardo
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
