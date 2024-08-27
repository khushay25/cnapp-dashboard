import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { MdNotificationsActive } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";

function Header({ onSearchChange }) {
  const [hovered, setHovered] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <div className="py-2 px-10 text-sm text-gray-500 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <p>Home</p>
        <MdNavigateNext />
        <p className="text-blue-900 font-bold">Dashboard V2</p>
      </div>
      <div className="relative flex items-center space-x-2 border-2 border-blue-100 bg-blue-50 rounded-md text-gray-400 w-80 p-2">
        <IoSearchOutline />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search Widgets..."
          className="w-full bg-transparent border-none outline-none pl-2"
        />
      </div>
      <div className="flex items-center space-x-8">
        <div
          className="relative group"
          onMouseEnter={() => setHovered("notifications")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="transition-transform duration-300 transform group-hover:scale-105">
            <MdNotificationsActive size={20} />
          </div>
          {hovered === "notifications" && (
            <span className="absolute top-8 -left-6 bg-gray-300 text-white text-xs px-2 py-1 rounded w-20">
              Hire Me :)
            </span>
          )}
        </div>
        <div
          className="relative group"
          onMouseEnter={() => setHovered("user")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="transition-transform duration-300 transform group-hover:scale-105">
            <FaUserLarge size={16} />
          </div>
          {hovered === "user" && (
            <span className="absolute top-8 -left-6 bg-gray-300 text-white text-xs px-2 py-1 rounded">
              Welcome!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
