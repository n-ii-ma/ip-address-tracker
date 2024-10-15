import type { IPInfo } from "./IPInfo";

export interface HeaderProps {
  ipInfo: IPInfo | null;
  getSearchResults: (ipInfo: IPInfo) => void;
}

interface TransformedData {
  title: string;
  value: string;
}

export interface InfoCardProps {
  transformInfo: TransformedData[];
}
