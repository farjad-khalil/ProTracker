import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Pie, PieChart, Label } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

export function MyPieChart({ workouts }) {
    // 🏋️‍♂️ Count occurrences of each exercise type
    const exerciseCounts = React.useMemo(() => {
        return workouts.reduce((acc, workout) => {
            acc[workout.exerciseType] = (acc[workout.exerciseType] || 0) + 1;
            return acc;
        }, { strength: 0, cardio: 0, balance: 0, stretching: 0 });
    }, [workouts]);

    // 🎨 Chart Data with NEW COLORS
    const chartData = [
        { type: "Strength", count: exerciseCounts.strength, fill: "#8B5CF6" }, // Purple
        { type: "Cardio", count: exerciseCounts.cardio, fill: "#EF4444" }, // Red
        { type: "Balance", count: exerciseCounts.balance, fill: "#3B82F6" }, // Blue
        { type: "Stretching", count: exerciseCounts.stretching, fill: "#22C55E" }, // Green
    ];

    // 📊 Total exercises performed
    const totalExercises = chartData.reduce((acc, curr) => acc + curr.count, 0);

    return (
        <Card className="flex flex-col  text-black   hover:shadow-xl transition-all duration-300">
            <CardHeader className="items-center pb-0">
                <CardTitle className="text-lg font-semibold">Workout Distribution</CardTitle>
                <CardDescription className="text-gray-600">Based on your workout history</CardDescription>
            </CardHeader>

            <CardContent className="flex-1 pb-0">
                <ChartContainer config={{}} className="mx-auto aspect-square max-h-[250px]">
                    <PieChart>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <Pie
                            data={chartData}
                            dataKey="count"
                            nameKey="type"
                            innerRadius={60}
                            outerRadius={90}
                            strokeWidth={5}
                            isAnimationActive={true}
                            animationDuration={1000}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                                                <tspan x={viewBox.cx} y={viewBox.cy} className="fill-black text-3xl font-bold" >
                                                    {totalExercises}
                                                </tspan>
                                                <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-gray-700 text-sm" >
                                                    Exercises
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>

            <CardFooter className="flex-col gap-2 text-sm text-gray-300">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Showing total workouts categorized by type <TrendingUp className="h-4 w-4 text-green-400" />
                </div>
            </CardFooter>
        </Card>
    );
}
