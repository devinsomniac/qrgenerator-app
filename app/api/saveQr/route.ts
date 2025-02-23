import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req:NextRequest) => {
    const session = await auth()
    const userName = session?.user?.name
    if(session){
        try{
            console.log(userName)
            return NextResponse.json({message:'QR Code Saved'})
        }catch(e){
            return {
                status: 500,
                body: {error: 'Internal Server Error'}
            }
        }
    }
}