"use client"
import QrGenerated from "@/components/QrGenerated";
import Selection from "@/components/Selection";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  return (
    <div>
      <div className="bg-slate-100 p-8 grid md:grid-cols-2">
      <Selection setQrCodeUrl={setQrCodeUrl} />
      <QrGenerated qrCodeUrl={qrCodeUrl} />
      </div>
      <div className="bg-white rounded-lg shadow-md p-8 ">
        <h1 className="text-2xl font-bold text-gray-800">What is a QR Code?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <p className="text-gray-600 mt-2 flex justify-center items-center text-left text-2xl">
            A QR code (Quick Response code) is a two-dimensional barcode that stores information in a grid of black squares on a white background. It can be scanned using a smartphone or a QR code reader to quickly access embedded data such as URLs, text, contact details, or payment information. QR codes are widely used in marketing, ticketing, product packaging, and digital payments due to their convenience and fast readability. They enhance user engagement by providing instant access to websites, apps, and multimedia content. With their ability to store large amounts of data and support error correction, QR codes have become an essential tool in modern digital communication.
          </p>
          <div className="flex justify-center items-center">
            <Image src={"/qrimage.png"} alt="qr image" height={80} width={320} />
          </div>
        </div>

      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-4">
        <h2 className="text-xl font-semibold text-gray-800">Why Use QR Codes?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex justify-end items-center">
            <Image src={'/qrman.jpg'} height={80} width={320} alt="qrman" />
            <Image src={'/qrman.jpg'} height={80} width={320} alt="qrman" />
          </div>
          <div>
            <ul className="list-disc pl-6 mt-2 text-gray-600 text-3xl">
              <li>Instant access to websites without typing URLs.</li>
              <li>Secure and customizable for businesses.</li>
              <li>Supports marketing, payments, and authentication.</li>
              <li>Works on both Android and iOS devices.</li>
            </ul>
          </div>

        </div>

      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-4 text-2xl">
        <h2 className="text-xl font-semibold text-gray-800">FAQs About QR Codes</h2>
        <details className="mt-2">
          <summary className="cursor-pointer text-blue-600">Are QR codes free to use?</summary>
          <p className="mt-1 text-gray-600">Yes! Generating a QR code is free and can be scanned unlimited times.</p>
        </details>
        <details className="mt-2">
          <summary className="cursor-pointer text-blue-600">Do QR codes expire?</summary>
          <p className="mt-1 text-gray-600">Static QR codes do not expire, but dynamic ones may depend on the service provider.</p>
        </details>
      </div>


    </div>
  )
}
