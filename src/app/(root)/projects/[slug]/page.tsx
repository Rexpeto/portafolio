import { searchProject } from "@/services";
import { redirect } from "next/navigation";
import GoBack from "./components/goBack";
import TechnologyTag from "@/components/ui/technology-tag";
import { Technologies } from "@/models";

interface Props {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: Props) => {
  const { data } = await searchProject(params.slug);

  if (!data.length) redirect("/projects");

  const { title, body, technologies } = data[0].attributes;

  return (
    <div className="section__container">
      <div className="mb-8">
        <GoBack back="/projects" />
      </div>

      <h2 className="text-3xl text-white font-semibold mb-3">{title}</h2>
      {technologies?.data.map((technology: Technologies) => (
        <TechnologyTag key={technology.id} tecnology={technology.attributes} />
      ))}
    </div>
  );
};

export default Page;
