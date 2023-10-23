import { GetIcon } from "@/components/ui";
import { cn } from "@/libs";
import { Creativy } from "@/models";
import Link from "next/link";

interface Props {
  creatives: Creativy;
}

const CardVentures = ({ creatives }: Props) => {
  return (
    <Link href={creatives.url} className="block max-w-xl group">
      <div
        className={cn(
          "relative flex items-center justify-center w-10 h-10 rounded-xl space-y-1 mb-1",
          creatives.color,
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
