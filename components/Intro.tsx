const Intro = ({ title }: { title: string }) => {
  return (
    <section className="flex-col md:flex-row flex md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="whitespace-nowrap text-center md:text-left text-7xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {title}
      </h1>
    </section>
  );
};

export default Intro;
