import Image from 'next/image'
import React from 'react'
interface QRGeneratedProps {
  qrCodeUrl: string;
}
const QrGenerated : React.FC<QRGeneratedProps> = ({ qrCodeUrl }) => {
  return (
    <div className='bg-white p-8 rounded-lg flex justify-center items-center'>
    {qrCodeUrl ? <Image src={qrCodeUrl} alt="QR Code" height={200} width={200}/> : <p>No QR code generated yet.</p>}
  </div>
  )
}

export default QrGenerated