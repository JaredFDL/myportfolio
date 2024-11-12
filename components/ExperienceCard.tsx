import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

function ExperienceCard({
  title,
  companyName,
  duration,
  content,
}: {
  title: string;
  companyName: string;
  duration: string;
  content: string[];
}) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-col gap-1 pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{duration}</CardDescription>
        <h4>{companyName}</h4>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 pt-5">
        <ul className="list-disc">
          {content.map((c) => (
            <li className="mt-2" key={duration}>
              {c}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
