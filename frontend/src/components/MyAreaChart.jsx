"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// 📅 Generate 90 days of realistic dummy rest data
const generateRestData = () => {
  const data = [];
  const today = new Date("2024-06-30");
  for (let i = 89; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);

    // Simulate avg rest between 90–120s, user rest 80–150s with variation
    const averageRestTime = Math.floor(Math.random() * 30) + 90;
    let restTime;

    // Randomly simulate days where user rests more or less than average
    const variation = Math.random();
    if (variation < 0.3) {
      restTime = averageRestTime + Math.floor(Math.random() * 30); // User rested more
    } else if (variation < 0.6) {
      restTime = averageRestTime - Math.floor(Math.random() * 20); // User rested less
    } else {
      restTime = averageRestTime; // Equal
    }

    data.push({
      date: date.toISOString().split("T")[0], // Format YYYY-MM-DD
      restTime,
      averageRestTime,
    });
  }
  return data;
};

const chartData = generateRestData();

const chartConfig = {
  restTime: {
    label: "Rest Time (s)",
    color: "hsl(var(--chart-6))",
  },
  averageRestTime: {
    label: "Avg Rest Time (s)",
    color: "hsl(var(--chart-7))",
  },
};

export default function MyAreaChart() {
  const [timeRange, setTimeRange] = React.useState("90d");

  // ⏱️ Filter data based on selected time range
  const filteredData = React.useMemo(() => {
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") daysToSubtract = 30;
    if (timeRange === "7d") daysToSubtract = 7;

    const startDate = new Date(referenceDate);
    startDate.setDate(referenceDate.getDate() - daysToSubtract);

    return chartData.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate;
    });
  }, [timeRange]);

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Rest Time Analysis</CardTitle>
          <CardDescription>
            Compare your daily rest time with the average rest trend.
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select time range"
          >
            <SelectValue placeholder="Last 90 days" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 90 days
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillRestTime" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-restTime)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-restTime)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillAverageRestTime" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-averageRestTime)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-averageRestTime)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

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
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="restTime"
              type="natural"
              fill="url(#fillRestTime)"
              stroke="var(--color-restTime)"
              strokeWidth={2}
              animationDuration={1000}
              isAnimationActive={true}
              stackId="a"
            />
            <Area
              dataKey="averageRestTime"
              type="natural"
              fill="url(#fillAverageRestTime)"
              stroke="var(--color-averageRestTime)"
              strokeWidth={2}
              animationDuration={1000}
              isAnimationActive={true}
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
