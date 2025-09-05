"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; // Import the Next.js Image component

// Define TypeScript types for our data for type safety
interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

interface UserData {
  id: number;
  name: string;
  email: string;
}

const LiveDataShowcaseSection = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [users, setUsers] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCryptoData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple,cardano&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data: CryptoData[] = await response.json();
      setCryptoData(data);
    } catch (error) {
      console.error("Failed to fetch crypto data:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users?_limit=5"
      );
      const data: UserData[] = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    // FIX: Added a space between 'const' and 'fetchAllData'
    const fetchAllData = async () => {
      setIsLoading(true);
      await Promise.all([fetchCryptoData(), fetchUsers()]);
      setIsLoading(false);
    };
    // FIX: Correctly calling the function defined above
    fetchAllData();
  }, []);

  return (
    <section id="live-data" className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Live Data, Beautifully Displayed
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          We transform raw data from any API into intuitive, real-time user
          interfaces that are both powerful and elegant.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Crypto Tracker Panel */}
          <div className="lg:col-span-2 bg-background shadow-neumorphic p-6 rounded-2xl">
            <h3 className="font-bold text-lg mb-4">Real-Time Crypto Tracker</h3>
            <div className="space-y-4">
              {isLoading ? (
                <p>Loading market data...</p>
              ) : (
                cryptoData.map((crypto) => (
                  <div
                    key={crypto.id}
                    className="flex items-center justify-between bg-background shadow-neumorphic-inset p-4 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      {/* FIX: Replaced <img> with <Image /> */}
                      <Image
                        src={crypto.image}
                        alt={crypto.name}
                        width={40}
                        height={40}
                      />
                      <div>
                        <p className="font-bold">{crypto.name}</p>
                        <p className="text-sm uppercase text-foreground/60">
                          {crypto.symbol}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-right">
                        ${crypto.current_price.toLocaleString()}
                      </p>
                      <p
                        className={`text-sm font-semibold text-right ${
                          crypto.price_change_percentage_24h >= 0
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {crypto.price_change_percentage_24h.toFixed(2)}%
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* User Directory Panel */}
          <div className="bg-background shadow-neumorphic p-6 rounded-2xl">
            <h3 className="font-bold text-lg mb-4">Active User Directory</h3>
            <div className="space-y-3">
              {isLoading ? (
                <p>Loading users...</p>
              ) : (
                users.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center gap-3 bg-background shadow-neumorphic-inset p-3 rounded-lg"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{user.name}</p>
                      <p className="text-xs text-foreground/60">
                        {user.email}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDataShowcaseSection;