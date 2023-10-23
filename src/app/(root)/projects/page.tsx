import { CardWork, Title } from "@/components/ui";
import { ProjectData } from "@/models";
import { getProjects } from "@/services";

const Page = async () => {
  const { data } = await getProjects();
  return (
    <div className="section__container">
      <Title title="Projects" main={true} />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-5 pb-6">
        {data.map((project: ProjectData) => (
          <CardWork key={project.id} project={project.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Page;
