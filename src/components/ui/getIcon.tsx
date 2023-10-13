import * as Ri from "react-icons/ri";

interface Props {
  icon: string;
  className?: string;
}

const GetIcon = ({ icon, className }: Props) => {
  const getIcon = (iconName: string) => {
    const iconsMap = new Map();
    iconsMap.set("Ri", Ri);

    return iconsMap.get(iconName.substring(0, 2));
  };

  const icons = getIcon(icon);
  const TheIcon = icons[icon];

  return <TheIcon className={className} />;
};

export default GetIcon;
