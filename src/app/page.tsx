import dynamic from "next/dynamic";

import Header from "@/components/Header";

// Dynamically import the Map component which is only rendered on the client side
const DynamicMap = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid border-opacity-50"></div>
    </div>
  ),
});

const Home = () => {
  return (
    <main className="relative w-full h-screen">
      <Header />
      <section className="h-[65%] md:h-[75%]">
        <DynamicMap />
      </section>
    </main>
  );
};

export default Home;
