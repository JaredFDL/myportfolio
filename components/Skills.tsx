import Container from "./Container";
import StackIcon from "tech-stack-icons";

const techStacks = [
  { iconName: "js", label: "JavaScript" },
  { iconName: "reactjs", label: "React" },
  { iconName: "nextjs2", label: "Next" },
  { iconName: "typescript", label: "TypeScript" },
  { iconName: "tailwindcss", label: "TailWind" },
  { iconName: "csharp", label: "C#" },
  { iconName: "nodejs", label: "Node" },
  { iconName: "git", label: "Git" },
  { iconName: "reactquery", label: "ReactQuery" },
  { iconName: "mysql", label: "MySQL" },
  { iconName: "mongodb", label: "MongoDb" },
  { iconName: "shadcnui", label: "Shadcn/ui" },
];
function Skills() {
  return (
    <Container className="bg-muted">
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <p>The tech stacks I am good at:</p>
        </div>
        <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8">
          {techStacks.map((techStack) => {
            return (
              <div
                key={techStack.label}
                className="flex flex-col items-center gap-2 m-5"
              >
                <StackIcon
                  name={techStack.iconName}
                  className="h-[50px] w-[50px]"
                />
                <p>{techStack.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
export default Skills;
