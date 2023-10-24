import { RedesResponse } from "@/models";
import { LinkCustom } from ".";
import { getSocials } from "@/services";

const LinksSocial = async () => {
  const { data }: RedesResponse = await getSocials();

  return (
    <div className="flex items-center gap-2">
      {data.map((link) => (
        <LinkCustom key={link.id} attributes={link.attributes} />
      ))}
    </div>
  );
};

export default LinksSocial;
