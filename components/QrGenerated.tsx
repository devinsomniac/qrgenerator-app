import Image from 'next/image'
import React from 'react'

const QrGenerated = () => {
  return (
    <div className='flex justify-center items-center'>
        <Image src={'/exampleqr.jpg'} alt='example' height={50} width={200}/>
    </div>
  )
}

export default QrGenerated