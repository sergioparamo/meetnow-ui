import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface EventFiltersProps {
  onFilterChange: (filters: {
    category?: string;
    date?: Date;
    location?: string;
  }) => void;
}

const categories = [
  "All",
  "Technology",
  "Health",
  "Arts",
  "Social",
  "Professional",
];

export function EventFilters({ onFilterChange }: EventFiltersProps) {
  const [date, setDate] = React.useState<Date>();
  const [category, setCategory] = React.useState<string>("All");

  const handleDateSelect = (date: Date | undefined) => {
    setDate(date);
    onFilterChange({
      date,
      category: category === "All" ? undefined : category,
    });
  };

  const handleCategorySelect = (newCategory: string) => {
    setCategory(newCategory);
    onFilterChange({
      date,
      category: newCategory === "All" ? undefined : newCategory,
    });
  };

  return (
    <div className="flex flex-wrap gap-4 items-center">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={category === cat ? "default" : "outline"}
            onClick={() => handleCategorySelect(cat)}
            className="h-8"
          >
            {cat}
          </Button>
        ))}
      </div>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "h-8 justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : "Pick a date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
