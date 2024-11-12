"use client";
import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Link } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

function Project({
  name,
  image,
  description,
  techStack,
  link,
}: {
  name: string;
  image: StaticImageData;
  description: string;
  techStack: string[];
  link: string;
}) {
  return (
    <div className="flex flex-col md:flex-row max-w-6xl">
      <Card className="bg-muted rounded-2xl shadow-md p-0 rounded-b-none border-0 border-b-[1px] md:rounded-2xl md:border-0 md:border-r-[1px] md:rounded-r-none flex-1">
        <CardContent className="w-full h-full flex items-center justify-center p-10">
          <Image src={image} alt={name} className="rounded-2xl" />
        </CardContent>
      </Card>

      <Card className="dark:bg-zinc-700 pt-5 rounded-2xl shadow-md rounded-t-none border-0 md:rounded-2xl md:rounded-l-none flex-1">
        <CardHeader className="gap-5">
          <CardTitle className="capitalize">{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {techStack.map((t, index) => (
            <Badge key={index} variant="secondary">
              {t}
            </Badge>
          ))}
        </CardContent>
        {link ? (
          <CardFooter>
            <Button
              variant="ghost"
              className="w-[40px] h-[40px]"
              onClick={() => window.open(link, "_blank")}
            >
              <Link />
            </Button>
          </CardFooter>
        ) : (
          ""
        )}
      </Card>
    </div>
  );
}

export default Project;
