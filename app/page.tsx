import Image from 'next/image'
import AddPost from './components/AddPost'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-4">
      <AddPost />
    </main>
  )
}
