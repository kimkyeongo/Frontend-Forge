import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Users, DollarSign, ShoppingCart } from "lucide-react"

export default function Dashboard() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg p-4">
                <h1 className="text-2xl font-bold mb-6">MyDashboard</h1>
                <nav className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-700">
                        <BarChart3 className="w-5 h-5" /> Dashboard
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                        <Users className="w-5 h-5" /> Users
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                        <ShoppingCart className="w-5 h-5" /> Orders
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <header className="mb-6">
                    <h2 className="text-3xl font-bold">Dashboard</h2>
                </header>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                <Users className="w-4 h-4" />
                                Total Users
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-2xl font-bold">1,245</CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                <ShoppingCart className="w-4 h-4" />
                                Orders
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-2xl font-bold">512</CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                <DollarSign className="w-4 h-4" />
                                Revenue
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-2xl font-bold">$23,870</CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                <BarChart3 className="w-4 h-4" />
                                Growth
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-2xl font-bold">+18%</CardContent>
                    </Card>
                </section>
            </main>
        </div>
    )
}
