import type { IPInfo } from "../../types/IPInfo";

/* Fetch IP info */
export const getIPInfo = async (
  searchInput?: string,
  isDomain?: boolean
): Promise<IPInfo> => {
  const baseURL = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.IPIFY_API_KEY}`;

  // Create URL
  const URL = isDomain
    ? `${baseURL}&domain=${searchInput ?? ""}`
    : `${baseURL}&ipAddress=${searchInput ?? ""}`;

  try {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch IP info", error);
    throw error;
  }
};
