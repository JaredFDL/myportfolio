import React from "react";
import Container from "./Container";
import Project from "./Project";
import jobify from "@/assets/images/jobify.png";
import reactivities from "@/assets/images/reactivities.png";

const projects = [
  {
    name: "jobify",
    description:
      "The job tracking app helps users streamline and manage their job application process. It offers an organized way to track job details, application status, and important milestones.",
    techStack: ["nextjs", "react", "react-query"],
    link: "https://jobify-jaredfdls-projects.vercel.app/",
    image: jobify,
  },
  {
    name: "reactivities",
    description: "",
    techStack: ["react", "TypeScript", "Redux", ".Net Core"],
    link: "",
    image: reactivities,
  },
];

function Projects() {
  return (
    <Container id="project">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-5 mb-8">
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <p>Some of the noteworthy projects I have built:</p>
          </div>
        </div>
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            image={project.image}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
          />
        ))}
      </div>
    </Container>
  );
}

export default Projects;
