import Image from "next/image";

import patternBg from "../../public/images/pattern-bg.png";

import SearchBar from "./SearchBar";
import InfoCard from "./InfoCard";
import InfoCardSkeleton from "./InfoCardSkeleton";

import type { IPInfo } from "@/types/IPInfo";
import type { HeaderProps, TransformedData } from "@/types/Components";

const Header = ({
  ipInfo,
  isLoading,
  getSearchResults,
  setSearchLoading,
}: HeaderProps) => {
  // Transform data
  const transformData = (ipInfo: IPInfo): TransformedData[] => {
    return [
      { title: "IP ADDRESS", value: ipInfo.ip || "N/A" },
      {
        title: "LOCATION",
        value: `${ipInfo.location.city || "N/A"}, ${
          ipInfo.location.region || "N/A"
        }`,
      },
      { title: "TIMEZONE", value: `UTC ${ipInfo.location.timezone || "N/A"}` },
      { title: "ISP", value: ipInfo.isp || "N/A" },
    ];
  };

  return (
    <header className="relative flex flex-col items-center h-[35%] py-4 md:h-[25%] md:py-8">
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
      <h1 className="text-2xl text-white font-medium">IP Address Tracker</h1>
      <section className="flex flex-col items-center w-[85%] mt-4 gap-4 md:mt-8 md:gap-6">
        <SearchBar
          currentIP={ipInfo?.ip ?? ""}
          getSearchResults={getSearchResults}
          setSearchLoading={setSearchLoading}
        />
        {ipInfo && !isLoading ? (
          <InfoCard transformInfo={transformData(ipInfo)} />
        ) : (
          <InfoCardSkeleton />
        )}
      </section>
    </header>
  );
};

export default Header;
