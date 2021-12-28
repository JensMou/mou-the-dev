import Container from "../container";
import Image from "next/image";

import AvatarPic from "../../public/favicon/avatars.png";
import LinkedinPic from "../../public/icons/linkedin.svg";
import InstagramPic from "../../public/icons/instagram.svg";
import GithubPic from "../../public/icons/github.svg";
import Link from "next/link";
import Alert from "../alert";
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
            <SomeLink href="https://www.linkedin.com/in/jens-mou/">
              <LinkedinPic />
            </SomeLink>
            <SomeLink href="https://www.instagram.com/jensmou/">
              <InstagramPic />
            </SomeLink>
            <SomeLink href="https://github.com/JensMou/">
              <GithubPic />
            </SomeLink>
          </div>
          <div className="flex mt-8 md:mt-0">
            <div className="mr-3 w-12 h-12">
              <Image
                src={AvatarPic}
                height="100%"
                width="100%"
                alt="Avatar illustration"
              />
            </div>
            <p className="text-l pt-3 font-extralight drop-shadow-2xl ">
              © Jens Mouridtsen {year}
            </p>
          </div>
        </div>
      </Container>
      <Alert />
    </footer>
  );
};

type SOMELinkImgProps = {
  href: string;
  children: React.ReactElement;
};

const SomeLink = ({ href, children }: SOMELinkImgProps) => {
  return (
    <Link href={href}>
      <a className="mx-5" target="_blank" rel="noopener">
        <div className="w-10 h-10 hover:text-primary">{children}</div>
      </a>
    </Link>
  );
};

export default Footer;
