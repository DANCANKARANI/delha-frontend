"use client";

import { useState, useEffect } from "react";
import "../globals.css";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/authContext";
import Image from "next/image";

interface Land {
  id: string;
  title: string;
  description: string;
  size: string;
  price: string;
  location: string;
  image_url: string;
}

const AdminDashboard = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const [lands, setLands] = useState<Land[]>([]);
  const [editingLand, setEditingLand] = useState<Land | null>(null);
  const [newImage, setNewImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newListing, setNewListing] = useState({
    title: "",
    description: "",
    size: "",
    price: "",
    location: "",
  });

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (isAuthenticated) {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
      const fetchLands = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/listings`);
          const data = await response.json();
          setLands(data);
        } catch (error) {
          console.error("Error fetching land listings:", error);
        }
      };

      fetchLands();
    }
  }, [isAuthenticated]);

  const handleDelete = async (id: string) => {
    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
      const response = await fetch(`${API_BASE_URL}/listings/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setLands(lands.filter((land) => land.id !== id));
      } else {
        console.error("Failed to delete land");
      }
    } catch (error) {
      console.error("Error deleting land:", error);
    }
  };

  const handleEditClick = (land: Land) => {
    setEditingLand(land);
    setImagePreview(land.image_url);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (editingLand) {
      setEditingLand({ ...editingLand, [e.target.name]: e.target.value });
    } else {
      setNewListing({ ...newListing, [e.target.name]: e.target.value });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleAddListing = async () => {
    setErrorMessage("");
    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
      const formData = new FormData();
      formData.append("title", newListing.title);
      formData.append("description", newListing.description);
      formData.append("size", newListing.size);
      formData.append("price", newListing.price);
      formData.append("location", newListing.location);
      if (newImage) {
        formData.append("image", newImage);
      }

      const response = await fetch(`${API_BASE_URL}/listings`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Failed to add listing.");
        return;
      }

      const addedLand = await response.json();
      setLands([...lands, addedLand]);
      setShowAddForm(false);
      setNewImage(null);
      setImagePreview(null);
      setNewListing({ title: "", description: "", size: "", price: "", location: "" });
    } catch (error) {
      console.error("Error fetching land listings:", error);
    }
  };

  const handleUpdateListing = async () => {
    if (!editingLand) return; // Ensure editingLand is not null
  
    setErrorMessage("");
    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
      const formData = new FormData();
      formData.append("title", editingLand.title);
      formData.append("description", editingLand.description);
      formData.append("size", editingLand.size);
      formData.append("price", editingLand.price);
      formData.append("location", editingLand.location);
      if (newImage) {
        formData.append("image", newImage);
      }
  
      const response = await fetch(`${API_BASE_URL}/listings/${editingLand.id}`, {
        method: "PATCH",
        body: formData,
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Failed to update listing.");
        return;
      }
  
      const updatedLand = await response.json();
      setLands(lands.map(land => land.id === updatedLand.id ? updatedLand : land));
      setEditingLand(null);
      setNewImage(null);
      setImagePreview(null);
    }catch (error) {
  setErrorMessage("Error updating listing. Please try again.");
  console.error("Error updating listing:", error);
}
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="fixed top-0 left-0 w-full z-40">
        <Navbar />
      </div>

      <div className="flex flex-1 pt-16">
        <aside className="w-64 h-screen bg-gray-800 text-white p-4 fixed left-0 top-16">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          <ul>
            <li className="py-2"><a href="#">Dashboard</a></li>
            <li className="py-2"><a href="#">Land Listings</a></li>
          </ul>
        </aside>

        <main className="flex-1 bg-gray-100 p-8 overflow-y-auto ml-64">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-semibold text-red-600">Admin Dashboard</h1>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={() => setShowAddForm(true)}
            >
              Add Listing
            </button>
          </div>

          {showAddForm && (
            <div className="mb-6 p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Add New Listing</h2>
              {errorMessage && <p className="text-red-600">{errorMessage}</p>}
              <input type="text" name="title" value={newListing.title} onChange={handleInputChange} placeholder="Title" className="border p-2 w-full mb-2" />
              <textarea name="description" value={newListing.description} onChange={handleInputChange} placeholder="Description" className="border p-2 w-full mb-2"></textarea>
              <input type="text" name="size" value={newListing.size} onChange={handleInputChange} placeholder="Size" className="border p-2 w-full mb-2" />
              <input type="text" name="price" value={newListing.price} onChange={handleInputChange} placeholder="Price" className="border p-2 w-full mb-2" />
              <input type="text" name="location" value={newListing.location} onChange={handleInputChange} placeholder="Location" className="border p-2 w-full mb-2" />
              <input type="file" onChange={handleImageChange} className="border p-2 w-full mb-2" />
              {imagePreview && (
                <Image 
                  src={imagePreview} 
                  alt="Preview" 
                  width={128} 
                  height={128} 
                  className="w-32 h-32 object-cover mb-2" 
                />
              )}

              <div className="flex space-x-2">
                <button onClick={handleAddListing} className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
                <button onClick={() => setShowAddForm(false)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
              </div>
            </div>
          )}

          {editingLand && (
            <div className="mb-6 p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Edit Listing</h2>
              {errorMessage && <p className="text-red-600">{errorMessage}</p>}
              <input type="text" name="title" value={editingLand.title} onChange={handleInputChange} placeholder="Title" className="border p-2 w-full mb-2" />
              <textarea name="description" value={editingLand.description} onChange={handleInputChange} placeholder="Description" className="border p-2 w-full mb-2"></textarea>
              <input type="text" name="size" value={editingLand.size} onChange={handleInputChange} placeholder="Size" className="border p-2 w-full mb-2" />
              <input type="text" name="price" value={editingLand.price} onChange={handleInputChange} placeholder="Price" className="border p-2 w-full mb-2" />
              <input type="text" name="location" value={editingLand.location} onChange={handleInputChange} placeholder="Location" className="border p-2 w-full mb-2" />
              <input type="file" onChange={handleImageChange} className="border p-2 w-full mb-2" />
              {imagePreview && <Image src={imagePreview} alt="Preview" className="w-32 h-32 object-cover mb-2" />}
              <div className="flex space-x-2">
                <button onClick={handleUpdateListing} className="bg-green-500 text-white px-4 py-2 rounded">Update</button>
                <button onClick={() => setEditingLand(null)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
              </div>
            </div>
          )}

          {/* Land Listings Table */}
          <table className="w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">Size</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Image</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {lands.map((land) => (
                <tr key={land.id} className="border-b">
                  <td className="p-3">{land.title}</td>
                  <td className="p-3">{land.location}</td>
                  <td className="p-3">{land.size}</td>
                  <td className="p-3">{land.price}</td>
                  <td className="p-3">
                    <Image src={land.image_url} alt={land.title}  width={128}  height={128}  className="w-16 h-16 object-cover" />
                  </td>
                  <td className="p-3 space-x-2">
                    <button onClick={() => handleEditClick(land)} className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
                    <button onClick={() => handleDelete(land.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;