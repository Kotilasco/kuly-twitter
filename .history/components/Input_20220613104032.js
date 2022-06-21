import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, PhotographIcon, XIcon } from '@heroicons/react/outline'
import React, { useRef, useState, useEffect } from 'react'
import data from "@emoji-mart/data";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc
} from 'firebase/firestore'
import {
  getDownloadURL,
  ref,
  uploadString
} from 'firebase/storage'
import {db, storage} from '../firebase'
   
function Input() {

  const [input, setInput] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const filePickerRef = useRef(null)
  const [showEmojis, setShowEmojis] = useState(false)
  const [loading, setLoading] = useState(false) 
/*   const addEmoji = (e) => {
    setInput(input + e.native)
  } */
  const Picker = (props = {}) => {
    const ref = useRef();
  
    import("emoji-mart").then((EmojiMart) => {
      new EmojiMart.Picker({ ...props, data, ref });
    });
  
    return <div ref={ref}></div>;
  };


  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };


  const addImageToPost = (e) => {
    const reader = new FileReader();
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);

    }

    reader.onload = (readerEvent) =>{
      setSelectedFile(readerEvent.target.result)
    }
  }

const sendPost = async () => {
  if(loading) return;
  setLoading(true)

  const docRef = await addDoc(collection(db, 'post'),{
    /* id: session.user.uid,
    username: session.user.name,
    userImg: session.user.image,
    tag: session.user.tag, */
    text: input,
    timestamp: serverTimestamp()
  })

  const imageRef = ref(storage, `posts/${docRef.id}/image`)

  if(selectedFile){
    await uploadString(imageRef, selectedFile, 'data_url').then(async () =>{
      const downloadURL = await getDownloadURL(imageRef)
      await setDoc(doc(db,'posts',docRef.id),{
        image: downloadURL
      },{
        merge: true
      }
      )
    })
  }
  setLoading(false)
  setInput('')
  setSelectedFile(false)
  setShowEmojis(false)
}

  return (
    <div className={`border-b border-gray-500 space-x-3 p-3 flex overflow-y-scroll scrollbar-hide ${loading && 
    "opacity-60"}`}>
    <img src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png" alt=""
    className="h-11 w-11 rounded-full " />
    <div className="w-full divide-y divide-gray-500">
      <div className={`${selectedFile && 'pb-7'} ${input && 
      'space-y-2.5 '}`}>
          <textarea value={input}
          onChange={(e) => setInput(e.target.value)}
          onClick={() => setShowEmojis(false)}
          placeholder={`What\'s happening?`}
          className='bg-transparent w-full outline-none text-[#d9d9d9] placeholder-gray-500 text-lg
           tracking-wide scrollbar-hide min-h-[50px]'  rows="2"
           
           />
          
      
      {selectedFile && (

      
      <div className='relative' >
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
    {!loading && (
    <div className='flex items-center justify-between pt-2.5' >
        <div className='flex items-center ' >
          <div className='icon' onClick={() => filePickerRef.current.click()}>
            <PhotographIcon className='h-[22px] text-[#1d9bf0]' />
            <input hidden type='file' onChange={addImageToPost} ref={filePickerRef}/>
          </div>
          <div className='icon rotate-90 cursor-default'>
            <ChartBarIcon className='h-[22px] text-[#1d9bf0]' />
          </div>
           <div className='icon' onClick={() => setShowEmojis(!showEmojis)}>
            <EmojiHappyIcon className='h-[22px] text-[#1d9bf0]' />
          </div>
          <div className='icon cursor-default'>
            <CalendarIcon className='h-[22px] text-[#1d9bf0]' />
          </div>
          {showEmojis && (
            <Picker
                    onEmojiSelect={addEmoji}
                    style={{
                       position: "absolute",
                       marginTop: "465px",
                       marginLeft: -40,
                       maxWidth: "320px",
                       borderRadius: "20px",
                    }}
                  theme="media"
            />
     )}
  
        </div>
        <button className='bg-[#1d9bf0] text-white rounded-full 
        px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] 
        disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default' 
        disabled={!input.trim() && !selectedFile} 
        onClick={sendPost}
        >Tweet</button>

        </div>
  )}
    </div>
    </div>
  )}


export default Input