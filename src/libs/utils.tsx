import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { marked } from "marked";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const richTextReducer = (rowRichText: string) => {
  const parsedRichText = marked.parse(rowRichText);
  return (
    <article
      className="project-body"
      dangerouslySetInnerHTML={{ __html: parsedRichText }}
    />
  );
};
