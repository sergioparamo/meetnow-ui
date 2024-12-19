export interface Community {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  creatorId: string;
  subscriptionPlanId: string;
  createdAt: Date;
  updatedAt: Date;
  location: string;
}

export interface CommunityRole {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CommunityMember {
  id: string;
  userId: string;
  communityId: string;
  roleId: string;
  joinedDate: Date;
  createdAt: Date;
  updatedAt: Date;
}