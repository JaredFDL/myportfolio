import Link from "next/link";
import { ModeToggle } from "./ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { AlignLeft } from "lucide-react";

const links = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#project" },
  { label: "Contact", href: "#contact" },
];
function NavBar() {
  return (
    <header className="w-full bg-muted sticky top-0">
      <div className="mx-auto flex justify-between py-2 px-10 items-center  max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl font-extrabold">{`<JF />`}</h1>
        </Link>
        <div className="flex items-center gap-1 md:gap-10">
          <div className="hidden md:block">
            <ul className="flex gap-10 items-center">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-medium hover:text-gray-500 active:text-zinc-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <AlignLeft />

                <span className="sr-only">Toggle links</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="md:hidden">
              {links.map((link) => (
                <DropdownMenuItem asChild key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
