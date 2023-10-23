import { Images, Localizations, Meta, Technologies } from ".";

export interface ProjectResponse {
  data: ProjectData[];
  meta: Meta;
}

export interface ProjectData {
  id: number;
  attributes: Project;
}

export interface Project {
  title: string;
  body: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  githubUrl: string;
  previewUrl: any;
  image: Images;
  technologies: ProjectTechnologies;
  localizations: Localizations;
}

export interface ProjectTechnologies {
  data: Technologies[];
}
