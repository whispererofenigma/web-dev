"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Tilt from "react-vanilla-tilt";
import { CheckCircle, Info, MoveUpRight, Trash2 } from "lucide-react";

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const UiShowcaseSection = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <section id="ui-showcase" className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Intuitive UI, Powerful Functionality
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            We believe even the most complex features should be presented with a
            clean, intuitive, and responsive user interface.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
        >
          {/* Column 1: Interactive Card and Toggles */}
          <motion.div variants={itemVariants} className="space-y-8">
            <Tilt
              className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div style={{ transform: "translateZ(20px)" }}>
                <div className="flex justify-center items-center w-16 h-16 mb-6 bg-white/10 rounded-xl">
                  <MoveUpRight className="w-8 h-8 text-white/80" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Interactive Card
                </h3>
                <p className="text-white/70">
                  Hover over this card to see a subtle 3D tilt effect.
                </p>
              </div>
            </Tilt>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-4 text-white">Controls</h3>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Enable Feature</span>
                <div
                  className={`flex items-center w-14 h-8 rounded-full cursor-pointer transition-colors ${
                    isToggled ? "bg-blue-500" : "bg-white/10"
                  }`}
                  onClick={() => setIsToggled(!isToggled)}
                >
                  <motion.div
                    className="w-6 h-6 bg-white rounded-full shadow-md"
                    layout
                    transition={{ type: "spring", stiffness: 700, damping: 30 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Data Table */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm"
          >
            <h3 className="font-bold text-lg mb-4 text-white">Data Display</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-3 text-sm font-semibold text-white/80">
                      Status
                    </th>
                    <th className="p-3 text-sm font-semibold text-white/80">
                      User
                    </th>
                    <th className="p-3 text-sm font-semibold text-white/80 hidden sm:table-cell">
                      Role
                    </th>
                    <th className="p-3 text-sm font-semibold text-white/80">
                      Last Login
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { status: "Active", user: "John Doe", role: "Admin", login: "2 hours ago" },
                    { status: "Active", user: "Jane Smith", role: "Editor", login: "5 hours ago" },
                    { status: "Inactive", user: "Sam Wilson", role: "Viewer", login: "3 days ago" },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="p-3">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            row.status === "Active"
                              ? "bg-green-500/20 text-green-300"
                              : "bg-gray-500/20 text-gray-300"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="p-3 text-white">{row.user}</td>
                      <td className="p-3 text-white/70 hidden sm:table-cell">{row.role}</td>
                      <td className="p-3 text-white/70">{row.login}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          
          {/* Row 2: Buttons and Notifications */}
          <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm">
            <h3 className="font-bold text-lg mb-4 text-white">Actions</h3>
            <div className="flex flex-wrap gap-4">
                 <motion.button 
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full"
                    whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
                    whileTap={{ scale: 0.95 }}
                >
                    Primary Action
                </motion.button>
                 <motion.button 
                    className="px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-full"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                    whileTap={{ scale: 0.95 }}
                 >
                    Secondary
                </motion.button>
                 <motion.button 
                    className="p-2 text-sm font-medium text-white bg-red-600/50 rounded-full"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(220, 38, 38, 0.7)' }}
                    whileTap={{ scale: 0.95 }}
                 >
                    <Trash2 className="w-4 h-4" />
                </motion.button>
            </div>
          </motion.div>

           <motion.div variants={itemVariants} className="lg:col-span-2 p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm space-y-4">
              <h3 className="font-bold text-lg text-white">Notifications</h3>
               <div className="flex items-start p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-200">Success</p>
                    <p className="text-sm text-green-200/80">Your data has been successfully synced.</p>
                  </div>
              </div>
               <div className="flex items-start p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
                  <Info className="w-5 h-5 text-blue-300 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-200">Information</p>
                    <p className="text-sm text-blue-200/80">A new update is available. Please refresh the page.</p>
                  </div>
              </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default UiShowcaseSection;