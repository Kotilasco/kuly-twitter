import Image from "next/image"


function Post({id, post, postPage}) {
  return (
    <div className="p-3 flex border-b border-gray-700">
        {
            !postPage && (
                <Image src={post?.userImg} alt='' />
            )
        }
    </div>
  )
}

export default Post