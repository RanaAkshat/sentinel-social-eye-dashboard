
import { Search, Bell, ChartBar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarTrigger,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gradient">Sentinel</span>
            <SidebarTrigger />
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel>Search</SidebarGroupLabel>
          <SidebarGroupContent className="space-y-4 p-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search tweets..." 
                className="pl-9" 
              />
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Filters</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="p-2">
              <SidebarMenuItem>
                <SidebarMenuButton className="flex w-full items-center space-x-2">
                  <Filter className="h-4 w-4" />
                  <span className="text-sm">Filter by Date</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <div className="px-3 py-2">
                <h4 className="mb-2 text-sm font-medium">Threat Categories</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="hate-speech" defaultChecked />
                    <Label htmlFor="hate-speech" className="text-sm text-threat-hate">Hate Speech</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="cyberbullying" defaultChecked />
                    <Label htmlFor="cyberbullying" className="text-sm text-threat-cyberbully">Cyberbullying</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="violence" defaultChecked />
                    <Label htmlFor="violence" className="text-sm text-threat-violence">Violence</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="public-safety" defaultChecked />
                    <Label htmlFor="public-safety" className="text-sm text-threat-safety">Public Safety</Label>
                  </div>
                </div>
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex flex-col space-y-2">
          <SidebarMenuButton className="flex items-center space-x-2 w-full">
            <Bell className="h-4 w-4" />
            <span className="text-sm">Notifications</span>
          </SidebarMenuButton>
          
          <SidebarMenuButton className="flex items-center space-x-2 w-full">
            <ChartBar className="h-4 w-4" />
            <span className="text-sm">Reports</span>
          </SidebarMenuButton>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
