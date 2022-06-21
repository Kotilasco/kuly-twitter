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
                        
                        <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#1d9bf0] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Sign in with {provider.name}</span>
                    </button>
                    </div>
                ))
            }
    </div>
  )
}

export default Login