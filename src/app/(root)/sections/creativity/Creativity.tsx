import { Title } from "@/components/ui";
import { CardCreativity } from "./components";
import { CreativyData } from "@/models";

const Ventures = () => {
  return (
    <section className="section__container border-y border-gray-700/40">
      <Title title="Creativity" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-4">
        {CreativyData.map((creativity) => (
          <CardCreativity key={creativity.id} creatives={creativity} />
        ))}
      </div>
    </section>
  );
};

export default Ventures;
