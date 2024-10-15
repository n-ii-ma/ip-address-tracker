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

    // Check if the response status is not 2xx
    if (!res.ok) {
      // Extract the error message from the response
      const errorData = await res.json();
      throw new Error(
        `API Error: ${res.status} ${res.statusText} - ${
          errorData.messages || "Unknown error"
        }`
      );
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};
