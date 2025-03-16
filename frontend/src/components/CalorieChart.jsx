"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// 📊 Dummy Data: Calories burned daily for the last 90 days
const chartData = Array.from({ length: 70 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (70 - i)); // Generates past 90 days

  return {
    date: date.toISOString().split("T")[0], // Format YYYY-MM-DD
    caloriesBurned: Math.floor(Math.random() * 500) + 200, // 200-700 kcal
  };
});

const chartConfig = {
  caloriesBurned: {
    label: "Calories Burned",
    color: "hsl(var(--chart-1))",
  },
};

export default function CaloriesBurnedChart() {
  // 🔥 Calculate total calories burned
  const totalCalories = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.caloriesBurned, 0);
  }, []);

  return (
    <Card className="bg-[#ee9f7a37] text-gray-900  shadow-lg hover:shadow-xl transition-all duration-300 col-span-8">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle className="text-lg font-semibold">Calories Burned</CardTitle>
          <CardDescription className="text-gray-800">
            Tracking your daily calories burned over the last 90 days.
          </CardDescription>
        </div>
        <div className="flex items-center px-6 py-4 sm:py-6">
          <span className="text-xs text-muted-foreground">Total Calories</span>
          <span className="text-lg font-bold leading-none sm:text-3xl ml-2">
            {totalCalories.toLocaleString()} kcal
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="caloriesBurned"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar
              dataKey="caloriesBurned"
              fill="hsl(10, 90%, 50%)" // 🔥 Changed to red/orange for "burned" effect
              radius={[4, 4, 0, 0]} // Slightly rounded bars
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
