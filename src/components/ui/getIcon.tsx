import * as Ri from "react-icons/ri";
import * as Si from "react-icons/si";
import * as Tb from "react-icons/tb";
import * as Ai from "react-icons/ai";

interface Props {
  icon: string;
  className?: string;
}

const GetIcon = ({ icon, className }: Props) => {
  const getIcon = (iconName: string) => {
    const iconsMap = new Map();
    iconsMap.set("Ri", Ri);
    iconsMap.set("Si", Si);
    iconsMap.set("Tb", Tb);
    iconsMap.set("Ai", Ai);

    return iconsMap.get(iconName.substring(0, 2));
  };

  const icons = getIcon(icon);
  const TheIcon = icons[icon];

  return <TheIcon className={className} />;
};

export default GetIcon;
