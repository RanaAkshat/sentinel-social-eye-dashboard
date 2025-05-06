
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { trendData } from "@/data/mockData";

const TrendsChart = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  
  useEffect(() => {
    // Stop animation after 2 seconds
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card p-3 border rounded-lg shadow-md">
          <p className="font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={`tooltip-${index}`} className="flex justify-between">
              <span className="text-xs" style={{ color: entry.color }}>
                {entry.name}:
              </span>
              <span className="text-xs ml-2">{entry.value}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="col-span-3 overflow-hidden transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle>Threat Trends (Last 7 Days)</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="date" 
              stroke="hsl(var(--muted-foreground))" 
              tick={{ fill: "hsl(var(--muted-foreground))" }} 
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))" 
              tick={{ fill: "hsl(var(--muted-foreground))" }} 
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="hateSpeed"
              name="Hate Speech"
              stroke="hsl(var(--threat-hate))"
              strokeWidth={2}
              dot={{ r: 4 }}
              isAnimationActive={isAnimating}
            />
            <Line
              type="monotone"
              dataKey="cyberbullying"
              name="Cyberbullying"
              stroke="hsl(var(--threat-cyberbully))"
              strokeWidth={2}
              dot={{ r: 4 }}
              isAnimationActive={isAnimating}
            />
            <Line
              type="monotone"
              dataKey="violenceIncitement"
              name="Violence"
              stroke="hsl(var(--threat-violence))"
              strokeWidth={2}
              dot={{ r: 4 }}
              isAnimationActive={isAnimating}
            />
            <Line
              type="monotone"
              dataKey="publicSafety"
              name="Public Safety"
              stroke="hsl(var(--threat-safety))"
              strokeWidth={2}
              dot={{ r: 4 }}
              isAnimationActive={isAnimating}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default TrendsChart;
