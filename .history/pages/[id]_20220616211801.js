import React from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import { getSession, getProviders, useSession } from 'next-auth/react'
import Modal from '../components/Modal'
import {useRecoilState} from 'recoil'
import { modalState, postIdState } from "../atoms/modalAtom";
import {useRouter} from 'next/router'

function PostPage() {
    const {data: session} = useSession()
    const [isOpen, setIsOpen] = useRecoilState(modalState)
    const router = useRouter()
    const {id} = router.query
    console.log(router)

  return (
    <div className="">
    <Head>
      <title>Twitter - Kuly</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto" >
      {/* Sidebar */}
      <Sidebar />
      {/* Widgets */}
      {session.user?.name}
      {/* Modal */}
      {isOpen && <Modal />}
    </main>
    
  </div>
  )
}

export default PostPage