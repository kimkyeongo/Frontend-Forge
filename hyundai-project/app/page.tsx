'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-background text-foreground">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold">Welcome to the Dashboard App</h1>
                <p className="text-muted-foreground">Click below to enter your dashboard</p>
                <Button asChild>
                    <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
            </div>
        </main>
    )
}