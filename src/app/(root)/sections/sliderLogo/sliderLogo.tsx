import { GetIcon } from "@/components/ui";
import { Logos } from "@/models";

const SliderLogo = () => {
  return (
    <div className="slider">
      <div className="slider__content">
        {Logos.map((logo, index) => (
          <div className="slide slider__content-logo" key={index}>
            <GetIcon icon={logo.icon} className="text-3xl" />
          </div>
        ))}
        {Logos.map((logo, index) => (
          <div className="slide slider__content-logo" key={index}>
            <GetIcon icon={logo.icon} className="text-3xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderLogo;
