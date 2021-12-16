import Container from "./container";
import Image from "next/image";

import AvatarPic from "../public/favicon/avatars.png";
import LinkedinPic from "../public/icons/linkedin.svg";
import InstagramPic from "../public/icons/instagram.svg";
import GithubPic from "../public/icons/github.svg";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer
      style={{
        backgroundImage: 'url("/footer-background.svg")',
      }}
      className="bg-accent-1 border-t border-accent-2"
    >
      <Container>
        <div className="py-14 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center">
            <a
              className="mx-5"
              target="_blank"
              href="https://www.linkedin.com/in/jens-mou/"
              rel="noopener"
            >
              <div className="w-10 h-10 hover:text-primary">
                <LinkedinPic />
              </div>
            </a>
            <a
              className="mx-5"
              href="https://www.instagram.com/jensmou/"
              target="_blank"
              rel="noopener"
            >
              <div className="w-10 h-10 hover:text-primary">
                <InstagramPic />
              </div>
            </a>
            <a
              className="mx-5"
              href="https://github.com/JensMou/"
              target="_blank"
              rel="noopener"
            >
              <div className="w-10 h-10 hover:text-primary">
                <GithubPic />
              </div>
            </a>
          </div>
          <div className="flex mt-8 md:mt-0">
            <div className="ml-3 w-12 h-12">
              <Image
                src={AvatarPic}
                height="100%"
                width="100%"
                alt="Avatar illustration"
              />
            </div>
            <p className="text-xl pt-3">© Jens Mouridtsen {year}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
