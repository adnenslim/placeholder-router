import type { User } from "@/types/user";
import { getHttpClient } from "../httpClient";
import { ENDPOINTS, JSON_PLACEHOLDER_BASE_URL } from "./endpoints";
import { withBaseUrl } from "../utils";

const httpClient = getHttpClient({});

export const jsonPlaceholderApiClient = {
  getUsers() {
    return httpClient.get<User[]>(
      withBaseUrl({ baseUrl: JSON_PLACEHOLDER_BASE_URL, path: ENDPOINTS.users })
    );
  },
  getUserById(id: string) {
    return httpClient.get<User>(
      withBaseUrl({
        baseUrl: JSON_PLACEHOLDER_BASE_URL,
        path: ENDPOINTS.user.replace(":id", id),
      })
    );
  },
};
