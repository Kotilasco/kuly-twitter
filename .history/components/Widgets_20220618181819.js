import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

function Widgets({followResults, trendingResults}) {
  return (
    <div className="hidden lg:inline ml-8 xl:w-[450px] 
    py-1 space-x-5 z-50">
        <div className="sticky top-0 py-1.5 bg-black 
        z-50 w-11/12 xl:w-9/12">
        <SearchIcon className="text-gray-500 h-5 " />
        <input type="text" className="bg-transparent placeholder-gray-500 
        outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-transparent first-letter:w-full"
         placeholder="Search Twitter"
         />
         hello
        </div>
    </div>
  )
}

export default Widgets