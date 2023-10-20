import { GetIcon } from "@/components/ui";

async function getData() {
  const res = await fetch(`${process.env.API_URL}/technologies`, {
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

const SliderLogo = async () => {
  const { data } = await getData();

  return (
    <div className="slider">
      <div className="slider__content">
        {data.map((logo: any) => (
          <div className="slide slider__content-logo" key={logo.id}>
            <GetIcon
              icon={logo.attributes.icon}
              className={`slider__content-logo-icon ${logo.attributes.color}`}
            />
          </div>
        ))}
        {data.map((logo: any) => (
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
