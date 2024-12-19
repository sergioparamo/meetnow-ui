import { useParams } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import { mockCommunities, mockCommunityRoles } from "@/data/mockData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateEventDialog } from "@/components/CreateEventDialog";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CommunityDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const community = mockCommunities.find((c) => c.id === id);
  const [isJoined, setIsJoined] = useState(false);
  
  // Check if current user (hardcoded as "user1" for now) is an admin
  const userRole = mockCommunityRoles.find(
    role => role.userId === "user1" && role.communityId === id
  )?.role;
  
  const isAdmin = userRole === "admin";

  if (!community) {
    return <div>Community not found</div>;
  }

  const handleJoinCommunity = () => {
    setIsJoined(!isJoined);
    toast({
      title: isJoined ? "Left community" : "Joined community",
      description: isJoined 
        ? `You have left ${community.name}`
        : `You have joined ${community.name}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <div className="container py-8 space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={community.imageUrl} alt={community.name} />
              <AvatarFallback>{community.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-4xl font-bold tracking-tight">{community.name}</h1>
              {/* Location: */}
              <div>
                <p className="text-muted-foreground text-lg">
                  Location: <span className="font-semibold">{community.location}</span>
                </p>
              </div>
              <div className="flex items-center text-muted-foreground mt-2">
                <Users className="mr-2 h-4 w-4" />
                <span>50+ members</span>
              </div>
              <div>
                <p className="text-muted-foreground text-lg">
                  Organized by: <span className="font-semibold">{community.creatorId}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button 
              variant={isJoined ? "outline" : "default"}
              onClick={handleJoinCommunity}
            >
              {isJoined ? "Leave Community" : "Join Community"}
            </Button>
            {isAdmin && <CreateEventDialog onEventCreate={() => {}} />}
          </div>
        </div>

        <div className="prose max-w-none">
          <p>{community.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetails;