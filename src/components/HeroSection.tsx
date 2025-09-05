const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Your Vision, Engineered.
      </h1>
      <p className="max-w-2xl text-lg md:text-xl mb-8">
        We build high-performance, scalable, and user-centric software
        solutions that drive business growth.
      </p>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          href="#portfolio"
          className="neumorphic bg-green-500 shadow-neumorphic rounded-full transition-all flex items-center justify-center font-medium h-12 px-6"
        >
          View Our Work
        </a>
        <a
          href="#contact"
          className="neumorphic bg-purple-600 shadow-neumorphic rounded-full transition-all flex items-center justify-center font-medium h-12 px-6"
        >
          Get a Free Quote
        </a>
      </div>
    </section>
  );
};

export default HeroSection;