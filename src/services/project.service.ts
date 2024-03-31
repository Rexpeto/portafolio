//? returns a list of projects with a quantity limit
export const getProjectsLimit = async (quantity: number) => {
  const res = await fetch(
    `${process.env.API_URL}/projects?pagination[limit]=${quantity}&sort[1]=id:desc&locale=en&populate=*`,
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
};

//? returns a list of projects
export const getProjects = async (page: number = 1) => {
  const res = await fetch(
    `${process.env.API_URL}/projects?populate=*&locale=en&pagination[page]=${page}&pagination[pageSize]=6`,
    { next: { revalidate: 60 } },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

//? returns a single project
export const searchProject = async (slug: string) => {
  const res = await fetch(
    `${process.env.API_URL}/projects?filters[slug][$eq]=${slug}&populate=*&locale=en`,
    { next: { revalidate: 60 } },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
