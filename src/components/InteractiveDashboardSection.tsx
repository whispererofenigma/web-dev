"use client";

import { useState } from "react";

// Mock Chart Component - In a real app, this would use a library like Chart.js or D3
const MockBarChart = ({ data }: { data: number[] }) => (
  <div className="w-full h-64 flex items-end justify-around p-4 bg-background shadow-neumorphic-inset rounded-lg">
    {data.map((value, index) => (
      <div
        key={index}
        className="w-8 bg-primary shadow-neumorphic rounded-t-md transition-all duration-300"
        style={{ height: `${value}%` }}
      ></div>
    ))}
  </div>
);

const InteractiveDashboardSection = () => {
  const [activeTab, setActiveTab] = useState("Sales");
  const [chartData, setChartData] = useState([45, 60, 75, 50, 85, 65]);

  const randomizeData = () => {
    const newData = Array.from({ length: 6 }, () => Math.floor(Math.random() * 80) + 20);
    setChartData(newData);
  };

  const tabs = ["Sales", "Users", "Performance"];

  return (
    <section id="dashboard" className="w-full py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          From Complex Data to Clear Insights
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          We specialize in turning complex datasets into beautiful, interactive
          dashboards that are a joy to use.
        </p>

        {/* Dashboard Panel */}
        <div className="bg-background shadow-neumorphic p-6 md:p-8 rounded-2xl">
          {/* Tabs */}
          <div className="flex items-center border-b-2 border-foreground/10 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground/60"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-4">{activeTab} Overview</h3>
              <MockBarChart data={chartData} />
              <button
                onClick={randomizeData}
                className="mt-4 bg-background shadow-neumorphic rounded-full text-sm font-medium px-5 py-2.5"
              >
                Simulate Live Data
              </button>
            </div>
            <div className="space-y-6">
              <div className="bg-background shadow-neumorphic p-6 rounded-2xl">
                <h4 className="font-bold mb-2">Active Users</h4>
                <p className="text-4xl font-light">1,234</p>
              </div>
              <div className="bg-background shadow-neumorphic p-6 rounded-2xl">
                <h4 className="font-bold mb-2">Server Load</h4>
                <p className="text-4xl font-light">34%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDashboardSection;