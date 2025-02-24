import { useState } from "react";

const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Sidebar Toggle Button (for mobile) */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-20 left-4 p-2 bg-gray-800 text-white rounded lg:hidden z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`w-64 h-screen bg-gray-800 text-white p-4 fixed left-0 top-16 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        } lg:translate-x-0 transition-transform duration-200 ease-in-out`}
      >
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <ul>
          <li className="py-2 hover:bg-gray-700 rounded transition duration-200">
            <a href="#" className="block">
              Dashboard
            </a>
          </li>
          <li className="py-2 hover:bg-gray-700 rounded transition duration-200">
            <a href="#" className="block">
              Land Listings
            </a>
          </li>
        </ul>
      </aside>

      {/* Overlay for mobile (click to close sidebar) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default AdminSidebar;