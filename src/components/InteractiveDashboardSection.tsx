"use client";

import { useState, useEffect } from "react"; // Import useEffect
import { motion, AnimatePresence } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { BarChart, Users, Activity } from "lucide-react";

// --- Mock Data Types ---
type DataPoint = {
  name: string;
  sales: number;
  users: number;
  perf: number;
};

// --- Custom Tooltip Prop Types ---
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
  }>;
  label?: string;
}

// --- Mock Data ---
const generateData = (): DataPoint[] => [
  { name: "Jan", sales: Math.floor(Math.random() * 2000) + 1000, users: Math.floor(Math.random() * 300) + 200, perf: Math.random() },
  { name: "Feb", sales: Math.floor(Math.random() * 2000) + 1500, users: Math.floor(Math.random() * 300) + 250, perf: Math.random() },
  { name: "Mar", sales: Math.floor(Math.random() * 2000) + 2000, users: Math.floor(Math.random() * 300) + 300, perf: Math.random() },
  { name: "Apr", sales: Math.floor(Math.random() * 2000) + 1800, users: Math.floor(Math.random() * 300) + 350, perf: Math.random() },
  { name: "May", sales: Math.floor(Math.random() * 2000) + 2500, users: Math.floor(Math.random() * 300) + 400, perf: Math.random() },
  { name: "Jun", sales: Math.floor(Math.random() * 2000) + 3000, users: Math.floor(Math.random() * 300) + 450, perf: Math.random() },
];

const tabs = [
    { id: 'sales', label: 'Sales', icon: BarChart, dataKey: 'sales', unit: '$' },
    { id: 'users', label: 'Users', icon: Users, dataKey: 'users', unit: '' },
    { id: 'performance', label: 'Performance', icon: Activity, dataKey: 'perf', unit: '%' }
] as const;

const InteractiveDashboardSection = () => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>(tabs[0]);
  // Initialize with an empty array to ensure server and client match initially
  const [chartData, setChartData] = useState<DataPoint[]>([]);

  // Generate data only on the client after the component mounts
  useEffect(() => {
    setChartData(generateData());
  }, []);


  const randomizeData = () => {
    setChartData(generateData());
  };

  // Add a guard to prevent division by zero
  const totalValue = chartData.reduce((acc, item) => acc + item[activeTab.dataKey], 0);
  const averageValue = chartData.length > 0 ? totalValue / chartData.length : 0;

  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-4 bg-black/50 border border-white/20 rounded-lg backdrop-blur-sm">
          <p className="label text-white">{`${label}`}</p>
          <p className="intro text-white/80">
            {`${activeTab.label}: ${activeTab.unit}${
              activeTab.id === 'performance' 
                ? ((payload[0].value ?? 0) * 100).toFixed(2) 
                : (payload[0].value ?? 0).toLocaleString()
            }`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="dashboard" className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            From Complex Data to Clear Insights
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            We specialize in turning complex datasets into beautiful, interactive
            dashboards that are a joy to use.
          </p>
        </motion.div>

        <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/5 border border-white/10 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg backdrop-blur-sm"
        >
          {/* Tabs */}
          <div className="flex items-center border-b border-white/10 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`relative px-3 py-2.5 sm:px-4 text-sm sm:text-base font-medium transition-colors ${
                  activeTab.id === tab.id ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2">
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                </span>
                {activeTab.id === tab.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                    layoutId="underline"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-4 text-white">{activeTab.label} Overview</h3>
              <div className="w-full h-80">
                {/* Render the chart only when data is available */}
                {chartData.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                      <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                      <XAxis dataKey="name" tick={{ fill: 'rgba(255, 255, 255, 0.7)' }} />
                      <YAxis tick={{ fill: 'rgba(255, 255, 255, 0.7)' }} unit={activeTab.id !== 'performance' ? activeTab.unit : ''} />
                      <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(136, 132, 216, 0.2)' }} />
                      <Area type="monotone" dataKey={activeTab.dataKey} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    </AreaChart>
                  </ResponsiveContainer>
                ) : (
                  // You can show a loading skeleton here if you prefer
                  <div className="flex items-center justify-center h-full text-white/50">Loading Chart...</div>
                )}
              </div>
            </div>
            <div className="space-y-6">
              <motion.div 
                className="bg-white/5 p-6 rounded-xl"
                initial={{ opacity: 0, x:20 }}
                animate={{ opacity: 1, x:0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                >
                <h4 className="font-bold mb-2 text-white/80">Monthly Average</h4>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={activeTab.id}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="text-4xl font-light text-white"
                    >
                     {activeTab.unit}{activeTab.id === 'performance' ? (averageValue * 100).toFixed(1) : Math.round(averageValue).toLocaleString()}
                    </motion.p>
                </AnimatePresence>
              </motion.div>
              <motion.div 
                className="bg-white/5 p-6 rounded-xl"
                initial={{ opacity: 0, x:20 }}
                animate={{ opacity: 1, x:0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h4 className="font-bold mb-2 text-white/80">Total</h4>
                 <AnimatePresence mode="wait">
                    <motion.p
                        key={activeTab.id + 'total'}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="text-4xl font-light text-white"
                    >
                        {activeTab.unit}{activeTab.id === 'performance' ? (totalValue * 100 / chartData.length).toFixed(1) : Math.round(totalValue).toLocaleString()}
                    </motion.p>
                </AnimatePresence>
              </motion.div>
               <motion.button
                onClick={randomizeData}
                className="w-full bg-white/10 border border-white/20 rounded-full text-sm font-medium px-5 py-2.5 text-white"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                Simulate Live Data
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveDashboardSection;