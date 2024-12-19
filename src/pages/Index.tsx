import * as React from "react";
import { EventCard } from "@/components/EventCard";
import { CommunityCard } from "@/components/CommunityCard";
import { NavBar } from "@/components/NavBar";
import { mockEvents, mockCommunities } from "@/data/mockData";
import { Calendar } from "@/components/ui/calendar";

const Index = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [events, setEvents] = React.useState(mockEvents);
  const [communities] = React.useState(mockCommunities);
  const [filters, setFilters] = React.useState<{
    category?: string;
    date?: Date;
    location?: string;
  }>({});

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      !filters.category || event.category === filters.category;

    const matchesDate =
      !filters.date ||
      new Date(event.date).toDateString() ===
        new Date(filters.date).toDateString();

    return matchesSearch && matchesCategory && matchesDate;
  });

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <div className="container py-8 space-y-8">
        {/* <div className="flex justify-between items-start">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Discover Events</h1>
            <p className="text-muted-foreground text-lg">
              Find and join amazing events happening around you
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="max-w-md">
            <SearchBar onSearch={setSearchQuery} />
          </div>
          
          <EventFilters onFilterChange={setFilters} />
        </div> */}

        <Calendar className="rounded-md border border-muted p-4 my-4cd .." />

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Incoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your groups</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communities.map((community) => (
                <CommunityCard key={community.id} community={community} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your topics</h2>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Agenda</h2>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
