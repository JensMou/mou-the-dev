import Container from "../Container";
import LinkedinPic from "../../public/icons/linkedin.svg";
import InstagramPic from "../../public/icons/instagram.svg";
import GithubPic from "../../public/icons/github.svg";
import TwitterPic from "../../public/icons/twitter.svg";

import Link from "next/link";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="footer-background bg-accent-1">
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
            <SomeLink href="https://twitter.com/JensMou">
              <TwitterPic />
            </SomeLink>
          </div>
          <div className="flex mt-8 md:mt-0">
            <p className="text-text dark:text-white text-l font-medium drop-shadow-2xl ">
              © Jens Mouridtsen {year}
            </p>
          </div>
        </div>
      </Container>
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
        <div className="w-10 h-10 text-text hover:text-primary dark:text-white dark:hover:text-primary">
          {children}
        </div>
      </a>
    </Link>
  );
};

export default Footer;
