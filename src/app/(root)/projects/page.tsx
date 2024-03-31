import { TransitionSection } from "@/components/shared";
import { Title } from "@/components/ui";
import { getProjects } from "@/services";
import GridWorks from "./components/gridWorks";

const Page = async () => {
  const { data, meta } = await getProjects(1);

  return (
    <TransitionSection>
      <Title title="Projects" main={true} />
      <GridWorks data={data} meta={meta} />
    </TransitionSection>
  );
};

export default Page;
