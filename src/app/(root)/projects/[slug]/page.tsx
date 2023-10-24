import { searchProject } from "@/services";
import { redirect } from "next/navigation";
import { richTextReducer } from "@/libs";
import { ProjectFooter } from "./components";

interface Props {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: Props) => {
  const { data } = await searchProject(params.slug);

  if (!data.length) redirect("/projects");

  const { title, body, technologies, githubUrl, previewUrl, image } =
    data[0].attributes;

  return (
    <div className="section__container">
      <ProjectFooter
        title={title}
        technologies={technologies}
        githubUrl={githubUrl}
        previewUrl={previewUrl}
        image={image}
      />
      {richTextReducer(body)}
    </div>
  );
};

export default Page;
