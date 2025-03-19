
import { UsersList } from "@/components/users-list/users-list";
import type { Route } from "./+types/home";
import type { TUser, TUsers } from "@/types/user";
import { InputSearch } from "@/components/search/search";
import { useMemo, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Json placeholder" },
    { name: "description", content: "Welcome to React placeholder!" },
  ];
}

export async function loader(): Promise<TUsers> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("API Error");
  const data = await response.json();
  return data;
}

/* export function HydrateFallback() {
  return <p>Loading...</p>;
} */

export default function Home({ loaderData }: { loaderData: TUsers }) {
  const [search, setSearch] = useState("");

  const filtredData = useMemo(() => loaderData.filter(item => item.name.toLowerCase().includes(search.toLowerCase())), [search, loaderData]);

  return (
    <>
      <InputSearch setSearch={setSearch}/>
      <UsersList users={filtredData}/>
    </>
  );
}
