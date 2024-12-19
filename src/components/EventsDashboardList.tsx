import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { EventSmallCard } from "./EventSmallCard";
import { useState } from "react";

export function EventsDashboardList({ events }) {
  const now = new Date();
  const pastEvents = events.filter((event) => new Date(event.date) < now);
  const goingEvents = events.filter((event) => new Date(event.date) >= now);

  const [currentTab, setCurrentTab] = useState("all");

  let displayedEvents;
  switch (currentTab) {
    case "all":
      displayedEvents = events;
      break;
    case "going":
      displayedEvents = goingEvents;
      break;
    case "past":
      displayedEvents = pastEvents;
      break;
    default:
      displayedEvents = events;
  }

  return (
    <Tabs defaultValue="all" onValueChange={(value) => setCurrentTab(value)}>
      <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="going">Going</TabsTrigger>
        <TabsTrigger value="past">Past</TabsTrigger>
      </TabsList>

      <TabsContent value={currentTab} className="flex overflow-x-auto gap-4">
        {displayedEvents.map((event) => (
          <EventSmallCard event={event} />
        ))}
      </TabsContent>
    </Tabs>
  );
}
