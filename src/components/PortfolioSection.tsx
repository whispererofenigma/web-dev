import Image from "next/image";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="neumorphic bg-background shadow-neumorphic p-6 rounded-2xl">
            <Image
              src="/project1.png" // Replace with your image
              alt="Project 1"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">E-commerce Platform</h3>
            <p>A scalable platform for online retail.</p>
          </div>
          {/* Project 2 */}
          <div className="neumorphic bg-background shadow-neumorphic p-6 rounded-2xl">
            <Image
              src="/project2.png" // Replace with your image
              alt="Project 2"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">SaaS Dashboard</h3>
            <p>Data analytics and visualization for businesses.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;