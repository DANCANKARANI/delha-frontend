import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-6">
      <h2 className="text-3xl font-bold mb-8">Admin Panel</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/admin/dashboard" className="text-lg hover:text-red-600 transition duration-300">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/admin/users" className="text-lg hover:text-red-600 transition duration-300">
              Manage Users
            </Link>
          </li>
          <li>
            <Link href="/admin/orders" className="text-lg hover:text-red-600 transition duration-300">
              Manage Orders
            </Link>
          </li>
          <li>
            <Link href="/admin/reports" className="text-lg hover:text-red-600 transition duration-300">
              Reports
            </Link>
          </li>
          <li>
            <Link href="/admin/settings" className="text-lg hover:text-red-600 transition duration-300">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
