//? return list of creatives
export const getCreatives = async () => {
  const res = await fetch(`${process.env.API_URL}/creativities?locale=en`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch creatives");
  }

  return res.json();
};
