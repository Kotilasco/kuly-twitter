import { XIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'

function Input() {

  const [input, setInput] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  return (
    <div className={`border-b border-gray-500 space-x-3 p-3 flex overflow-y-scroll scrollbar-hide`}>
    <img src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png" alt=""
    className="h-11 w-11 rounded-full " />
    <div className="w-full divide-y divide-gray-500">
      <div className={``}>
          <textarea value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`What\'s happening?`}
          className='bg-transparent w-full outline-none text-[#d9d9d9] placeholder-gray-500 text-lg
           tracking-wide scrollbar-hide min-h-[50px]'  rows="2">
          
          </textarea>
      </div>
      {selectedFile && (

      
      <div className='relative'>
        <div className='absolute w-8 h-8 bg-[#15181c] hover:bg-[272c26]
         bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer 
         ' onClick={setSelectedFile('')}>
          <XIcon className='text-white h-5 ' />
        </div>
        <img src={selectedFile} alt=''
         className='rounded-2xl max-h-80 object-contain' />
      </div>
      )}
    </div>
    </div>
  )
}

export default Input