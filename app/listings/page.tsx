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
}

export default function Listings() {
  const [lands, setLands] = useState<Land[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedLand, setSelectedLand] = useState<Land | null>(null);

  useEffect(() => {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const fetchListings = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/listings`);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText || "Failed to fetch listings"}`);
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
    return <p className="text-center py-16 text-blue-600 text-lg font-semibold">Loading listings...</p>;
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <label className="text-red-600 font-semibold block text-lg">Error: {error}</label>
        <label className="text-gray-600 block mt-2 text-sm">Please check your internet connection or try again later.</label>
      </div>
    );
  }

  return (
    <div className="font-sans">
      <Navbar />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-10 text-blue-800">Land for Sale</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {lands.map((land) => (
              <div key={land.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
                {land.image_url ? (
                  <Image
                    src={land.image_url}
                    alt={land.title}
                    width={500}
                    height={300}
                    className="w-full h-52 object-cover"
                  />
                ) : (
                  <div className="h-52 bg-gray-200 flex items-center justify-center text-gray-500 text-lg">
                    No Image Available
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-800">{land.title}</h3>
                  <p className="text-gray-700 font-medium">{land.size} | {land.price}</p>
                  <p className="text-gray-600 text-sm mb-4">{land.description}</p>
                  <button
                    onClick={() => setSelectedLand(land)}
                    className="text-white bg-blue-600 hover:bg-blue-700 font-semibold px-4 py-2 rounded-md transition duration-200"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Viewing Details */}
      {selectedLand && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setSelectedLand(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-lg font-bold"
            >
              ✕
            </button>
            <div className="flex flex-col md:flex-row">
              {selectedLand.image_url && (
                <Image
                  src={selectedLand.image_url}
                  alt={selectedLand.title}
                  width={500}
                  height={300}
                  className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                />
              )}
              <div className="md:ml-6 mt-4 md:mt-0">
                <h3 className="text-2xl font-bold text-blue-800">{selectedLand.title}</h3>
                <p className="text-gray-700 font-medium">{selectedLand.size} | {selectedLand.price}</p>
                <p className="text-gray-600 mt-2">{selectedLand.description}</p>
                <button
                  onClick={() => setSelectedLand(null)}
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
