import React from "react";
import { twMerge } from "tailwind-merge";

function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={twMerge("w-full py-16", className)} {...props}>
      <div className="mx-auto flex flex-col items-center w-full max-w-7xl">
        {children}
      </div>
    </section>
  );
}

export default Container;
