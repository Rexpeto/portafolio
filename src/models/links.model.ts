import { Meta } from ".";

export interface RedesResponse {
  data: Redes[];
  meta: Meta;
}

export interface Redes {
  id: number;
  attributes: Rede;
}

export interface Rede {
  name: string;
  icon: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export const LinksMenu = [
  { name: "Home", url: "/", icon: "RiHome7Line" },
  { name: "Projects", url: "/projects", icon: "RiBriefcaseLine" },
  { name: "About", url: "/about", icon: "RiUserLine" },
  {
    name: "Contact",
    url: "https://www.linkedin.com/in/rexpeto",
    icon: "RiContactsLine",
  },
];
