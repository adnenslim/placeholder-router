const fetchResOrRej = async (response: Response) => {
  if (response.ok) {
    try {
      const resolved = await response.json();

      return resolved;
    } catch (error) {
      return error;
    }
  }

  return Promise.reject(await response.json());
};

const getHttpConfig = (config?: RequestInit, cookie?: string) => ({
  ...config,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(config && {
      ...config.headers,
    }),
    Cookie: cookie || "",
  },
});

export const getHttpClient = ({
  config,
  cookie,
}: {
  config?: RequestInit;
  cookie?: string;
}) => {
  return {
    get: <T>(url: string) => {
      return fetch(url, getHttpConfig(config, cookie)).then(
        fetchResOrRej
      ) as Promise<T>;
    },
  };
};
