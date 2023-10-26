import { Images, Meta } from ".";

export interface AboutResponse {
  data: AboutContent;
  meta: Meta;
}

export interface AboutContent {
  id: number;
  attributes: About;
}

export interface About {
  title: string;
  body: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  description: string;
  image: Images;
}
