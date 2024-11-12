import Container from "@/components/Container";
import React, { version } from "react";
import ExperienceCard from "./ExperienceCard";

const experience = [
  {
    title: "Software Engineer",
    duration: "Apr 2024 - Aug 2024",
    companyName: "Frethan Technology",
    content: [
      "Developed a single-page application (SPA) using React and TypeScript, collaborating closely with designers.",
      "Created and maintained RESTful APIs using C# and .Net Core.",
      "Enhanced code reliability by adding unit tests for React components with Jest.",
      "Leveraged .Net Entity Framework Core for efficient MySQL database management and CRUD operations.",
      "Employed Azure DevOps CI/CD pipelines for streamlined integration, testing, and deployment within agile development.",
      "Managed version control and code collaboration with Git.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    duration: "Oct 2023 - Mar 2024",
    companyName: "Securemation Consulting",
    content: [
      "Developed responsive single-page applications (SPAs) using React and Redux, styled with styled-components.",
      "Built and maintained RESTful APIs with Node.js and Express.js.",
      "Integrated MongoDB for backend storage, handling CRUD operations with Mongoose.",
      "Custimised and styled React components with Material-UI (MUI) libraries.",
      "Implemented Behaviour-Driven Development (BDD) test automation using Selenium and Cucumber.",
      "Leveraged Git for version control and Figma for UI design and optimisation.",
    ],
  },
];

function Experience() {
  return (
    <Container id="experience">
      <div className="flex flex-col items-center gap-5 mb-8">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>
      </div>
      <div className="px-10 flex flex-col justify-center items-center gap-10 max-w-4xl">
        {experience.map((e) => (
          <ExperienceCard
            key={e.duration}
            title={e.title}
            companyName={e.companyName}
            duration={e.duration}
            content={e.content}
          />
        ))}
      </div>
    </Container>
  );
}

export default Experience;
