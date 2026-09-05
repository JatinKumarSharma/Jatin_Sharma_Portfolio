import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1520px] px-6 md:px-10 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;