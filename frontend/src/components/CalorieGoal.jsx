
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,

} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"
const chartData = [
    { month: "January", calorie: 186 },
    { month: "February", calorie: 305 },
    { month: "March", calorie: 237 },
    { month: "April", calorie: 73 },
    { month: "May", calorie: 209 },
    { month: "June", calorie: 214 },
]
const chartConfig = {
    calorie: {
        label: "calorie",
        color: "hsl(var(--chart-1))",
    },
}
export default function CalorieGoal() {
    const [goal, setGoal] = useState(350);
    console.log(goal);
    function onClick(adjustment) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }
    return (
        <div className='col-span-4'> 
            <Card className='bg-[#ee8d7a37]'>
                <CardHeader>
                    <CardTitle>Calorie Goal</CardTitle>
                    <CardDescription>Set your daily activity goal</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-center space-x-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 shrink-0 rounded-full"
                            onClick={() => onClick(-10)}
                            disabled={goal <= 200}
                        >
                            <Minus />
                            <span className="sr-only">Decrease</span>
                        </Button>
                        <div className="flex-1 text-center">
                            <div className="text-5xl font-bold tracking-tighter">
                                {goal}
                            </div>
                            <div className="text-[0.70rem] uppercase text-muted-foreground">
                                Calories/day
                            </div>
                        </div>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 shrink-0 rounded-full"
                            onClick={() => onClick(+10)}
                            disabled={goal >= 400}
                        >
                            <Plus />
                            <span className="sr-only">Increase</span>
                        </Button>
                    </div>
                    <ChartContainer config={chartConfig}>
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Bar dataKey="calorie" fill="hsl(20, 90%, 50%)" radius={8} />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter>
                    <Button className='w-full'>Submit</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
