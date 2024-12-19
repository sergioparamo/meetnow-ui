import { Card, CardContent } from "@/components/ui/card";

export function EventSmallCard({ event }) {
  return (
    <Card
      className="flex-shrink-0 w-60 p-4 border border-muted rounded-lg bg-background hover:shadow-md cursor-pointer transition-transform duration-300"
      // onClick={() => onEdit(event.id)}
    >
      <div className="text-muted-foreground text-sm mb-2">
        {new Date(event.date).toLocaleDateString()}
      </div>
      <div className="font-semibold text-lg mb-2">{event.title}</div>
      <div className="text-muted-foreground text-sm mb-2">
        {event.communityName}
      </div>
      <div className="text-muted-foreground text-sm mb-2">
        Attendees: {event.attendees}
      </div>
      <div className="text-muted-foreground text-sm">{event.location}</div>
    </Card>
  );
}
