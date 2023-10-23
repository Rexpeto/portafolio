import { Button, CardWork, Title } from "@/components/ui";
import { ProjectData, ProjectResponse } from "@/models";
import { getProjectsLimit } from "@/services";

const FeaturedWork = async () => {
  const { data }: ProjectResponse = await getProjectsLimit(6);

  return (
    <section className="section__container">
      <Title title="Featured Projects" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-5">
        {data.map((project: ProjectData) => (
          <CardWork key={project.id} project={project.attributes} />
        ))}
      </div>
      <Button href="/projects" label="View More" type="link" />
    </section>
  );
};

export default FeaturedWork;
