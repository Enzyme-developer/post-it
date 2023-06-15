import Link from "next/link";
import Login from "./Login";
import { getServerSession } from "next-auth";
import { authOptions } from '../../pages/api/auth/[...nextauth]'

export default async function Navbar() {
    const session = await getServerSession(authOptions)
    console.log(session);
    
  return (
    <nav className="flex justify-between p-2 items-center">
      <Link href="/">
        <h1 className="font-bold">Post-It</h1>
      </Link>
      <Login />
    </nav>
  );
}
