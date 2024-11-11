import React from "react";
import { twMerge } from "tailwind-merge";

function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={twMerge(
        "w-full py-16 mx-auto flex max-w-7xl flex-col gap-6 px-8",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export default Container;
