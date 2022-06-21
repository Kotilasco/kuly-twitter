import React, { useState } from 'react'

function Input() {

  const [input, setInput] = useState('')
  return (
    <div className={`border-b border-gray-500 space-x-3 p-3 flex overflow-y-scroll`}>
    <img src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png" alt=""
    className="h-11 w-11 rounded-full " />
    <div className="w-full divide-y divide-gray-500">
      <div className={``}>
          <textarea value={input}
            rows="2">
          
          </textarea>
      </div>
      <div>hello</div>
    </div>
    </div>
  )
}

export default Input