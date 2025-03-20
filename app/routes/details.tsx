import type { Route } from "./+types/details";
import type { TUser, TUsers } from "@/types/user";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "users details" },
    { name: "description", content: "user!" },
  ];
}

export async function loader({
  params,
}: {
  params: { id: string };
}): Promise<TUsers> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  if (!response.ok) throw new Error("API Error");
  const data = await response.json();
  return data;
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
}

/* export function HydrateFallback() {
  return <p>Loading...</p>;
} */

export default function Details({ loaderData }: { loaderData: TUser }) {
  return (
    <>
      <Link to={"/"}>Back</Link>
      <br />
      <br />
      <h1>User details:</h1>
      <span>{loaderData.username}</span>
      <br />
      <span>{loaderData.name}</span>
      <br />
      <span>{loaderData.website}</span>
    </>
  );
}
