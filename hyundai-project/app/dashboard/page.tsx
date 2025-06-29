'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Users, DollarSign, ShoppingCart } from "lucide-react"

interface DashboardMetric {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}

const Dashboard: React.FC = () => {
    const metrics: DashboardMetric[] = [
        { icon: <Users className="w-4 h-4" />, title: "Total Users", value: "1,245" },
        { icon: <ShoppingCart className="w-4 h-4" />, title: "Orders", value: "512" },
        { icon: <DollarSign className="w-4 h-4" />, title: "Revenue", value: "$23,870" },
        { icon: <BarChart3 className="w-4 h-4" />, title: "Growth", value: "+18%" },
    ];

    return (
        <main className="p-4 md:p-6 space-y-4 md:space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Dashboard</h1>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((metric, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle 
                                className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
                                aria-label={metric.title}
                            >
                                {metric.icon} {metric.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-2xl font-bold">
                            {metric.value}
                        </CardContent>
                    </Card>
                ))}
            </section>
        </main>
    )
}

export default Dashboard;