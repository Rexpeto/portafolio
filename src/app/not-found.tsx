import { Button } from "@/components/ui";
import Image from "next/image";

const NotFound = () => {
  return (
    <section className="relative flex items-center justify-start md:justify-center overflow-y-hidden h-full">
      <div className="flex flex-col items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 z-50">
        <div className="mx-auto max-w-screen-sm text-center z-50">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <Image src="/404.svg" width={200} height={200} alt="404" />

            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600">
              404
            </h1>
          </div>
          <div>
            <p className="mb-4 text-3xl tracking-tight font-bold text-white md:text-4xl">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-white/80 dark:text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.
            </p>
            <Button href="/" label="Go to Homepage" type="link" />
          </div>
        </div>
      </div>

      <div className="w-full absolute z-0 bottom-0 md:bottom-[-15rem]">
        <Image
          className="w-full z-0"
          src="/404_lines.svg"
          width={1600}
          height={400}
          alt="404"
        />
      </div>
    </section>
  );
};

export default NotFound;
