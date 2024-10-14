import Image from "next/image";

import arrowIcon from "../../public/images/icon-arrow.svg";

const SearchBar = () => {
  return (
    <form action="" className="flex flex-row w-full md:max-w-[600px]">
      <input
        type="search"
        placeholder="Search for any IP address or domain"
        className="p-4 rounded-l-2xl w-[85%]"
      />
      <button
        type="submit"
        className="flex items-center justify-center w-[15%] rounded-r-2xl bg-black hover:bg-veryDarkGray"
      >
        <Image src={arrowIcon} alt="Arrow icon" />
      </button>
    </form>
  );
};

export default SearchBar;
