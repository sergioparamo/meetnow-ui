import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Community } from "@/types/community";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CommunityCardProps {
  community: Community;
}

export function CommunityCard({ community }: CommunityCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/community/${community.id}`);
  };

  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in cursor-pointer"
      onClick={handleClick}
    >
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={community.imageUrl} alt={community.name} />
          <AvatarFallback>{community.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-lg">{community.name}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-2 mb-4">
          {community.description}
        </p>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="mr-2 h-4 w-4" />
          <span>50+ members</span>
        </div>
      </CardContent>
    </Card>
  );
}