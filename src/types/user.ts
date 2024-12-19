export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  socialLoginId?: string;
  profileImage?: string;
  languageCode?: string;
  country?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
  createdAt: Date;
  updatedAt: Date;
}