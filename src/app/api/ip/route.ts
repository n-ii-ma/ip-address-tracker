import { isValidDomain } from "@/lib/utils";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") ?? "";
  const baseURL = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.IPIFY_API_KEY}`;

  // Extract the user's IP address
  const ip = request.headers.get("X-Forwarded-For");

  // Create URL
  const url = isValidDomain(query)
    ? `${baseURL}&domain=${query}`
    : `${baseURL}&ipAddress=${
        query || process.env.NODE_ENV === "production" ? ip : ""
      }`;

  try {
    const res = await fetch(url);

    // Check if the response status is not 2xx
    if (!res.ok) {
      const errorData = await res.json();
      return Response.json(
        {
          message: errorData.messages || "Unknown error",
        },
        { status: res.status, statusText: res.statusText }
      );
    }

    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Error fetching data" }, { status: 500 });
  }
}
