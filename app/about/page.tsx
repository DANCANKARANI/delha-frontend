"use client";

import Image from "next/image";
import "../globals.css";
import Footer from "../component/footer";
import Navbar from "../component/navbar";

const AboutUsPage = () => {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center text-red-600">About Us</h1>

          {/* Our Mission */}
          <section className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-red-600">Our Mission</h2>
            <p className="mb-4">
              At Delha Destiny Solutions, our mission is to provide people with access to affordable, quality land for residential, commercial, or investment purposes. We aim to make the land acquisition process transparent and hassle-free for our customers, offering various plots to cater to diverse needs.
            </p>
            <p className="mb-4">
              We are committed to contributing to the growth of communities by facilitating the development of land that aligns with local needs while promoting sustainable land management practices.
            </p>
          </section>

          {/* Our Story */}
          <section className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-red-600">Our Story</h2>
            <p className="mb-4">
              Founded in 2023, Delha Destiny Solutions emerged from the vision of experienced real estate professionals who are passionate about creating long-lasting value for land buyers and sellers. We saw an opportunity to simplify land transactions while ensuring customers make informed decisions.
            </p>
            <p className="mb-4">
              Since our inception, we have expanded our offerings and focused on creating a seamless buying experience, using technology to connect buyers with the right properties. We are dedicated to offering a wide range of land options at competitive prices.
            </p>
          </section>

          {/* Message from Our CEO */}
          <section className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-red-600 text-center">Message from Our CEO</h2>
            <div className="flex flex-col items-center">
              <Image
                src="/ceo.jpg"
                alt="John Mbaru - CEO"
                width={128}
                height={128}
                className="rounded-full mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">John Mbaru</h3>
              <p className="text-gray-600 mb-4">Co-Founder & CEO</p>
            </div>
            <p className="italic mb-4">
              "As the CEO of Delha Destiny Solutions, I am proud to share the inspiring origin of our company, a testament to collaboration and community spirit. Eight years ago, four dedicated groups—Danesco Self Help Group, Illinois Brothers, Delusa Self Help Group, and Haha Niho Muico—came together with a shared vision: to create a sustainable enterprise that would not only thrive in the real estate sector but also uplift our community."
            </p>
            <p className="mb-4">
              From our humble beginnings, we have focused on buying and selling land, as well as building and managing properties. Our commitment to excellence has allowed us to transform many tenants into proud landlords, empowering individuals and families to achieve their dreams of homeownership. This journey has been about more than just business; it has been about fostering a sense of belonging and stability within our community.
            </p>
            <p className="mb-4">
              At Delha Destiny Solutions, we believe in giving back. Our members actively engage in outreach programs, visiting children's homes and supporting small farmers and vulnerable individuals in society. We understand that true success is measured not just by financial growth, but by the positive impact we have on the lives of those around us.
            </p>
            <p className="mb-4">
              As we continue to grow and evolve, we remain dedicated to our mission of creating opportunities and nurturing community ties. Together, we are not just building properties; we are building a brighter future for all. Thank you for being part of our journey, and we look forward to what lies ahead."
            </p>
          </section>

          {/* Meet the Team */}
          <section className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-red-600 text-center">Meet the Team</h2>
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="bg-gray-100 p-6 rounded-lg text-center max-w-xs w-full sm:w-1/2 md:w-1/3 lg:w-1/3">
                <Image
                  src="/sec-general.jpg"
                  alt="CEO"
                  width={128}
                  height={128}
                  className="mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">John Mbaru</h3>
                <p className="text-gray-600">Co-Founder & CEO</p>
                <p className="mt-2">
                  John is a seasoned land and property expert with a passion for connecting buyers with the perfect plots to suit their needs.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center max-w-xs w-full sm:w-1/2 md:w-1/3 lg:w-1/3">
                <Image
                  src="/ceo.jpg"
                  alt="Secretary General"
                  width={128}
                  height={128}
                  className="mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Jamereck Ngare</h3>
                <p className="text-gray-600">Secretary General</p>
                <p className="mt-2">
                  Jamereck oversees the day-to-day operations, ensuring that the land-selling process remains smooth and efficient for both buyers and sellers.
                </p>
              </div>
            </div>
          </section>

          {/* Reviews Section */}
          <section className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-red-600 text-center">Reviews</h2>
            <div className="space-y-6">
              <div className="testimonial p-4 bg-gray-100 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
                <p className="italic text-lg">
                  &quot;Delha Destiny Solutions provided us with top-notch real estate services. Our experience has been exceptional!&quot;
                </p>
                <p className="font-bold text-blue-600">- John Mbaru, CEO of XYZ Corp</p>
              </div>
              <div className="testimonial p-4 bg-gray-100 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
                <p className="italic text-lg">
                  &quot;We highly recommend Delha Destiny. Their attention to detail and commitment to service excellence is unparalleled.&quot;
                </p>
                <p className="font-bold text-blue-600">- Jane Smith, Founder of ABC Enterprises</p>
              </div>
              <div className="testimonial p-4 bg-gray-100 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
                <p className="italic text-lg">
                  &quot;The team at Delha Destiny is professional, knowledgeable, and always ready to go the extra mile. We are extremely satisfied.&quot;
                </p>
                <p className="font-bold text-blue-600">- Mike Johnson, Partner at RealEstateCo</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
