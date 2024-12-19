import * as React from "react";
import { UserProfile } from "@/components/UserProfile";
import { NavBar } from "@/components/NavBar";
import { User } from "@/types/user";

const mockUser: User = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  password: "hashed_password",
  phone: "+1 234 567 8900",
  profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
  languageCode: "en",
  country: "United States",
  city: "San Francisco",
  latitude: 37.7749,
  longitude: -122.4194,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const Profile = () => {
  return (
    <div>
      <NavBar />
      <div className="container py-8">
        <UserProfile user={mockUser} />
      </div>
    </div>
  );
};

export default Profile;