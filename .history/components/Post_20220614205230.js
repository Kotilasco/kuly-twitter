import { ChatIcon, DotsHorizontalIcon, SwitchHorizontalIcon, TrashIcon } from "@heroicons/react/outline"
import { deleteDoc, doc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Image from "next/image"
import { router } from "next/router";
import { db } from "../firebase";


function Post({id, post, postPage}) {
    const {data: session} = useSession()
  return (
    <div className="p-3 flex border-b border-gray-700">
        {
            !postPage && (
                <img src={post?.userImg} alt=''
                 className="h-11 w-11 rounded-full mr-4" />
            )
        }
        <div className="flex flex-col space-y-2 w-full">
            <div className={`flex ${!postPage && 'justify-between'}`}>
                {
                    postPage && (
                        <img src={post?.userImg} alt='Profile Pik'
                 className="h-11 w-11 rounded-full mr-4" />
                    )
                }
                <div className="text-[#6e767d] cursor-pointer">
                    <div className="inline-block group">
                        <h4 className={`font-bold text-[15px] sm:text-base text-[#d9d9d9] 
                        group-hover:underline cursor-pointer ${!postPage && 'inline-block'}`}>{post?.username}</h4>
                        <span className={`text-sm sm:text-[15px] ${!postPage && 'ml-1.5'}`}>@{post?.tag}</span>
                    </div>
                    .{" "}
                    <span className='hover:underline text-sm sm:text-[15px]'>
                     {/* <Moment fromNow>{post?.timestamp?.toDate()} </Moment> */}
                    </span>
                    {!postPage &&(
                        <p className='text-[#d9d9d9] text-[15px] sm:text-base mt-0.5'>{post?.text}</p>
                    )}
                </div>
                <div className="icon group flex-shrink-0 ml-auto">
                    <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
                </div>
            </div>
            {postPage && (
                <p className='text-[#d9d9d9] text-[15px] sm:text-base mt-0.5'>{post?.text}</p>
            )}
            <img src={post?.image} alt=''
             className='rounded-2xl max-h-[700px] object-cover mr-2'
             />
             <div className={`text-[#6e767d] icon flex justify-between w-10/12 ${
                postPage && "mx-auto"
             }`}>
                {/* <div 
                 className="flex items-center space-x-1 group"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPostId(id);
                    setIsOpen(true)
                  }}
                >
                  <div className="icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
                    <ChatIcon className="h-5 group-hover:text-[#1d9bf0]" />
                  </div>
                  {
                    comments.length > 0 && (
                        <span className="group-hover:text-[#1d9bf0] text-sm" >
                        {comments.length}
                        </span>
                    )
                  }
                </div> */}
                {sessionStorage.user.uid === post?.id ? (
                    <div className="
                    flex items-center space-x-1 group
                    " 
                    onClick={
                        (e) => {
                            e.stopPropagation();
                            deleteDoc(doc(db, 'posts', id) );
                            router.push('/')
                        }
                    }
                    >
                    <div className="icon group-hover:bg-red-600/10">
                    <TrashIcon className="h-5 group-hover:text-green-500" />
                    </div>
                    </div>
                ):(
                    <div className="flex items-center space-x-1 group/
                    
                    ">
                        <div className="icon group-hover:bg-red-500/10">
                            <SwitchHorizontalIcon className="h-5 group-hover:text-green-500" />
                        </div>
                    </div>
                )
                } 
             </div>
        </div>
    </div>

  )
}

export default Post