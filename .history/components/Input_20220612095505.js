import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, PhotographIcon, XIcon } from '@heroicons/react/outline'
import React, { useRef, useState } from 'react'
import Calender from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function Input() {

  const [input, setInput] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const filePickerRef = useRef(null)
  const datePickerRef = useRef(null)
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const addImageToPost = {}

  const openDatepicker = () => setOpen(true);


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
           tracking-wide scrollbar-hide min-h-[50px]'  rows="2"
           
           />
          
      
      {selectedFile && (

      
      <div className='relative'>
        <div className='absolute w-8 h-8 bg-[#15181c] hover:bg-[272c26]
         bg-opacity-75 rounded-full flex items-center justify-center top-1 left-100 cursor-pointer 
         ' onClick={() => setSelectedFile(null)}>
          <XIcon className='text-white h-5 ' />
        </div>
        <img src={selectedFile} alt=''
         className='rounded-2xl max-h-80 object-contain' />
      </div>
      )}
    </div>
    <div className='flex items-center justify-between pt-2.5'>
        <div className='flex items-center'>
          <div className='icon' onClick={() => filePickerRef.current.click()}>
            <PhotographIcon className='h-[22px] text-[#1d9bf0]' />
            <input hidden type='file' onChange={addImageToPost} ref={filePickerRef}/>
          </div>
          <div className='icon rotate-90 cursor-default'>
            <ChartBarIcon className='h-[22px] text-[#1d9bf0]' />
          </div>
          <div className='icon' >
            <EmojiHappyIcon className='h-[22px] text-[#1d9bf0]' />
          </div>
          <div className='icon' onClick={openDatepicker}>
            <CalendarIcon className='h-[22px] text-[#1d9bf0]' />
            {
              open && <Calender onChange={setDate} value={date} ref={datePickerRef}/>
            }
          </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Input