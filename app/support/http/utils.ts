export const withBaseUrl = ({
  rp = false,
  path,
  baseUrl,
}: {
  rp?: boolean;
  path: string;
  baseUrl?: string;
}) => (rp ? path : `${baseUrl}${path}`);
