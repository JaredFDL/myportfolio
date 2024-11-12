import Container from "./Container";
import { Mail, Phone } from "lucide-react";

function Contact() {
  return (
    <Container id="contact">
      <div className="flex flex-col items-center gap-5 mx-3">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-2xl font-semibold">Contact me</h2>
          <p className="max-w-[580px] text-center">
            What is next? Feel free to reach out me if you are looking for a
            developer, or simple want to connect. I am more than happy to get in
            touch with you!
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="flex items-center gap-3">
            <Mail />
            <p className="font-semibold">jared.feng1117@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone />
            <p className="font-semibold">0466666735</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
