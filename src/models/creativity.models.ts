import { Meta } from ".";

export interface CreativityResponse {
  data: Creativities[];
  meta: Meta;
}

export interface Creativities {
  id: number;
  attributes: Creativy;
}

export interface Creativy {
  title: string;
  description: string;
  icon: string;
  color: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}
