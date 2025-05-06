
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
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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
                placeholder="Search posts..." 
                className="pl-9" 
              />
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Platforms</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="p-2">
              <div className="px-3 py-2">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="twitter" defaultChecked />
                    <Label htmlFor="twitter" className="text-sm text-blue-400">Twitter</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="instagram" defaultChecked />
                    <Label htmlFor="instagram" className="text-sm text-pink-500">Instagram</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="facebook" defaultChecked />
                    <Label htmlFor="facebook" className="text-sm text-blue-600">Facebook</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="reddit" defaultChecked />
                    <Label htmlFor="reddit" className="text-sm text-orange-500">Reddit</Label>
                  </div>
                </div>
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Threat Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="p-2">
              <div className="px-3 py-2">
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
                  <div className="flex items-center space-x-2">
                    <Switch id="fake-accounts" defaultChecked />
                    <Label htmlFor="fake-accounts" className="text-sm text-purple-400">Fake Accounts</Label>
                  </div>
                </div>
              </div>
              
              <SidebarMenuItem className="mt-3">
                <SidebarMenuButton className="flex w-full items-center space-x-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span className="text-sm">Date Range</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
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
