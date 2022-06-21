import {
    collection,
    doc,
    onSnapshot,
    orderBy,
    query,
  } from "@firebase/firestore";
  import { getProviders, getSession, useSession } from "next-auth/react";
  import { useRouter } from "next/router";
  import { useEffect, useState } from "react";
  import { useRecoilState } from "recoil";
  import { modalState } from "../atoms/modalAtom";
  import Modal from "../components/Modal";
  import Sidebar from "../components/Sidebar";
  import Post from "../components/Post";
  import { db } from "../firebase";
  import { ArrowLeftIcon } from "@heroicons/react/solid";
  import Head from "next/head";

function PostPage() {
    const {data: session} = useSession()
    const [post, setPost] = useState()
    const [isOpen, setIsOpen] = useRecoilState(modalState)
    const router = useRouter()
    const {id} = router.query

    useEffect(
        () =>
        onSnapshot(doc(db,'posts',id), (snapshot) => {
            setPost(snapshot.data())
        }),
        [db]
    )

    if(!session) return <Login providers={providers} />

  return (
    <div className="">
    <Head>
      <title>{post?.username} on Twitter</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto" >
      {/* Sidebar */}
      <Sidebar />
      {/* Widgets */}
      {/* Modal */}
      {isOpen && <Modal />}
    </main>
    
  </div>
  )
}

export default PostPage