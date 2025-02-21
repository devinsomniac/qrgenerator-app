import Image from 'next/image'
import React from 'react'
interface QRGeneratedProps {
  qrCodeUrl: string;
}
const QrGenerated : React.FC<QRGeneratedProps> = ({ qrCodeUrl }) => {
  return (
    <div className='bg-white p-8 rounded-lg flex justify-center items-center'>
    {qrCodeUrl ? <Image src={qrCodeUrl} alt="QR Code" height={200} width={200}/> : 
      <Image src={'/exampleqr.jpg'} height={200} width={200} alt='example qr' />
    }
  </div>
  )
}

export default QrGenerated