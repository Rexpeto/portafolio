import { Technologies } from "@/models";
import TechnologyTag from "@/components/ui/technology-tag";
import { LinkCustom } from "@/components/ui";
import Image from "next/image";
import { GoBack } from ".";

const ProjectFooter = ({
  technologies,
  githubUrl,
  previewUrl,
  image,
  title,
}: any) => {
  return (
    <>
      <div className="mb-8">
        <GoBack back="/projects" />
      </div>

      <h2 className="text-3xl text-white font-semibold mb-3">{title}</h2>
      {technologies?.data.map((technology: Technologies) => (
        <TechnologyTag key={technology.id} tecnology={technology.attributes} />
      ))}

      <div className="flex gap-2 items-center mt-4">
        {githubUrl && (
          <LinkCustom url={githubUrl} title="Repositorio" icon="RiGithubLine" />
        )}

        {previewUrl && (
          <LinkCustom
            url={previewUrl}
            title="Preview"
            icon="RiExternalLinkLine"
          />
        )}
      </div>
      <div className="relative w-full rounded-lg overflow-hidden h-96 sm:h-[500px] lg:h-[700px] mt-8">
        <Image
          className="object-cover"
          src={image.data?.attributes?.url}
          alt={title}
          fill
        />
      </div>
    </>
  );
};

export default ProjectFooter;
