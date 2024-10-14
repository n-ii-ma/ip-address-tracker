import Image from "next/image";

import patternBg from "../../public/images/pattern-bg.png";

import SearchBar from "./SearchBar";
import InfoCard from "./InfoCard";

const Header = () => {
  return (
    <header className="relative flex flex-col items-center h-[35%] py-8 md:h-[25%]">
      {/* Background */}
      <Image
        src={patternBg}
        alt="Patterend header background"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      {/* Title */}
      <h1 className="text-2xl text-white font-medium">IP Address Tracker</h1>

      {/* Search and Result */}
      <section className="flex flex-col items-center w-[85%] mt-8 gap-6">
        <SearchBar />
        <InfoCard />
      </section>
    </header>
  );
};

export default Header;
