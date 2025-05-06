
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { platformStats } from "@/data/mockData";

const PlatformStats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="col-span-2 overflow-hidden transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-sm font-medium">Platform Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(platformStats).map(([platform, count], index) => (
            <div 
              key={platform}
              className={`flex items-center justify-between p-2 rounded-md border ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className={cn(
                    getPlatformColor(platform),
                    "h-2 w-2 rounded-full p-0 border-none"
                  )}
                />
                <span className="text-sm font-medium">{getPlatformName(platform)}</span>
              </div>
              <div className="text-sm font-mono">{count.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const getPlatformName = (platform: string): string => {
  const map: Record<string, string> = {
    twitter: "Twitter",
    instagram: "Instagram",
    facebook: "Facebook",
    reddit: "Reddit"
  };
  return map[platform] || platform;
};

const getPlatformColor = (platform: string): string => {
  const map: Record<string, string> = {
    twitter: "bg-blue-400",
    instagram: "bg-pink-500",
    facebook: "bg-blue-600",
    reddit: "bg-orange-500"
  };
  return map[platform] || "bg-primary";
};

const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export default PlatformStats;
