import Image from 'next/image'
import {signIn, signOut} from 'next-auth/react'

function Login() {
  return (
    <div className='bg-black'>
        <Image 
            src='https://rb.gy/ogau5a'
            width={150}
            height={150}
            objectFit= 'contain'
            />
    </div>
  )
}

export default Login