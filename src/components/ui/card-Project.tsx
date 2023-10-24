import { Project } from "@/models";
import Image from "next/image";
import Link from "next/link";
import TechnologyTag from "./technology-tag";

const CardProject = ({ title, image, technologies, slug }: Project) => {
  return (
    <Link
      href={`/project/${slug}`}
      className="flex flex-col md:flex-row md:items-center gap-5"
    >
      <div className="relative w-56 h-40 rounded-xl mb-5 overflow-hidden">
        <Image
          src={image.data.attributes.url}
          alt={title}
          fill
          className="object-cover rounded-xl group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-white text-2xl group-hover:text-primary transition-all duration-300">
          {title}
        </h3>
        {technologies.data.map((technology) => (
          <TechnologyTag
            key={technology.id}
            tecnology={technology.attributes}
          />
        ))}
      </div>
    </Link>
  );
};

export default CardProject;
