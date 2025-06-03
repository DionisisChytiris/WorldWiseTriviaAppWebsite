import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" id="section3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-gray-400 mb-8">
            Download now and begin exploring Greek geography today!
          </p>
          <a href="#download-buttons">

          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Get Started
          </button>
          </a>
        </div>
      </div>
    </footer>
  );
}
