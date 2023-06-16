"use client";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

type User = {
  image: string;
};

export default function Logged ({ image }: User) {
  return (
    <div className="flex space-x-5">
      <button
        className="w-fit text-white bg-blue-500 px-4 py-2 rounded-xl"
        onClick={() => signOut()}
      >
        Logout
      </button>
      <Link href={"/dashboard"}>
        <Image
          src={image}
          width={40}
          height={40}
          alt="user"
          className="rounded-full"
        />
      </Link>
    </div>
  );
}
