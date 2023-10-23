import { GetIcon } from "@/components/ui";
import { Technologies, TechnologiesResponse } from "@/models";
import { getTecnologies } from "@/services";

const SliderLogo = async () => {
  const { data }: TechnologiesResponse = await getTecnologies();

  return (
    <div className="slider">
      <div className="slider__content">
        {data.map((logo: Technologies) => (
          <div className="slide slider__content-logo" key={logo.id}>
            <GetIcon
              icon={logo.attributes.icon}
              className={`slider__content-logo-icon ${logo.attributes.color}`}
            />
          </div>
        ))}
        {data.map((logo: Technologies) => (
          <div className="slide slider__content-logo" key={logo.id}>
            <GetIcon
              icon={logo.attributes.icon}
              className={`slider__content-logo-icon ${logo.attributes.color}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderLogo;
