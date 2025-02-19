"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

interface Land {
  id: string;
  title: string;
  description: string;
  size: string;
  price: string;
  image_url: string;
  details_link: string;
}

export default function Listings() {
  const [lands, setLands] = useState<Land[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const fetchListings = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/listings`);

        if (!response.ok) {
          throw new Error(
            `Error ${response.status}: ${
              response.statusText || "Failed to fetch listings"
            }`
          );
        }

        const data = await response.json();
        setLands(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading) {
    return <p className="text-center py-16 text-blue-600">Loading listings...</p>;
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <label className="text-red-600 font-semibold block">
          Error: {error}
        </label>
        <label className="text-gray-600 block mt-2">
          Please check your internet connection or try again later.
        </label>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Land for Sale</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {lands.map((land) => (
              <div key={land.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                {land.image_url ? (
                  <Image
                    src={land.image_url}
                    alt={land.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image Available
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-700">{land.title}</h3>
                  <p className="text-gray-700">{land.size} | {land.price}</p>
                  <p className="text-gray-600 mb-4">{land.description}</p>
                  <a href={land.details_link} className="text-blue-600 hover:underline">
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
