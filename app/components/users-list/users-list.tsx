import type { TUser, TUsers } from "@/types/user";
import { Card } from "../card/card";

export const UsersList = ({users}: {users: TUsers}) => {
  return( <ul className="flex flex-wrap gap-4 justify-center">
    {users?.map((user: TUser) => (
      <li key={user.id}>
        <Card user={user} />
      </li>
    ))}
  </ul>)
}