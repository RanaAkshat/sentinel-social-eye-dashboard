
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, AlertTriangle } from "lucide-react";
import { recentAlerts, getPlatformColor } from "@/data/mockData";

const AlertsPanel = () => {
  const [alerts, setAlerts] = useState<any[]>([]);
  
  useEffect(() => {
    // Add alerts one by one for animation effect
    const loadAlerts = async () => {
      const loadedAlerts: any[] = [];
      for (let i = 0; i < recentAlerts.length; i++) {
        loadedAlerts.push(recentAlerts[i]);
        setAlerts([...loadedAlerts]);
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    };
    
    loadAlerts();
    
    // Add new alert every 20 seconds
    const interval = setInterval(() => {
      const platforms = ["twitter", "instagram", "facebook", "reddit"];
      const randomPlatform = platforms[Math.floor(Math.random() * platforms.length)];
      const threatTypes = ["Hate Speech", "Cyberbullying", "Violence", "Public Safety", "Fake Account"];
      const randomThreatType = threatTypes[Math.floor(Math.random() * threatTypes.length)];
      
      const newAlert = {
        id: `alert-${Date.now()}`,
        message: `🔴 ${randomThreatType} detected in post by @user${Math.floor(Math.random() * 1000)}`,
        time: "Just now",
        severity: "high" as const,
        platform: randomPlatform
      };
      setAlerts(prev => [newAlert, ...prev.slice(0, 3)]);
    }, 20000);
    
    return () => clearInterval(interval);
  }, []);
  
  const getAlertStyles = (severity: string) => {
    switch (severity) {
      case "high":
        return "border-l-4 border-threat-hate animate-pulse-alert";
      case "medium":
        return "border-l-4 border-threat-cyberbully";
      case "low":
        return "border-l-4 border-threat-safety";
      default:
        return "";
    }
  };
  
  return (
    <Card className="col-span-2 overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" /> Real-Time Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[180px] text-muted-foreground">
              <AlertTriangle className="h-8 w-8 mb-2" />
              <p>No alerts at this time</p>
            </div>
          ) : (
            alerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-3 bg-card border rounded-md animate-fade-in ${getAlertStyles(alert.severity)}`}
              >
                <div className="flex justify-between items-start">
                  <p className="font-medium">{alert.message}</p>
                  <Badge className={getPlatformColor(alert.platform)}>
                    {alert.platform.charAt(0).toUpperCase()}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;
