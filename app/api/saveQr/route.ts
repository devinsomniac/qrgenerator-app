import { auth } from "@/auth";
import { db } from "@/lib/db";
import { qrCodes } from "@/lib/db/schema";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req:NextRequest) => {
    const session = await auth()
    const userName = session?.user?.name
    const user_id = session?.user?.id
    if(session){
        try{
            console.log(userName)
            const body = await req.json()
            const {qrCodeUrl,type,content} = body
            const data = await db.insert(qrCodes).values({
                user_id,
                type,
                content,
                qrCodeUrl,
                
            })
        }catch(e){
            return {
                status: 500,
                body: {error: 'Internal Server Error'}
            }
        }
    }
}