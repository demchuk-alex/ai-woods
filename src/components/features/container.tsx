import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("container mx-auto px-5 md:px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
