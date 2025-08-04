import React from "react";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-200 p-8 text-center">
      <img src="https://bastikipathshala.org/wp-content/uploads/2024/02/Basti-Ki-Pathshala-Official-Logo.jpg" className="h-20 rounded-lg"  alt="" />
        <h1 className="text-5xl font-bold mb-4">Basti Ki Pathshala</h1>
        <p className="text-xl mb-6 max-w-2xl">
          Empowering communities through education. Become an intern and make a difference.
        </p>
        <a href="#apply" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg transition duration-300">
          Apply for Internship
        </a>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          Basti Ki Pathshala is a grassroots initiative aimed at educating underprivileged children in slum and rural areas. We believe education is the key to breaking the cycle of poverty, and we welcome passionate interns to join us on this mission.
        </p>
      </section>

      {/* Why Join */}
      <section className="py-16 px-8 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Join as an Intern?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "Real-world teaching experience",
            "Certificate of internship",
            "Create real social impact",
            "Flexible volunteering hours",
            "Skill development & leadership",
            "Connect with changemakers"
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
              <p className="text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="py-16 px-8 bg-orange-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Apply for Internship</h2>
        <p className="mb-6">Fill out the form below to become a part of our mission.</p>
        {/* Replace with your actual form route or embed */}
        <a href="/join" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow transition duration-300">
          Go to Registration Form
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-16">
        <p>&copy; {new Date().getFullYear()} Basti Ki Pathshala. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="https://instagram.com" className="hover:underline">Instagram</a>
          <a href="mailto:contact@bastikipathshala.org" className="hover:underline">Email</a>
        </div>
      </footer>
    </div>
  );
}
