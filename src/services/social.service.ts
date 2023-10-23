//? return list of networks of social media
export const getSocials = async () => {
  const res = await fetch(`${process.env.API_URL}/redes`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
