"use client";

import { Button } from "./ui/button";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

const socialLinks = [
  {
    label: "github",
    icon: Github,
    url: "https://github.com/JaredFDL",
  },
  {
    label: "linkedin",
    icon: Linkedin,
    url: "www.linkedin.com/in/jared-feng",
  },
];

export const SocialLink = () => {
  return (
    <div className="flex gap-2">
      {socialLinks.map((sl) => (
        <Button key={sl.label} className="w-[40px] h-[40px]">
          <sl.icon />
        </Button>
      ))}
    </div>
  );
};
