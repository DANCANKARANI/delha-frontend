"use client";
import { useState } from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
  };

  return (
    <div>
      <Navbar />

      <div className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold text-center mb-6">Get in Touch with Us</h1>
        <p className="text-center text-gray-600 mb-8">
          Have any inquiries? Reach out using the form below, or contact us directly.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border p-2 rounded"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border p-2 rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              className="w-full border p-2 rounded"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition w-full"
          >
            Submit Inquiry
          </button>
        </form>

        {/* Contact Details */}
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold">Sec Gen: <span className="text-blue-600">Jamereck Ngare</span></p>
          <p className="text-lg font-semibold">Call Us: <span className="text-blue-600">+254 798 393921 / 0799 333 7119</span></p>
          <p className="text-lg font-semibold">Email: <span className="text-blue-600">delhadestinysolutions@gmail.com</span></p>
          <a
            href="https://wa.me/254798393921?text=Hello%20I'm%20interested%20in%20your%20services."
            target="_blank"
            className="mt-4 inline-block bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-700 transition"
          >
            Contact via WhatsApp
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
