"use client"

import { signIn } from 'next-auth/react'

export default function Login() {
  return <div className='flex'>
    <button className='w-fit bg-blue-500 px-4 py-2 rounded-xl' onClick={() => signIn()}>Sign In</button>
  </div>;
}
