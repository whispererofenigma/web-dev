"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { TrendingUp, TrendingDown, Wifi, WifiOff } from "lucide-react";

// --- TypeScript Interfaces ---
interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

// Type for the incoming user data from the API
interface RawUserData {
    id: number;
    name: string;
    email: string;
}

interface UserData extends RawUserData {
  status: "Online" | "Offline";
}

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
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// --- Skeleton Components ---
const CryptoSkeleton = () => (
  <div className="flex items-center justify-between p-4">
    <div className="flex items-center gap-4">
      <Skeleton circle width={40} height={40} />
      <div>
        <Skeleton width={100} />
        <Skeleton width={40} height={10} />
      </div>
    </div>
    <div>
      <Skeleton width={80} />
      <Skeleton width={50} height={10} />
    </div>
  </div>
);

const UserSkeleton = () => (
  <div className="flex items-center gap-3 p-3">
    <Skeleton circle width={40} height={40} />
    <div>
      <Skeleton width={120} />
      <Skeleton width={150} height={10} />
    </div>
  </div>
);

const LiveDataShowcaseSection = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [users, setUsers] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      setIsLoading(true);
      try {
        const [cryptoRes, usersRes] = await Promise.all([
          fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple,cardano&order=market_cap_desc&per_page=100&page=1&sparkline=false"
          ),
          fetch("https://jsonplaceholder.typicode.com/users?_limit=5"),
        ]);

        const cryptoJson: CryptoData[] = await cryptoRes.json();
        const usersJson: RawUserData[] = await usersRes.json();

        // Add a random status to each user
        const usersWithStatus: UserData[] = usersJson.map((user) => ({
          ...user,
          status: Math.random() > 0.5 ? "Online" : "Offline",
        }));

        setCryptoData(cryptoJson);
        setUsers(usersWithStatus);
      } catch (error) {
        console.error("Failed to fetch live data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  return (
    <section id="live-data" className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Live Data Integration
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            We transform raw data from any API into intuitive, real-time user
            interfaces that are both powerful and elegant.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Crypto Tracker Panel */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-3 bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 backdrop-blur-sm"
          >
            <h3 className="font-bold text-lg mb-4 text-white">
              Real-Time Crypto Tracker
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={!isLoading ? "visible" : "hidden"}
              className="space-y-3"
            >
              {isLoading
                ? Array.from({ length: 4 }).map((_, i) => <CryptoSkeleton key={i} />)
                : cryptoData.map((crypto) => (
                    <motion.div
                      key={crypto.id}
                      variants={itemVariants}
                      className="flex items-center justify-between bg-white/5 p-4 rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          src={crypto.image}
                          alt={crypto.name}
                          width={40}
                          height={40}
                        />
                        <div>
                          <p className="font-bold text-white">{crypto.name}</p>
                          <p className="text-sm uppercase text-white/60">
                            {crypto.symbol}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-white">
                          ${crypto.current_price.toLocaleString()}
                        </p>
                        <p
                          className={`flex items-center justify-end text-sm font-semibold ${
                            crypto.price_change_percentage_24h >= 0
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {crypto.price_change_percentage_24h >= 0 ? (
                            <TrendingUp className="w-4 h-4 mr-1" />
                          ) : (
                            <TrendingDown className="w-4 h-4 mr-1" />
                          )}
                          {crypto.price_change_percentage_24h.toFixed(2)}%
                        </p>
                      </div>
                    </motion.div>
                  ))}
            </motion.div>
          </motion.div>

          {/* User Directory Panel */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 backdrop-blur-sm"
          >
            <h3 className="font-bold text-lg mb-4 text-white">
              Active User Directory
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={!isLoading ? "visible" : "hidden"}
              className="space-y-3"
            >
              {isLoading
                ? Array.from({ length: 5 }).map((_, i) => <UserSkeleton key={i} />)
                : users.map((user) => (
                    <motion.div
                      key={user.id}
                      variants={itemVariants}
                      className="flex items-center gap-3 bg-white/5 p-3 rounded-lg"
                    >
                      <Image
                        src={`https://ui-avatars.com/api/?name=${user.name.replace(
                          " ",
                          "+"
                        )}&background=random`}
                        alt={user.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex-grow">
                        <p className="font-semibold text-sm text-white">{user.name}</p>
                        <p className="text-xs text-white/60">{user.email}</p>
                      </div>
                      <div
                        className={`flex items-center text-xs px-2 py-1 rounded-full ${
                          user.status === "Online"
                            ? "bg-green-500/20 text-green-300"
                            : "bg-gray-500/20 text-gray-300"
                        }`}
                      >
                        {user.status === "Online" ? (
                          <Wifi className="w-3 h-3 mr-1" />
                        ) : (
                          <WifiOff className="w-3 h-3 mr-1" />
                        )}
                        {user.status}
                      </div>
                    </motion.div>
                  ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveDataShowcaseSection;