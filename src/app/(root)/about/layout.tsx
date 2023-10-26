import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | CDGP",
  description: "Acerca de Carlos Gallardo",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="section__container lg:px-16">{children}</div>;
};

export default Layout;
