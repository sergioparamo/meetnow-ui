import { useParams, useNavigate } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import { mockEvents, mockCommunities } from "@/data/mockData";
import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { EventMessageChannel } from "@/components/EventMessageChannel";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isJoined, setIsJoined] = useState(false);
  const event = mockEvents.find((e) => e.id === id);
  const community = event ? mockCommunities.find(c => c.id === event.communityId) : null;

  if (!event) {
    return <div>Event not found</div>;
  }

  const handleJoinEvent = () => {
    setIsJoined(!isJoined);
    toast({
      title: isJoined ? "Left event" : "Joined event!",
      description: isJoined 
        ? "You have successfully left the event" 
        : "You're now registered for this event.",
    });
    console.log(`User ${isJoined ? 'left' : 'joined'} event:`, event.id);
  };

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <div className="container py-8 space-y-8">
        <div className="aspect-[21/9] relative overflow-hidden rounded-lg">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">{event.title}</h1>
            <p className="text-lg text-muted-foreground mt-2">
              Organized by{" "}
              <span 
                className="text-primary cursor-pointer hover:underline"
                onClick={() => navigate(`/community/${community?.id}`)}
              >
                {community?.name}
              </span>
            </p>
            <div className="flex flex-col gap-2 mt-4 text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {new Date(event.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                {event.location}
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                {event.attendees} attending
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <p>{event.description}</p>
          </div>

          <Button 
            onClick={handleJoinEvent} 
            variant={isJoined ? "outline" : "default"}
            className="w-full md:w-auto"
          >
            {isJoined ? "Leave Event" : "Join Event"}
          </Button>

          {isJoined && (
            <div className="mt-8">
              <EventMessageChannel eventId={event.id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;