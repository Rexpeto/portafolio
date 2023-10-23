import { EmptyMeta, Images } from ".";

export interface HeroResponse {
  data: HeroData;
  meta: EmptyMeta;
}

export interface HeroData {
  id: number;
  attributes: Hero;
}

export interface Hero {
  title: string;
  description: string;
  working: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  image: Images;
}
