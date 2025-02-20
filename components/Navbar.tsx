
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { auth, signIn } from "@/auth";

const Navbar = async() => {
    const session = await auth();
    return (
        <div className="flex justify-between items-center p-4">
            <div className="flex justify-center items-center gap-2">
                <Image src={"/logo.png"} alt="logo" height={50} width={50} />
                <div>
                    <h1 className="font-bold">QRify</h1>
                    <p className="font-semibold">Generate. Scan. Connect.</p>
                </div>
            </div>
            {session ? ( 
                <Image src={session?.user?.image || ""} alt="profile" height={50} width={50} className="rounded-full border-gray-500 border-2"/>
            ) 
            :
             
            <form
                action={async () => {
                    "use server"
                    await signIn("google")
                }}
            >
                <Button type="submit">Signin with Google</Button>
            </form>
}
        </div>
    );
};

export default Navbar;
