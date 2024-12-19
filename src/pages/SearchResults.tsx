import { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import { EventCard } from "@/components/EventCard";
import { Event } from "@/types/event";
import { Button } from "@/components/ui/button";
import { Map, List } from "lucide-react";

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q") || "";
  const events: Event[] = location.state?.events || [];
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <div className="container py-8 space-y-8">
        <div className="flex justify-between items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Search Results</h1>
            <p className="text-muted-foreground text-lg">
              Showing results for "{searchQuery}"
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "map" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("map")}
            >
              <Map className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {viewMode === "list" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">
              Map view will be implemented with a maps service
            </p>
          </div>
        )}

        {events.length === 0 && (
          <p className="text-center text-muted-foreground">
            No events found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;