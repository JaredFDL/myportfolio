import { Copyright } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full mt-3 mb-1 mx-auto">
      <p className="flex flex-row justify-center text-center">
        <Copyright className="w-[18px] h-[18px] mr-1" />
        {new Date().getFullYear()} | Designed and coded by Jared Feng with 💗
      </p>
    </footer>
  );
}

export default Footer;
