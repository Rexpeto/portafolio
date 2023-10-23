import { RedesResponse } from "@/models";
import { LinkCustom } from ".";

const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/redes`, {
    next: { revalidate: 60 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const LinksSocial = async () => {
  const { data }: RedesResponse = await getData();

  return (
    <div className="flex gap-2 mt-8">
      {data.map((link) => (
        <LinkCustom key={link.id} attributes={link.attributes} />
      ))}
    </div>
  );
};

export default LinksSocial;
