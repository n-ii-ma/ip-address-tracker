"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

import arrowIcon from "../../public/icons/icon-arrow.svg";

import { isValidDomain, isValidIP } from "@/lib/utils";
import { fetchIPInfo } from "@/lib/fetchData";

import type { SearchBarProps } from "@/types/Components";

const SearchBar = ({
  currentIP,
  getSearchResults,
  setSearchLoading,
}: SearchBarProps) => {
  // Query state
  const [query, setQuery] = useState<string>("");

  // Update query state when currentIP changes only in first render
  useEffect(() => {
    if (query.length === 0) {
      setQuery(currentIP);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIP]);

  // Test the input against domain, IPv4, and IPv6 regex patterns and accept empty values to get the current IP
  const isValid = (value: string) => {
    if (isValidDomain(value) || isValidIP(value) || value === "") {
      return true;
    } else {
      return false;
    }
  };

  // Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if the input is valid
    if (!isValid(query.trim())) {
      toast.error("Please enter a valid IP address or domain");
      return;
    }

    // Start loading
    setSearchLoading(true);

    // Fetch IP info
    const data = await fetchIPInfo(query.trim());
    getSearchResults(data);
    setSearchLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row w-full md:max-w-[600px]"
    >
      <input
        type="search"
        placeholder="Search for any IP address or domain"
        className="p-4 rounded-l-2xl w-[85%]"
        name="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
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
