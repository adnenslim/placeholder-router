import { UsersList } from "@/components/users-list/users-list";
import type { Route } from "./+types/details";
import type { TUser, TUsers } from "@/types/user";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "users details" },
    { name: "description", content: "user!" },
  ];
}

export async function clientLoader({params}: { params: { id: string } }): Promise<TUsers> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
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

export function HydrateFallback() {
  return <p>Loading...</p>;
} 

export default function Details({ loaderData }: { loaderData: TUser }) {

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <button onClick={handleBack}>Back</button> 
      <br />
      <br />
      <h1>User details:</h1>
      <span>{loaderData.username}</span>
      <br />
      <span>{loaderData.name}</span>
      <br />
      <span>{loaderData.website}</span>
    </>);
  }
