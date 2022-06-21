import Image from "next/image"


function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center
     xl:items-start xl:w-[340px] p-2 fixed h-full">
        <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
            <Image 
                src='https://rb.gy/ogau5a'
                alt=''
                height={40}
                width={40}
            />
        </div>
    </div>
  )
}

export default Sidebar