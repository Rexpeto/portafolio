import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project | CDGP",
  description: "Proyectos de Carlos Gallardo",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
