import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";
import { Event } from "@/types/event";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { mockCommunities } from "@/data/mockData";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const navigate = useNavigate();
  const community = mockCommunities.find((c) => c.id === event.communityId);

  const handleClick = () => {
    navigate(`/event/${event.id}`);
  };

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in cursor-pointer"
      onClick={handleClick}
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg line-clamp-1">
              {event.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              by{" "}
              <span
                className="text-primary cursor-pointer hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/community/${community?.id}`);
                }}
              >
                {community?.name}
              </span>
            </p>
          </div>
          <Badge variant="secondary">{event.category}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-2 mb-4">
          {event.description}
        </p>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            {new Date(event.date).toLocaleDateString()}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4" />
            {event.location}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="mr-2 h-4 w-4" />
          {event.attendees} attending
        </div>
      </CardFooter>
    </Card>
  );
}
