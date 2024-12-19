import { NavBar } from "@/components/NavBar";
import { mockEvents, mockCommunities, mockCommunityRoles } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { EventsDashboardList } from "@/components/EventsDashboardList";
import { CommunityDashboardList } from "@/components/CommunityDashboardList";

export default function Dashboard() {
  const { toast } = useToast();
  const userRole = mockCommunityRoles.find(role => role.userId === "user1")?.role;

  if (userRole !== "admin") {
    return (
      <div className="min-h-screen bg-background">
        <NavBar />
        <div className="container py-8">
          <h1 className="text-2xl font-bold">Access Denied</h1>
          <p>You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <div className="container py-8 space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            Manage your events and communities here
          </p>
        </div>

        <Tabs defaultValue="events">
          <TabsList>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="communities">Communities</TabsTrigger>
          </TabsList>

          <TabsContent value="events" >
            <EventsDashboardList
              events={mockEvents}
            />
          </TabsContent>

          <TabsContent value="communities">
          <CommunityDashboardList
              communities={mockCommunities}
            />
          </TabsContent>
        </Tabs>

        {/* // Create Payment Status info section */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Status</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Payment Status: Pending
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}