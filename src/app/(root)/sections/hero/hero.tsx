import { LinksSocial, OpenWork } from "@/components/ui";
import LinkCV from "@/components/ui/link-cv";
import { HeroResponse } from "@/models";
import { getHero } from "@/services";
import Image from "next/image";

const SectionHero = async () => {
  const {
    data: { attributes },
  }: HeroResponse = await getHero();

  return (
    <section className="section__container">
      <div className="flex items-center justify-between mb-10">
        <Image
          className="rounded-sm object-cover"
          src={attributes?.image?.data?.attributes?.url}
          alt="Profile Carlos Gallardo"
          width={80}
          height={80}
        />
        <OpenWork
          working={attributes?.working}
          noWorking={attributes?.noWorking}
          trueWorking={attributes?.trueWorking}
        />
      </div>
      <div className="max-w-2xl">
        <h1 className="text-white text-3xl mb-5">{`${attributes?.title}`}</h1>
        <p className="text-md">{attributes?.description}</p>
      </div>
      <div className="flex items-center gap-4 mt-8">
        <LinksSocial />
        <LinkCV
          url={attributes?.cvitae}
          title={attributes?.nameCV}
          icon="HiOutlineDocumentArrowDown"
        />
      </div>
    </section>
  );
};

export default SectionHero;
