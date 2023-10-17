import { Button, CardWork, Title } from "@/components/ui";
import { Projects } from "@/models";
const FeaturedWork = () => {
  return (
    <section className="section__container">
      <Title title="Featured Work" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-5">
        {Projects.map((project) => (
          <CardWork key={project.id} project={project} />
        ))}
      </div>
      <Button href="/projects" label="View More" type="link" />
    </section>
  );
};

export default FeaturedWork;
