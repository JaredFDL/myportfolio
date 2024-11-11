import Image from "next/image";
import developer from "@/assets/images/developer.svg";
import React from "react";
import { Link } from "lucide-react";
import { Button } from "./ui/button";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 mt-20 grid md:grid-cols-[1fr,400px] items-center">
      <div>
        <h1 className="capitalize text-4xl md:text-7xl font-bold">
          Hi, I am Jared
        </h1>
        <p className="leading-loose max-w-md md:max-w-lg mt-4">
          The job tracking app helps users streamline and manage their job
          application process. It offers an organized way to track job details,
          application status, and important milestones. Users can set reminders
          for follow-ups, store documents, and keep notes for each position.
          With visual analytics, they can monitor progress and gain insights
          into their job search activities. This app simplifies job hunting,
          keeping everything in one place and enhancing productivity during the
          search.
        </p>
        <Button asChild className="mt-4">
          <Link href="/">Get Started</Link>
        </Button>
      </div>
      <Image
        src={developer}
        alt="developer"
        width={450}
        className="hidden md:block"
      />
    </section>
  );
}

export default Hero;
