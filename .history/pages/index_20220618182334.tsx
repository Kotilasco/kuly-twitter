import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import { getSession, getProviders, useSession } from 'next-auth/react'
import Login from '../components/Login'
import Widgets from '../components/widgets';
import Modal from '../components/Modal'
import {useRecoilState} from 'recoil'
import { modalState, postIdState } from "../atoms/modalAtom";

export default function Home({trendingResults, followResults, providers}) {
  
  const {data: session} = useSession()
  const [isOpen, setIsOpen] = useRecoilState(modalState)
  
  if(!session) return <Login providers={providers} />

  return (
    <div className="">
      <Head>
        <title>Twitter - Kuly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto" >
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets
          
          followResults={followResults}
        />
        {/* Modal */}
        {isOpen && <Modal />}
      </main>
      
    </div>
  )
}



export async function getServerSideProps(context: any) {
  const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
    (res) => res.json()
  )

  const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
    (res) => res.json()
  )

  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session
    }
  }
}

