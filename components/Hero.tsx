import React from "react";
import Container from "./Container";
import Image from "next/image";
import developer from "@/assets/images/developer.svg";
import { SocialLink } from "./SocialLink";

function Hero() {
  return (
    <Container id="hero">
      <div className="flex flex-col-reverse gap-8 justify-between items-center md:flex-row">
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-12 md:order-first md:items-start md:justify-center 2xl_gap-12">
          <div className="flex flex-col gap-10">
            <h2 className="text-5xl font-extrabold">Hi, I am Jared</h2>
            <p>
              I am a dedicated full stack developer with expertise in building
              dynamic, scalable applications using React, TypeScript, Node.js,
              JavaScript, C#, and .NET Core. Passionate about creating seamless
              user experiences and efficient backend solutions, I bring a
              collaborative approach to every project, ensuring high-quality
              code and effective team contributions.
            </p>
          </div>
          <div>
            <SocialLink />
          </div>
        </div>

        <div className="flex-shrink-0 w-[400px] md:w-[350px] lg:w-[500px]">
          <Image src={developer} alt="developer" priority />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
