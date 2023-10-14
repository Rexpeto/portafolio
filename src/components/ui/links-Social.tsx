import { LinkCustom } from ".";

interface Links {
  name: string;
  url: string;
  icon: string;
}

interface Props {
  links: Links[];
}

const LinksSocial = ({ links }: Props) => {
  return (
    <div className="flex gap-2 mt-8">
      {links.map((link) => (
        <LinkCustom key={`${link.name}`} url={`${link.url}`} icon={link.icon} />
      ))}
    </div>
  );
};

export default LinksSocial;
