import Image from 'next/image'
import {signIn, signOut} from 'next-auth/react'

function Login({providers}) {
  return (
    <div className='bg-black'>
        <Image 
            src='https://rb.gy/ogau5a'
            width={150}
            height={150}
            objectFit= 'contain'
            />
            {
                Object.values(providers).map(provider =>(
                    <div key={provider.name}>
                    {/* https://devdojo.com/tailwindcss/buttons#_ */}
                    <button>
                        <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                        <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Button Text</span>
                        </a>
                    </button>
                    </div>
                ))
            }
    </div>
  )
}

export default Login