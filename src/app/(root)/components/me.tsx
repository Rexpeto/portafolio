import LinksSocial from "@/components/ui/links-Social";
import { LinkSocials } from "@/models";
import Image from "next/image";

const Me = () => {
  return (
    <section>
      <div className="relative h-20 w-20 mb-10">
        <Image
          className="rounded-sm object-cover"
          src="/profile.jpg"
          alt="Profile Carlos Gallardo"
          fill
        />
      </div>
      <div className="max-w-2xl">
        <h1 className="text-white text-3xl mb-5">{`I'm Carlos Gallardo - I'm a Full Stack Developer & Clean Arquitect`}</h1>
        <p className="text-md">
          With more than 5 years of experience in web development, Currently
          learning to walk in Microservices without falling on my butt. Open to
          collaborating on interesting and innovative projects
        </p>
      </div>
      <LinksSocial links={LinkSocials} />
    </section>
  );
};

export default Me;
