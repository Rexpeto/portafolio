import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Link href="/" className="sidebar__link group">
        <Image src="./logo.svg" alt="Logo" width={32} height={32} />
        <div>
          <h1 className="sidebar__link-title">Carlos Gallardo</h1>
          <h3 className="sidebar__link-subtitle">Full Stack Developer</h3>
        </div>
      </Link>
    </aside>
  );
};

export default Sidebar;
