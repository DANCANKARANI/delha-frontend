"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

interface Land {
  id: string;
  title: string;
  description: string;
  image_url: string;
  details_link: string;
}

export default function Home() {
  const [lands, setLands] = useState<Land[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // ✅ Load from .env file

    const fetchListings = async () => {
      try {
        if (!API_BASE_URL) throw new Error("API base URL is not defined!");

        const response = await fetch(`${API_BASE_URL}/listings`);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setLands(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading) return <p className="text-center py-16">Loading...</p>;

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-grey-700 text-black py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Find Your Ideal Land</h1>
          <p className="text-lg mb-6">
            Browse through our exclusive listings of land properties for your next development or investment project.
          </p>
          <a
            href="#featured"
            className="bg-red-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
          >
            View Featured Land Listings
          </a>
        </div>
      </section>

      {/* Featured Land Properties Section */}
      <section id="featured" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Featured Land Listings</h2>

          {error && <label className="text-red-600 block text-center">{error}</label>}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {lands.map((property) => (
              <div key={property.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                {property.image_url ? (
                  <Image
                    src={property.image_url}
                    alt={property.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 flex items-center justify-center bg-gray-300 text-gray-600">
                    No Image Available
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-700">{property.title}</h3>
                  <p className="text-gray-700 mb-4">{property.description}</p>
                  <a href={property.details_link} className="text-blue-600 hover:underline">
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
