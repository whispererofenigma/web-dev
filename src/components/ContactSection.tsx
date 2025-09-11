"use client";

import { motion } from "framer-motion";
import { Send, Github, Linkedin, Twitter } from "lucide-react";
import toast from "react-hot-toast";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here.
    // For this demo, we'll just show a success toast.
    toast.success("Message sent! We'll be in touch soon.");
  };

  return (
    <section id="contact" className="w-full py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Let&apos;s Build Together
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? Drop us a line.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto p-8 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Get in Touch
              </h3>
              <p className="text-white/70 mb-6">
                We&apos;re always open to discussing new projects, creative ideas, or
                opportunities to be part of something great.
              </p>
              <div className="space-y-4 text-white/80">
                <p>Email: contact@enigma.dev</p>
                <p>Phone: (123) 456-7890</p>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-white/70 hover:text-white"><Github /></a>
                <a href="#" className="text-white/70 hover:text-white"><Linkedin /></a>
                <a href="#" className="text-white/70 hover:text-white"><Twitter /></a>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-black/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-black/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
              <textarea
                placeholder="Your Message"
                required
                rows={5}
                className="w-full p-3 rounded-lg bg-black/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              ></textarea>
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white rounded-full font-medium p-3"
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;