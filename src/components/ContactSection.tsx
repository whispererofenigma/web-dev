const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Let&apos;s Build Together
        </h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-background shadow-neumorphic-inset focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-background shadow-neumorphic-inset focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full p-4 rounded-lg bg-background shadow-neumorphic-inset focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-background shadow-neumorphic rounded-full font-medium p-4"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;