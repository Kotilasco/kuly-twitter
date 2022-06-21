import React from 'react'

function Comment({id, comment}) {
  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700
     ">
    <img src={comment?.userImg} alt="" className='h-11 w-11 rounded-full mr-4'/>
    </div>
  )
}

export default Comment