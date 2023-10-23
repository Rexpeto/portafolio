import { cn } from "@/libs";

interface Props {
  title: string;
  main?: boolean;
}

const Title = ({ title, main }: Props) => {
  return <h1 className={cn("title", main ? "mt-0 mb-6" : "my-6")}>{title}</h1>;
};

export default Title;
