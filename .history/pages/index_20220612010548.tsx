import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter - Kuly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black min-h-screen">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}

        {/* Widgets */}

        {/* Modal */}
      </main>
      
    </div>
  )
}

export default Home
