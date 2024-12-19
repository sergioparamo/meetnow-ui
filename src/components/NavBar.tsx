import * as React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/types/user";
import { ChevronDown } from "lucide-react";

const mockUser: User = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  password: "hashed_password",
  profileImage:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
  languageCode: "en",
  country: "United States",
  city: "San Francisco",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          MeetNow
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/" className="px-4 py-2">
            Social
          </Link>
          <Link to="/dashboard" className="flex items-center gap-2 px-4 py-1">
            <span>Chat</span>
          </Link>
          <Link to="/notifications" className="flex items-center gap-2 px-4 py-1">
            <span>Notifications</span>
          </Link>
          <div className="relative">
            <button
              className="flex items-center gap-2 px-4 py-2"
              onClick={toggleDropdown}
            >
              <Avatar className="h-11 w-11">
                <AvatarImage src={mockUser.profileImage} alt={mockUser.name} />
                <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-0 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <Link
                  to="/my-events"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  My Events
                </Link>
                <Link
                  to="/my-groups"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  My Groups
                </Link>
                <hr className="my-3" />
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Settings
                </Link>
                <Link
                  to="/logout"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
