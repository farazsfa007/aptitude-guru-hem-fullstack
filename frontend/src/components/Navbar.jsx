import React from "react";
import { useNavigate } from "react-router-dom";
import { getUser, logout } from "../utils/auth";
import { FaRegUser } from "react-icons/fa";

export default function Navbar() {
    const nav = useNavigate();
    const user = getUser();

    const handleLogout = () => {
        logout();
        nav("/login");
    };

    return (
        <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-lg">
        <h1 className="text-xl font-bold tracking-tight">LMS Portal</h1>

        {user && (
            <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-sm font-medium">
                <FaRegUser className="h-4 w-4 text-gray-400" />
                {user.name}
            </span>
            <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full transition-all duration-300"
            >
                Logout
            </button>
            </div>
        )}
        </nav>
    );
}