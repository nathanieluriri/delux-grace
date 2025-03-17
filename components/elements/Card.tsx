import type { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
    // shadow hover css: hover:shadow-2xl hover:shadow-[#00000018] transition-shadow duration-300
      className={`bg-white border    border-gray-200 px-5 p-10 md:px-10 rounded-3xl ${className}`}
    >
      {children}
    </div>
  );
};
export default Card;
