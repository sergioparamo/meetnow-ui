import { Event } from "@/types/event";
import { Community } from "@/types/community";
import { CommunityMemberRole } from "@/types/roles";

export const mockEvents: Event[] = [
  {
    id: "1",
    userId: "user1",
    communityId: "1", // Tech Enthusiasts community
    name: "Tech Meetnow 2024",
    title: "Tech Meetnow 2024",
    description:
      "Join us for an evening of networking and tech talks from industry leaders.",
    date: new Date("2024-04-15"),
    location: "San Francisco, CA",
    imageUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2400&q=80",
    attendees: 120,
    category: "Technology",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    userId: "user2",
    communityId: "2", // Fitness First community
    name: "Yoga in the Park",
    title: "Yoga in the Park",
    description:
      "Start your weekend with a relaxing yoga session in the heart of the city.",
    date: new Date("2024-04-20"),
    location: "Central Park, NY",
    imageUrl:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=2400&q=80",
    attendees: 45,
    category: "Health",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    userId: "user3",
    communityId: "1", // Tech Enthusiasts community
    name: "Photography Workshop",
    title: "Photography Workshop",
    description:
      "Learn the basics of photography from professional photographers.",
    date: new Date("2024-04-25"),
    location: "Los Angeles, CA",
    imageUrl:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=2400&q=80",
    attendees: 30,
    category: "Arts",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockCommunities: Community[] = [
  {
    id: "1",
    name: "Tech Enthusiasts",
    description: "A community for technology lovers and innovators",
    imageUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    creatorId: "user1",
    subscriptionPlanId: "free",
    createdAt: new Date(),
    updatedAt: new Date(),
    location: "Despeñaperros, Spain",
  },
  {
    id: "2",
    name: "Fitness First",
    description: "Join us in our journey to better health and fitness",
    imageUrl:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    creatorId: "user2",
    subscriptionPlanId: "free",
    createdAt: new Date(),
    updatedAt: new Date(),
    location: "San Francisco, CA",
  },
];

export const mockCommunityRoles: CommunityMemberRole[] = [
  {
    userId: "user1",
    communityId: "1",
    role: "admin",
  },
  {
    userId: "user2",
    communityId: "2",
    role: "organizer",
  },
  {
    userId: "user3",
    communityId: "1",
    role: "member",
  },
  {
    userId: "user1",
    communityId: "2",
    role: "member",
  },
];

export const mockEventParticipants = [
  {
    userId: "user1",
    eventId: "1",
    joinedAt: new Date(),
  },
];
