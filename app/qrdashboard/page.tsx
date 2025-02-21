import { auth } from '@/auth';
import React from 'react'

const page = async() => {
    const session = await auth();
    const userName = session?.user?.name;
  return (
    <div>
        <div className='flex flex-col justify-center items-center gap-2 text-gray-600 font-bold text-4xl'>
        <h2>Good Evening, {userName}</h2>
        <h3>These Are Your QR Codes</h3>
        </div>
    </div>
  )
}

export default page