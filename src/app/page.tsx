"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import { fetchIPInfo } from "@/lib/fetchData";

import Header from "@/components/Header";
import Loading from "./loading";

import type { IPInfo } from "../types/IPInfo";

// Dynamically import the Map component which is only rendered on the client side
const DynamicMap = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

const Home = () => {
  // IP info state
  const [ipInfo, setIpInfo] = useState<IPInfo | null>(null);

  // Fetch IP info
  useEffect(() => {
    const getInfo = async () => {
      const data = await fetchIPInfo();
      setIpInfo(data);
    };

    getInfo();
  }, []);

  // Update state with search results
  const getSearchResults = (result: IPInfo) => setIpInfo(result);

  return (
    <main className="relative w-full h-screen">
      <Header getSearchResults={getSearchResults} ipInfo={ipInfo} />
      <section className="h-[65%] md:h-[75%]">
        {ipInfo?.location ? (
          <DynamicMap position={[ipInfo?.location.lat, ipInfo?.location.lng]} />
        ) : (
          <Loading />
        )}
      </section>
    </main>
  );
};

export default Home;
