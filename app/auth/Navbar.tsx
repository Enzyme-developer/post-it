import Link from "next/link";
import Login from "./Login";
import Logged from "./Logged";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex justify-between px-4 py-6 items-center">
      <Link href="/">
        <h1 className="font-bold text-2xl">Post-It</h1>
      </Link>
      {!session?.user && <Login />}
      {session?.user && <Logged image={session?.user.image as string} />}
    </nav>
  );
}
