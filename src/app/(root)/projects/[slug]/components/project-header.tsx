import { Technologies } from "@/models";
import TechnologyTag from "@/components/ui/technology-tag";
import { LinkCustom } from "@/components/ui";
import Image from "next/image";
import { GoBack } from ".";

const ProjectHeader = ({
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
      <div className="flex justify-center rounded-lg overflow-hidden mt-8">
        <Image
          className="rounded-lg"
          src={image.data?.attributes?.url}
          alt={title}
          width={900}
          height={600}
        />
      </div>
    </>
  );
};

export default ProjectHeader;
