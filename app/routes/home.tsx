import { UsersList } from "@/components/users-list/users-list";
import type { Route } from "./+types/home";
import type { TUsers } from "@/types/user";
import { InputSearch } from "@/components/search/search";
import React from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Json placeholder" },
    { name: "description", content: "Welcome to React placeholder!" },
  ];
}

const fetchUser = (): Promise<TUsers> =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((up) => up.json())
    .catch(() => {
      throw new Error("API Error");
    });

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const search = url.searchParams.get("q");
  let users = await fetchUser();

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
  loaderData: { users: TUsers };
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
