import Link from "next/link";
import Login from "./Login";
import Logout from "./Logout";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <nav className="flex justify-between px-4 py-6 items-center">
      <Link href="/">
        <h1 className="font-bold">Post-It</h1>
      </Link>
      {!session?.user && <Login />}
      {session?.user && <Logout image={session?.user?.image} />}
    </nav>
  );
}
