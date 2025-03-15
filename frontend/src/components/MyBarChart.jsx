
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { format, parseISO, subMonths } from "date-fns";
import { WorkoutContext } from "../context/context";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { useContext, useEffect, useState } from "react";
const chartData = [
    { month: "January", exercise: 186, reps: 80 },
    { month: "February", exercise: 305, reps: 200 },
    { month: "March", exercise: 237, reps: 120 },
    { month: "April", exercise: 73, reps: 190 },
    { month: "May", exercise: 209, reps: 130 },
    { month: "June", exercise: 214, reps: 140 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
}

export default function MyBarChart({workouts}) {
    
    // ✅ Step 1: Extract and Group Data by Month
    const monthlyData = {};

    workouts.forEach(w => {
        const month = format(parseISO(w.createdAt), "yyyy-MM"); // Format: "2025-03"

        if (!monthlyData[month]) {
            monthlyData[month] = { exercise: 0, reps: 0 };
        }
        
        monthlyData[month].exercise += 1; // Count exercises
        monthlyData[month].reps += w.reps; // Sum reps
    });

    // ✅ Step 2: Get Last 6 Months for Chart
    const currentMonth = new Date();
    const last6Months = [...Array(6)].map((_, i) => format(subMonths(currentMonth, 5 - i), "yyyy-MM"));

    // ✅ Step 3: Format Data for Chart
    const chartData = last6Months.map(month => ({
        month,
        exercise: monthlyData[month]?.exercise || 0, // Use data if available, else 0
        reps: monthlyData[month]?.reps || 0
    }));

    return (
        <Card className='h-96 w-96'>
            <CardHeader>
                <CardTitle>Monthly breakdown</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent className=''>
                <ChartContainer className="min-h-[200px]" config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(5,7)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Bar dataKey="exercise" fill="var(--color-desktop)" radius={4} />
                        <Bar dataKey="reps" fill="var(--color-mobile)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="leading-none text-muted-foreground">
                    Showing data for the last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}
