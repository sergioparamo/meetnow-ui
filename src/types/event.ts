export interface Event {
  id: string;
  userId: string;
  communityId: string; // Added this field
  name: string;
  title: string;
  description?: string;
  date: Date;
  location: string;
  imageUrl: string;
  attendees: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CommunityEvent {
  id: string;
  eventId: string;
  communityId: string;
  createdAt: Date;
}