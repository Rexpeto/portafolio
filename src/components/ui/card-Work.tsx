import Image from "next/image";
import Link from "next/link";
import TechnologyTag from "./technology-tag";
import { Project, Technologies } from "@/models";

const CardWork = ({ project }: { project: Project }) => {
  return (
    <Link href={`/projects/${project.slug}`} className="group">
      <div className="relative w-full h-52 overflow-hidden rounded-lg">
        <Image
          src={project.image.data.attributes.url}
          alt={project?.title}
          className="object-cover group-hover:scale-105 transition duration-150"
          fill
        />
      </div>
      <h3 className="font-semibold text-xl text-white my-4 group-hover:text-primary transition duration-150">
        {project?.title}
      </h3>
      {project.technologies?.data.map((technology: Technologies) => (
        <TechnologyTag key={technology.id} tecnology={technology.attributes} />
      ))}
    </Link>
  );
};

export default CardWork;
