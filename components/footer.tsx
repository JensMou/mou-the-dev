import Container from "./container";

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
              <img
                className="w-10 h-10"
                src="/icons/linkedin.svg"
                alt="Linkedin Icon"
              />
            </a>
            <a
              className="mx-5"
              href="https://www.instagram.com/jensmou/"
              target="_blank"
              rel="noopener"
            >
              <img
                className="w-10 h-10"
                src="/icons/instagram.svg"
                alt="Github Icon"
              />
            </a>
            <a
              className="mx-5"
              href="https://github.com/JensMou/"
              target="_blank"
              rel="noopener"
            >
              <img
                className="w-10 h-10"
                src="/icons/github.svg"
                alt="Github Icon"
              />
            </a>
          </div>
          <div className="flex mt-8 md:mt-0">
            <p className="text-xl pt-3">© Jens Mouridtsen {year}</p>
            <img
              className="ml-3 w-auto h-12"
              src="/favicon/avatars.png"
              alt="Github Icon"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
