import { GetIcon } from ".";

interface Props {
  tecnology: Tecnology;
}

interface Tecnology {
  name: string;
  icon: string;
  badge: string;
  color: string;
}

const TechnologyTag = ({ tecnology }: Props) => {
  return (
    <span
      className={`${tecnology.badge} inline-flex gap-2 items-center text-white text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-md`}
    >
      <GetIcon icon={tecnology.icon} />
      {tecnology.name}
    </span>
  );
};

export default TechnologyTag;
