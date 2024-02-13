"use client"

import { Tinos } from "next/font/google"
import Image from "next/image" 
import Link from "next/link"

import { Button } from "@/components/ui/button"

const font = Tinos({ 
    weight: "400", 
    subsets: ["latin"]
});

export const LandingNavbar = () => {

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link 
                href="/"
                className="flex items-center"
                >
                    <div className="relative h-8 w-8 mr-4">
                        <Image 
                            src="/logo.png"
                            alt="Logo"
                            fill
                        />
                    </div>
                    {/* <h1 className={cn("text-2xl font-bold text-white", font.className)}>Vaut</h1> */}
            </Link>
            <div className="flex items-center gap-x-2">
                <Link href="https://github.com/C0deMunk33/bespoke_automata">
                    <Button variant="outline" className="rounded-full">
                        GitHub
                    </Button>
                </Link>
                <Link href="https://discord.gg/NHFMcsh8pJ">
                    <Button variant="outline" className="rounded-full">
                        Discord
                    </Button>
                </Link>
                <Link href="https://twitter.com/icodeagents">
                    <Button variant="outline" className="rounded-full">
                        Contact
                    </Button>
                </Link>
            </div>
        </nav>
    )
}