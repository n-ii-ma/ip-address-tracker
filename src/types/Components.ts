import type { IPInfo } from "./IPInfo";

export interface HeaderProps {
  isLoading: boolean;
  ipInfo: IPInfo | null;
  getSearchResults: (ipInfo: IPInfo) => void;
  setSearchLoading: (loading: boolean) => void;
}

export type SearchBarProps = Pick<
  HeaderProps,
  "getSearchResults" | "setSearchLoading"
>;

export interface TransformedData {
  title: string;
  value: string;
}

export interface InfoCardProps {
  transformInfo: TransformedData[];
}
