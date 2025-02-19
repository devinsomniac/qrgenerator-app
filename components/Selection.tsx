"use client"
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import QRCode from "qrcode";
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

interface FormDataType {
    url_input?: string;
    vcard_name?: string;
    vcard_number?: string;
    vcard_email?: string;
    vcard_address?: string;
    text_input?: string;
    email_input?: string;
    twitter_handle?: string;
    facebook_handle?: string;
    ssid_name?: string;
    encryption_type?: string;
    ssid_password?: string;
}
interface SelectionProps {
    setQrCodeUrl: React.Dispatch<React.SetStateAction<string>>;
  }

  const Selection: React.FC<SelectionProps> = ({ setQrCodeUrl }) => {
    const [selectedService, setSelectedService] = useState("URL")
    const [formData, setFormData] = useState<FormDataType>({})
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const renderForm = () => {
        switch (selectedService) {
            case "URL":
                return (
                    <div className='text-white font-semibold'>
                        <label>Enter the URL to create QR</label>
                        <Input className='bg-white' name='url_input' onChange={handleChange} />
                    </div>
                )
                break;
            case "VCard":
                return (
                    <div className='text-white font-semibold'>
                        <label>Enter the Name</label>
                        <Input name='vcard_name' className='bg-white' onChange={handleChange} />
                        <label>Enter the Phone Number</label>
                        <Input name='vcard_number' className='bg-white' onChange={handleChange} />
                        <label>Enter the Email Id</label>
                        <Input name='vcard_email' className='bg-white' onChange={handleChange} />
                        <label>Enter the Address</label>
                        <Input name='vcard_address' className='bg-white' onChange={handleChange} />
                    </div>
                )
                break;
            case "Text":
                return (
                    <div className='text-white font-semibold'>
                        <label>Enter Your Text</label>
                        <Textarea name='text_input' className='bg-white' onChange={handleChange} />
                    </div>
                )
                break;
            case "Email":
                return (
                    <div className='text-white font-semibold'>
                        <label>Enter the Email</label>
                        <Input name='email_input' className='bg-white' onChange={handleChange} />
                    </div>
                )
                break;
            case "Twitter":
                return (
                    <div className='text-white font-semibold'>
                        <label>Enter the URL to create QR</label>
                        <Input name='twitter_handle' className='bg-white' onChange={handleChange} />
                    </div>
                )
                break;
            case "Facebook":
                return (
                    <div className='text-white font-semibold'>
                        <label>Enter the URL to create QR</label>
                        <Input name='facebook_handle' className='bg-white' onChange={handleChange} />
                    </div>
                )
                break;
            case "Wifi":
                return (
                    <div className='text-white font-semibold'>
                        <label>Enter WiFi Name (SSID):</label>
                        <Input placeholder="Network Name" name='ssid_name' className='bg-white' onChange={handleChange} />
                        <label>Enter Password:</label>
                        <Input type="password" placeholder="Password" name='ssid_password' className='bg-white' onChange={handleChange} />
                        <label>Encryption Type:</label>
                        <select className="border p-2 rounded w-full" name='encryption_type' onChange={handleChange}>
                            <option>WPA/WPA2</option>
                            <option>WEP</option>
                            <option>None</option>
                        </select>
                    </div>
                )
                break;
            case "PDF":
                return (
                    <div className='text-white font-semibold'>
                        <label>Upload PDF:</label>
                        <Input type="file" name='pdf_file' className='bg-white' onChange={handleChange} />
                    </div>
                )
                break;
            default:
                break;
        }
    }

    const getQRCodeData = () => {
        switch (selectedService) {
            case "URL":
                return formData.url_input || "";
            case "VCard":
                return `BEGIN:VCARD\nVERSION:3.0\nFN:${formData.vcard_name || ""}\nTEL:${formData.vcard_number || ""}\nEMAIL:${formData.vcard_email || ""}\nADR:${formData.vcard_address || ""}\nEND:VCARD`;
            case "Text":
                return formData.text_input || "";
            case "Email":
                return `mailto:${formData.email_input || ""}`;
            case "Twitter":
                return `https://twitter.com/${formData.twitter_handle || ""}`;
            case "Facebook":
                return `https://facebook.com/${formData.facebook_handle || ""}`;
            case "Wifi":
                return `WIFI:S:${formData.ssid_name || ""};T:${formData.encryption_type || "WPA"};P:${formData.ssid_password || ""};;`;
            case "PDF":
                return "PDF Upload - Needs Backend Handling";
            default:
                return "";
        }
    };
    
    const generateQRCode = async () => {
        const qrData = getQRCodeData();
        try {
            const qrCodeUrl = await QRCode.toDataURL(qrData);
            setQrCodeUrl(qrCodeUrl)
            console.log("Generated QR Code URL:", qrCodeUrl);
        } catch (error) {
            console.error("Error generating QR Code:", error);
        }
    };
    console.log(formData)
    return (
        <div className='bg-[#102542] rounded-xl shadow-xl p-4 flex flex-col justify-center items-center '>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                {services.map((service, index) => (
                    <div key={index} className={`flex justify-start items-center p-2 gap-2 rounded-lg cursor-pointer 
                        ${selectedService === service.name ? "bg-blue-300" : "bg-[#F87060]"} 
                        hover:bg-slate-200`}
                        onClick={() => setSelectedService(service.name)}>
                        <Image src={service.icon} alt='service logo' height={30} width={20} />
                        <p className='font-bold text-[#051020]'>{service.name}</p>
                    </div>
                ))}
            </div>
            {selectedService && (
                <div className="p-4 flex flex-col justify-center items-center w-full">
                    {renderForm()}
                    <Button className="mt-2 bg-yellow-400 text-black font-bold" onClick={generateQRCode}>Generate QR</Button>
                </div>
            )}
        </div>
    )
}

export default Selection