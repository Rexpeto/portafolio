import { GetIcon } from "@/components/ui";
import { cn } from "@/libs";
import Link from "next/link";

interface Props {
  creatives: Creatives;
}

interface Creatives {
  id: number;
  title: string;
  url: string;
  icon: string;
  description: string;
  bg: string;
}

const CardVentures = ({ creatives }: Props) => {
  return (
    <Link href={creatives.url} className="block max-w-xl group">
      <div
        className={cn(
          "relative flex items-center justify-center w-10 h-10 rounded-xl space-y-1 mb-1",
          creatives.bg,
        )}
      >
        <GetIcon icon={creatives.icon} className="text-xl text-dark" />
      </div>
      <h3 className="text-white text-xl font-semibold group-hover:text-primary transition duration-150">
        {creatives.title}
      </h3>
      <p>{creatives.description}</p>
    </Link>
  );
};

export default CardVentures;
