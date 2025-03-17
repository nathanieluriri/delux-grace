import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  width?:
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl"
    | "full";
  className?: string;
}

const Container: FC<ContainerProps> = ({
  children,
  width = "6xl",
  className = "",
}) => {
  const widthClass = {
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    "8xl": "max-w-8xl",
    "9xl": "max-w-9xl",
    full: "w-full",
  }[width];

  return (
    <section
      className={`${widthClass} ${
        width !== "full" ? "p-5 md:px-7" : ""
      } mx-auto ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
