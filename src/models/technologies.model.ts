import { Meta } from ".";

export interface TechnologiesResponse {
  data: Technologies[];
  meta: Meta;
}

export interface Technologies {
  id: number;
  attributes: Technology;
}

export interface Technology {
  name: string;
  icon: string;
  badge: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
