import { Button, CardWork, Title } from "@/components/ui";

async function getData() {
  const res = await fetch(
    `${process.env.API_URL}/projects?pagination[limit]=6&sort[1]=id:desc&locale=en&populate=*`,
    {
      next: { revalidate: 60 },
    },
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const FeaturedWork = async () => {
  const { data } = await getData();

  return (
    <section className="section__container">
      <Title title="Featured Work" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-5">
        {data.map((project: any) => (
          <CardWork key={project.id} project={project.attributes} />
        ))}
      </div>
      <Button href="/projects" label="View More" type="link" />
    </section>
  );
};

export default FeaturedWork;
