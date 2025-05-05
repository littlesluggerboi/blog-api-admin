import { verifySession } from "@/app/lib/dal";
import UsersContext from "@/partials/users";
import { notFound } from "next/navigation";
export default async function Users() {
  const user = await verifySession();
  const res = await fetch(`${process.env.BACKEND_URL}/users`, {
    signal: AbortSignal.timeout(3000),
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
  if (res.status == 404) {
    notFound();
  } else if (!res.ok) {
    throw new Error(res.statusText);
  }
  const { users } = await res.json();
  return (
    <>
      <title>A Blogs | User</title>
      <UsersContext users={users} />
    </>
  );
}
