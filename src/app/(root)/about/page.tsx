import { Title } from "@/components/ui";
import { richTextReducer } from "@/libs";
import { AboutResponse } from "@/models";
import { getAbout } from "@/services";
import Image from "next/image";
import AboutContent from "./components/Transition-image";
import FriendSection from "../sections/friends/friendSection";

const Page = async () => {
  const { data }: AboutResponse = await getAbout();

  const { title, body, image, description } = data.attributes;
  return (
    <>
      <Title title={title} main={true} />
      <p className="text-white mb-6">{description}</p>
      <AboutContent>
        <Image
          src={image.data.attributes.url}
          alt="Phote Carlos Gallardo"
          className="object-cover rounded-xl"
          fill
        />
      </AboutContent>
      {body && richTextReducer(body)}

      <FriendSection />
    </>
  );
};

export default Page;
