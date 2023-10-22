import { Title } from "@/components/ui";
import { CardCreativity } from "./components";

const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/creativities?locale=en`, {
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

const Creativity = async () => {
  const { data } = await getData();

  return (
    <section className="section__container border-y border-gray-700/40">
      <Title title="Creativity" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-4">
        {data.map((creativity: any) => (
          <CardCreativity
            key={creativity.id}
            creatives={creativity.attributes}
          />
        ))}
      </div>
    </section>
  );
};

export default Creativity;
