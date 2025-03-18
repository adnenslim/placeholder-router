import { UsersList } from "@/components/users-list/users-list";
import type { Route } from "./+types/details";
import type { TUser, TUsers } from "@/types/user";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "users details" },
    { name: "description", content: "user!" },
  ];
}

export async function loader({params}: { params: { id: string } }): Promise<TUsers> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  if (!response.ok) throw new Error("API Error");
  const data = await response.json();
  return data;
}

/* export function HydrateFallback() {
  return <p>Loading...</p>;
} */

export default function Details({ loaderData }: { loaderData: TUser }) {

  const handleBack = () => {
    window.history.back();
  };
  return <>
    <button onClick={handleBack}>Back</button> 
    <h1>{loaderData.username}</h1>
    <span>{loaderData.name}</span>
    <span>{loaderData.website}</span>
  </>;
}
