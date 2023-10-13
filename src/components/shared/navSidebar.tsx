import { LinksMenu } from "@/models";
import Link from "next/link";
import { GetIcon } from "../ui";
import { cn } from "@/libs";

const NavSidebar = () => {
  return (
    <nav className="nav">
      {LinksMenu.map((links) => (
        <Link key={links.name} className={cn("nav__link")} href={links.url}>
          <GetIcon icon={links.icon} className="text-xl" />
          {links.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavSidebar;
