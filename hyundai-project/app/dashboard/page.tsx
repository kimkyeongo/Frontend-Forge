'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Users, DollarSign, ShoppingCart } from "lucide-react"

export default function Dashboard() {
    return (
        <main className="p-6 space-y-6">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                            <Users className="w-4 h-4" /> Total Users
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-2xl font-bold">1,245</CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                            <ShoppingCart className="w-4 h-4" /> Orders
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-2xl font-bold">512</CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                            <DollarSign className="w-4 h-4" /> Revenue
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-2xl font-bold">$23,870</CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                            <BarChart3 className="w-4 h-4" /> Growth
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-2xl font-bold">+18%</CardContent>
                </Card>
            </section>
        </main>
    )
}