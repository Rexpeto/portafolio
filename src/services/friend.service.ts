export const getFriends = async () => {
  const res = await fetch(`${process.env.API_URL}/friends?populate=*`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch friends");
  }

  return res.json();
};
