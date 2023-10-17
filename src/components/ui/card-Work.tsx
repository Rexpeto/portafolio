import Image from "next/image";
import Link from "next/link";
import TecnologyTag from "./tecnology-tag";

interface Props {
  project: Project;
}

interface Project {
  id: number;
  title: string;
  image: string;
  tecnologies: Tecnology[];
}

interface Tecnology {
  name: string;
  icon: string;
  badge: string;
  color: string;
}

const CardWork = ({ project }: Props) => {
  return (
    <Link href={`/projects/${project.id}`} className="group">
      <div className="relative w-full h-52 overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          className="object-cover group-hover:scale-105 transition duration-150"
          fill
        />
      </div>
      <h3 className="font-semibold text-xl text-white my-4 group-hover:text-primary transition duration-150">
        {project.title}
      </h3>
      {project.tecnologies.map((tecnology) => (
        <TecnologyTag key={tecnology.name} tecnology={tecnology} />
      ))}
    </Link>
  );
};

export default CardWork;
