import React from "react";
import Container from "./Container";
import Project from "./Project";
import jobify from "@/assets/images/jobify.png";
import reactivities from "@/assets/images/reactivities.png";

const projects = [
  {
    name: "jobify",
    description:
      "The job tracking app helps users streamline and manage their job application process. It offers an organized way to track job details, application status, and important milestones. Users can set reminders for follow-ups, store documents, and keep notes for each position. With visual analytics, they can monitor progress and gain insights into their job search activities. This app simplifies job hunting, keeping everything in one place and enhancing productivity during the search.",
    techStack: ["Nextjs", "React", "React Query", "TypeScript"],
    link: "https://jobify-jaredfdls-projects.vercel.app/",
    image: jobify,
  },
  {
    name: "reactivities",
    description:
      "This application is a social platform where users can share their activities with others, fostering engagement and interaction. Users can post about their activities and leave comments on each other's posts, creating a community-driven experience that encourages sharing and discussion. The app is designed to enhance connectivity and provide a space for users to express themselves, engage with friends, and explore activities shared by others",
    techStack: ["react", "TypeScript", "Redux", ".Net Core", "MySQL"],
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
