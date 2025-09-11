"use client";

import { motion, Variants } from "framer-motion";
import { CodeXml, Smartphone, Brush, CloudCog } from "lucide-react";
import React from "react";

const services = [
  {
    icon: <CodeXml className="w-10 h-10 text-white/80" />,
    title: "Web Development",
    description:
      "Crafting high-performance, responsive web applications with modern technologies like React, Next.js, and Node.js. We build for scale and speed.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-white/80" />,
    title: "Mobile Apps",
    description:
      "Designing and developing intuitive mobile experiences for iOS and Android. We create native and cross-platform apps that your users will love.",
  },
  {
    icon: <Brush className="w-10 h-10 text-white/80" />,
    title: "UI/UX Design",
    description:
      "Creating user-centric and visually stunning interfaces. Our design process focuses on usability, accessibility, and creating a delightful user journey.",
  },
  {
    icon: <CloudCog className="w-10 h-10 text-white/80" />,
    title: "Cloud & DevOps",
    description:
      "Automating infrastructure and deployment pipelines on AWS, Google Cloud, and Vercel. We ensure your applications are scalable, reliable, and secure.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ServiceCard = ({ icon, title, description }: (typeof services)[0]) => (
  <motion.div
    variants={cardVariants}
    className="relative p-8 rounded-2xl bg-white/5 border border-white/10 shadow-lg group overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute -top-16 -right-16 w-48 h-48 bg-purple-600/20 rounded-full filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <div className="relative z-10">
      <div className="flex justify-center items-center w-16 h-16 mb-6 bg-white/10 rounded-xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  </motion.div>
);

const ServicesSection = () => {
  return (
    <section id="services" className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Expertise</h2>
          <p className="max-w-3xl mx-auto text-lg text-white/70">
            We provide a complete suite of services to bring your digital
            products to life, from initial concept to final deployment and
            beyond.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;