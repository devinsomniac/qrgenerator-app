"use client"
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
const services = [
    { id: 1, name: "URL", icon: "/icons/url.png" },
    { id: 2, name: "VCard", icon: "/icons/vcard.png" },
    { id: 3, name: "Text", icon: "/icons/text.png" },
    { id: 4, name: "Email", icon: "/icons/email.png" },
    { id: 5, name: "Twitter", icon: "/icons/twitter.png" },
    { id: 6, name: "Facebook", icon: "/icons/facebook.png" },
    { id: 7, name: "Wifi", icon: "/icons/wifi.png" },
    { id: 8, name: "PDF", icon: "/icons/pdf.png" },
]

const Selection = () => {
    const [selectedService, setSelectedService] = useState("URL")
    const [formData,setFormData] = useState({})
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setFormData((...formData) => ({...formData,
            [e.target.name] : e.target.value
    }))
    }
    const renderForm = () => {
        switch (selectedService) {
            case "URL":
                return (
                    <div>
                        <label>Enter the URL to create QR</label>
                        <Input />
                    </div>
                )
                break;
            case "VCard":
                return (
                    <div>
                        <label>Enter the Name</label>
                        <Input />
                        <label>Enter the Phone Number</label>
                        <Input />
                        <label>Enter the Email Id</label>
                        <Input />
                        <label>Enter the Address</label>
                        <Input />
                    </div>
                )
                break;
            case "Text":
                return (
                    <div>
                        <label>Enter Your Text</label>
                        <Textarea />
                    </div>
                )
                break;
            case "Email":
                return (
                    <div>
                        <label>Enter the Email</label>
                        <Input />
                    </div>
                )
                break;
            case "Twitter":
                return (
                    <div>
                        <label>Enter the URL to create QR</label>
                        <Input />
                    </div>
                )
                break;
            case "Facebook":
                return (
                    <div>
                        <label>Enter the URL to create QR</label>
                        <Input />
                    </div>
                )
                break;
            case "Wifi":
                return (
                    <div>
                        <label>Enter WiFi Name (SSID):</label>
                        <Input placeholder="Network Name" />
                        <label>Enter Password:</label>
                        <Input type="password" placeholder="Password" />
                        <label>Encryption Type:</label>
                        <select className="border p-2 rounded w-full">
                            <option>WPA/WPA2</option>
                            <option>WEP</option>
                            <option>None</option>
                        </select>
                    </div>
                )
                break;
            case "PDF":
                return (
                    <div>
                        <label>Upload PDF:</label>
                        <Input type="file" />
                    </div>
                )
                break;
            default:
                break;
        }
    }
    return (
        <div className='bg-orange-300 rounded-xl shadow-xl p-4 flex flex-col justify-center items-center '>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
                {services.map((service, index) => (
                    <div key={index} className={`flex justify-start items-center p-2 gap-2 rounded-lg cursor-pointer 
                        ${selectedService === service.name ? "bg-blue-300" : "bg-slate-50"} 
                        hover:bg-slate-200`}
                        onClick={() => setSelectedService(service.name)}>
                        <Image src={service.icon} alt='service logo' height={30} width={20} />
                        <p>{service.name}</p>
                    </div>
                ))}
            </div>
            {selectedService && (
                <div className="p-4 flex flex-col justify-center items-start w-full">
                    {renderForm()}
                    <Button className="mt-2">Generate QR</Button>
                </div>
            )}
        </div>
    )
}

export default Selection