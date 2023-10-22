import { OpenWork } from "@/components/ui";
import LinksSocial from "@/components/ui/links-Social";
import { LinkSocials } from "@/models";
import Image from "next/image";

async function getData() {
  const res = await fetch(`${process.env.API_URL}/hero?populate=*&locale=en`, {
    next: { revalidate: 60 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const SectionHero = async () => {
  const {
    data: { attributes },
  } = await getData();

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
        <OpenWork working={attributes?.working} />
      </div>
      <div className="max-w-2xl">
        <h1 className="text-white text-3xl mb-5">{`${attributes?.title}`}</h1>
        <p className="text-md">{attributes?.description}</p>
      </div>
      <LinksSocial links={LinkSocials} />
    </section>
  );
};

export default SectionHero;
