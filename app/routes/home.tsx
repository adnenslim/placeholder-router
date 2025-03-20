import { UsersList } from "@/components/users-list/users-list";
import type { Route } from "./+types/home";
import { InputSearch } from "@/components/search/search";
import React from "react";
import type { User } from "@/types/user";
import { jsonPlaceholderApiClient } from "@/support/http/jsonPlaceholderAapiClient";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Json placeholder" },
    { name: "description", content: "Welcome to React placeholder!" },
  ];
}

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const search = url.searchParams.get("q");
  let users = await jsonPlaceholderApiClient.getUsers();

  if (search) {
    users = users.filter((u) =>
      u.username.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())
    );
  }

  return {
    users,
  };
}

export default function Home({
  loaderData,
}: {
  loaderData: { users: User[] };
}) {
  return (
    <div className="flex flex-col items-center space-y-2 my-1">
      <InputSearch />
      <React.Suspense fallback={<div>Loading...</div>}>
        <UsersList users={loaderData.users} />
      </React.Suspense>
    </div>
  );
}
