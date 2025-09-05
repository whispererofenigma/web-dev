const ServiceCard = ({ icon, title, children }: any) => (
  <div className="neumorphic bg-background shadow-neumorphic p-8 text-center rounded-2xl">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p>{children}</p>
  </div>
);

const ServicesSection = () => {
  return (
    <section id="services" className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={
              <svg /* SVG for Web Dev */
                className="w-12 h-12 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
            }
            title="Web Development"
          >
            Crafting responsive and performant web applications with modern
            technologies.
          </ServiceCard>
          <ServiceCard
            icon={
              <svg /* SVG for Mobile Apps */
                className="w-12 h-12 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                ></path>
              </svg>
            }
            title="Mobile Apps"
          >
            Designing and developing intuitive mobile experiences for iOS and
            Android.
          </ServiceCard>
          <ServiceCard
            icon={
              <svg /* SVG for UI/UX */
                className="w-12 h-12 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
            }
            title="UI/UX Design"
          >
            Creating user-centric and visually appealing interfaces that delight
            your users.
          </ServiceCard>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;