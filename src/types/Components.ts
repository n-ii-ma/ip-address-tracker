import type { IPInfo } from "./IPInfo";

export interface HeaderProps {
  isLoading: boolean;
  ipInfo: IPInfo | null;
  getSearchResults: (ipInfo: IPInfo) => void;
  setSearchLoading: (loading: boolean) => void;
}

export interface SearchBarProps
  extends Pick<HeaderProps, "getSearchResults" | "setSearchLoading"> {
  currentIP: IPInfo["ip"];
}

export interface TransformedData {
  title: string;
  value: string;
}

export interface InfoCardProps {
  transformInfo: TransformedData[];
}
