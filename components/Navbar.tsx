import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { auth, signIn, signOut } from "@/auth";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

const Navbar = async () => {
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
            {session && session?.user?.image ? (
                <>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Image src={session.user.image} alt="profile" height={50} width={50} className="rounded-full border-gray-500 border-2" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mr-5">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <Link href="/qrdashboard">
                            <DropdownMenuItem>My QR Codes</DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem>
                                <form
                                    action={async () => {
                                        "use server"
                                        await signOut({redirectTo: "/"});
                                    }}
                                >
                                    <Button type="submit">Log Out</Button>
                                </form>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            )
                :
                <form
                    action={async () => {
                        "use server";
                        await signIn("google");
                    }}
                >
                    <Button type="submit">Signin with Google</Button>
                </form>
            }
        </div>
    );
};

export default Navbar;
