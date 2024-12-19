export type UserRole = 'admin' | 'organizer' | 'member';

export interface CommunityMemberRole {
  userId: string;
  communityId: string;
  role: UserRole;
}

export interface EventParticipant {
  userId: string;
  eventId: string;
  joinedAt: Date;
}