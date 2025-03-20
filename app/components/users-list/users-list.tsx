import type { User } from "@/types/user";
import { Card } from "../card/card";

export const UsersList = ({ users }: { users: User[] }) => {
  return (
    <ul className="flex flex-wrap gap-4 justify-center">
      {users.map((user) => (
        <li key={user.id}>
          <Card user={user} />
        </li>
      ))}
    </ul>
  );
};
