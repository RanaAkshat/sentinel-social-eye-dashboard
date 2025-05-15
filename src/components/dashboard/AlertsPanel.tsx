import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, AlertTriangle } from "lucide-react";
import { getPlatformColor } from "@/data/mockData"; // keep this if you use the badge colors
import { fetchThreats } from "@/services/api"; // ✅ adjust this path if needed

const AlertsPanel = () => {
  const [alerts, setAlerts] = useState<any[]>([]);

  useEffect(() => {
    const loadAlerts = async () => {
      try {
        const threats = await fetchThreats();
        const processed = threats.slice(0, 5).map((t: any, idx: number) => ({
          id: t.id || `alert-${Date.now()}-${idx}`,
          message: `🔴 ${t.Threat_Category} detected: ${t.Tweet}`,
          time: new Date().toLocaleTimeString(),
          severity: t.Threat_Category.includes("Violence") ? "high"
                   : t.Threat_Category.includes("Cyberbullying") ? "medium"
                   : "low",
          platform: "twitter", // update if you have platform info
        }));
        setAlerts(processed);
      } catch (error) {
        console.error("Error loading threats:", error);
      }
    };

    loadAlerts(); // load once on mount

    const interval = setInterval(() => {
      loadAlerts(); // refresh every 10 seconds
    }, 10000);

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
