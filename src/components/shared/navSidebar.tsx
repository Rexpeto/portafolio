import { LinksMenu } from "@/models";
import Link from "next/link";
import { GetIcon } from "../ui";
import { cn } from "@/libs";
import { usePathname } from "next/navigation";

const NavSidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="nav">
      {LinksMenu.map((links) => {
        return (
          <Link
            key={links.name}
            className={cn("nav__link", {
              active: pathname === links.url,
            })}
            href={links.url}
          >
            <GetIcon icon={links.icon} className="text-xl" />
            {links.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavSidebar;
