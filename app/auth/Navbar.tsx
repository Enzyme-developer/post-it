import Link from 'next/link'
import Login from './Login';

export default async function Navbar() {
  return (
    <nav>
      <Link href="/">
        <h1>Post-It</h1>
          </Link>
          <Login />
    </nav>
  );
}
