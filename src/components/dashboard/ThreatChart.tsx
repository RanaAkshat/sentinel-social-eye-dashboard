
import { useEffect, useState } from "react";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip, 
  Legend 
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { tweetStats } from "@/data/mockData";

const ThreatChart = () => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const data = [
      {
        name: "Hate Speech",
        value: tweetStats.threatCategories.hateSpeed,
        color: "hsl(var(--threat-hate))"
      },
      {
        name: "Cyberbullying",
        value: tweetStats.threatCategories.cyberbullying,
        color: "hsl(var(--threat-cyberbully))"
      },
      {
        name: "Violence",
        value: tweetStats.threatCategories.violenceIncitement,
        color: "hsl(var(--threat-violence))"
      },
      {
        name: "Public Safety",
        value: tweetStats.threatCategories.publicSafety,
        color: "hsl(var(--threat-safety))"
      },
      {
        name: "Fake Accounts",
        value: tweetStats.threatCategories.fakeAccounts,
        color: "hsl(280 70% 60%)"
      }
    ];
    
    setChartData(data);
    
    // Stop animation after 2 seconds
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card p-3 border rounded-lg shadow-md">
          <p className="font-medium">{payload[0].name}: {payload[0].value}</p>
          <p className="text-xs text-muted-foreground">
            {Math.round((payload[0].value / tweetStats.threatsDetected) * 100)}% of total threats
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="col-span-2 overflow-hidden transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle>Threat Category Distribution</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={50}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              isAnimationActive={isAnimating}
              animationDuration={2000}
              animationBegin={0}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ThreatChart;
