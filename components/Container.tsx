import React from "react";
import { twMerge } from "tailwind-merge";

function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={twMerge("w-full bg-muted py-16 md:py-20", className)}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px8">
        {children}
      </div>
    </section>
  );
}

export default Container;
