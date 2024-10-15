import { toast } from "react-toastify";

import type { IPInfo } from "@/types/IPInfo";

/* Fetch IP info */
export const fetchIPInfo = async (query?: string): Promise<IPInfo> => {
  try {
    const res = await fetch(`/api/ip?query=${query ?? ""}`);

    // Check if the response status is not 2xx
    if (!res.ok) {
      const errorData = await res.json();
      toast.error(errorData.message || "Unknown error");
      throw new Error(
        `API Error: ${res.status} ${res.statusText} - ${
          errorData.messages || "Unknown error"
        }`
      );
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
