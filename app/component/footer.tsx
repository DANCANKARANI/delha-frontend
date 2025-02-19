import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Copyright Section */}
        <p className="text-sm">&copy; 2025 Delha Destiny Solutions Limited, All Rights Reserved.</p>
        
        {/* Quick Links */}
        <div className="mt-4 flex justify-center gap-6">
          <Link href="/contact" className="text-white hover:text-blue-200">Contact Us</Link>
          <Link href="/about" className="text-white hover:text-blue-200">About Us</Link>
          <Link href="/privacy-policy" className="text-white hover:text-blue-200">Privacy Policy</Link>
        </div>
        
        {/* Social Media Links (optional) */}
        <div className="mt-6 flex justify-center gap-6">
          <a href="https://facebook.com" className="text-white hover:text-blue-200" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i> {/* Replace with actual icons */}
          </a>
          <a href="https://twitter.com" className="text-white hover:text-blue-200" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="text-white hover:text-blue-200" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
