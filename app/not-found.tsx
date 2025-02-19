// /app/404.tsx
"use client";

import Link from "next/link";
import Footer from "./component/footer";
import Navbar from "./component/navbar";

const PageNotFound = () => {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main className="flex items-center justify-center min-h-screen bg-gray-100 py-16 px-4">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
          <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-6">
            Sorry, the page you're looking for does not exist or has been moved.
          </p>
          <Link href="/" passHref>
            <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors duration-300">
              Go Back to Home
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageNotFound;
