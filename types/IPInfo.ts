export interface IPInfo {
  ip: string;
  location: {
    city: string;
    lat: number;
    lng: number;
    timezone: string;
  };
  isp: string;
}
