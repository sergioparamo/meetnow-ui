export interface SubscriptionPlan {
  id: string;
  name: string;
  description?: string;
  price: number;
  maxEventsPerMonth: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  tier: 'free' | 'pro' | 'enterprise';
  paymentStatus?: 'pending' | 'completed' | 'failed';
  expirationDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Payment {
  id: string;
  userId: string;
  amount: number;
  paymentDate: Date;
  subscriptionId: string;
  paymentStatus: 'completed' | 'failed' | 'pending';
}