import { Title } from "@/components/ui";
import { CardCreativity } from "./components";
import { Creativities } from "@/models";
import { getCreatives } from "@/services";

const Creativity = async () => {
  const { data } = await getCreatives();

  return (
    <section className="section__container border-y border-gray-700/40">
      <Title title="Creativity" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-4">
        {data.map((creativity: Creativities) => (
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
