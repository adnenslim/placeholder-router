import type { User } from "@/types/user";
import { Link } from "react-router";



export const Card = ({ user }: {user: User}) => {
  return (
    <Link
      to={`/details/${user.id}`}
      className={
        "flex w-[300px] flex-col border border-black text-black p-4 cursor"
      }
    >
      <h1>{user.username}</h1>
      <span>{user.name}</span>
      <span>{user.website}</span>
    </Link>
  );
};
