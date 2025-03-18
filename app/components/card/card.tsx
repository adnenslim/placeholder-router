import type { TUser } from "@/types/user";
import { Link } from "react-router";


type TCardProps = { user: TUser };

export const Card = ({ user }: TCardProps) => {
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
