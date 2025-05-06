
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/DashboardSidebar";
import ThemeToggle from "@/components/ThemeToggle";
import StatsCard from "@/components/dashboard/StatsCard";
import ThreatChart from "@/components/dashboard/ThreatChart";
import TrendsChart from "@/components/dashboard/TrendsChart";
import ThreatsTable from "@/components/dashboard/ThreatsTable";
import AlertsPanel from "@/components/dashboard/AlertsPanel";
import PlatformStats from "@/components/dashboard/PlatformStats";
import { ChartBar, AlertTriangle, Bell, Filter } from "lucide-react";
import { tweetStats } from "@/data/mockData";

const Dashboard = () => {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        
        <div className="flex-1 overflow-auto">
          <header className="sticky top-0 z-10 flex items-center justify-end border-b bg-background/80 backdrop-blur p-4">
            <ThemeToggle />
          </header>
          
          <main className="container pt-6 pb-12">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2 text-gradient">Social Media Crime Monitoring</h1>
              <p className="text-muted-foreground">Multi-platform analytics and threat detection</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
              <StatsCard 
                title="Total Posts Analyzed" 
                value={tweetStats.totalTweets} 
                icon={<ChartBar className="h-5 w-5" />} 
                description="Across all platforms" 
              />
              <StatsCard 
                title="Threats Detected" 
                value={tweetStats.threatsDetected} 
                icon={<AlertTriangle className="h-5 w-5" />} 
                description="All categories" 
              />
              <PlatformStats />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <TrendsChart />
              <AlertsPanel />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
              <ThreatChart />
              <div className="col-span-3">
                <ThreatsTable />
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
