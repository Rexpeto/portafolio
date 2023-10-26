export const getAbout = async () => {
  const res = await fetch(
    `${process.env.API_URL}/about?locale=en&populate=image`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch creatives");
  }

  return res.json();
};
