import { cn } from "@/libs";
import Link from "next/link";

interface Props {
  label: string;
  type: "button" | "submit" | "link";
  fn?: () => void;
  className?: string;
  href?: string;
}

const Button = ({ label, type, fn, className, href }: Props) => {
  return type === "link" ? (
    <Link
      href={`${href}`}
      className={cn(
        "flex justify-center p-1 border border-gray-700/60 rounded-md hover:border-primary hover:text-white transition duration-150",
        className,
      )}
    >
      {label}
    </Link>
  ) : (
    <button
      onClick={fn}
      className={cn(
        "flex justify-center p-1 border border-gray-700/60 rounded-md hover:border-primary hover:text-white transition duration-150",
        className,
      )}
    >
      {label}
    </button>
  );
};

export default Button;
