export const isValidDomain = (domain: string) => {
  const domainRegex = /^[a-zA-Z0-9-]{1,63}\.[a-zA-Z]{2,}$/;
  return domainRegex.test(domain);
};

export const isValidIP = (ipAddress: string) => {
  const ipv4Regex =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4}|:)$/;

  return ipv4Regex.test(ipAddress) || ipv6Regex.test(ipAddress);
};
