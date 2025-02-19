import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-4'>
            <div className='flex justify-center items-center gap-2'>
                <Image src={'/logo.png'} alt='logo' height={50} width={50} />
                <div>
                    <h1 className='font-bold'>QRify</h1>
                    <p className='font-semibold'>Generate. Scan. Connect.</p>
                </div>
            </div>
            <Button variant="outline">Log in</Button>
        </div>
    )
}

export default Navbar