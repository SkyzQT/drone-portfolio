import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      
      <header className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute w-full h-full object-cover brightness-50"
    src="/hero.mp4"
  />
  <div className="relative z-10 bg-black bg-opacity-40 p-6 rounded-xl backdrop-blur">
    <h1 className="text-5xl sm:text-6xl font-bold mb-4 tracking-wide text-blue-400 drop-shadow-lg">
      Aerial Visions
    </h1>
    <p className="text-lg sm:text-xl text-white opacity-90">Stunning drone cinematography around the world</p>
  </div>
</header>


      {/* About Section */}
      <section className="p-8 sm:p-12 max-w-5xl mx-auto bg-white bg-opacity-5 backdrop-blur-md rounded-3xl border border-white/10 shadow-xl text-white my-10">
  <h2 className="text-3xl font-bold mb-4 text-blue-300">About Me</h2>
  <p className="text-lg leading-relaxed text-gray-300">
    I’m a certified drone pilot with a passion for capturing high-end aerial visuals — from sunset cliffs to mega-architecture.
  </p>
</section>

      {/* Portfolio Gallery */}
      <section className="p-8 sm:p-10 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-6 text-center">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <img
              key={n}
              src={`/portfolio/drone${n}.jpg`}
              alt={`Drone shot ${n}`}
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="p-8 sm:p-12 max-w-5xl mx-auto bg-white bg-opacity-5 backdrop-blur-md rounded-3xl border border-white/10 shadow-xl text-white my-10">
  <h2 className="text-3xl font-bold mb-4 text-blue-300">Services</h2>
  <ul className="text-lg space-y-2 text-gray-300 list-disc list-inside">
    <li>4K Real Estate Flyovers</li>
    <li>Sunset Nature Cinematics</li>
    <li>Commercial Product Shoots</li>
    <li>Event Coverage & Tracking Shots</li>
    <li>Post-Production + Color Grading</li>
  </ul>
</section>


      {/* Contact Section */}
      <section className="p-8 sm:p-12 max-w-5xl mx-auto bg-white bg-opacity-5 backdrop-blur-md rounded-3xl border border-white/10 shadow-xl text-white my-10">
  <h2 className="text-3xl font-bold mb-6 text-blue-300 text-center">Get In Touch</h2>
  <form className="space-y-4">
    <input
      className="w-full p-3 rounded-xl text-black placeholder-gray-500"
      placeholder="Your Name"
    />
    <input
      className="w-full p-3 rounded-xl text-black placeholder-gray-500"
      type="email"
      placeholder="Your Email"
    />
    <textarea
      className="w-full p-3 rounded-xl text-black placeholder-gray-500"
      rows="4"
      placeholder="Your Message"
    />
    <button
      type="submit"
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition duration-300"
    >
      Send Message
    </button>
  </form>
</section>


      {/* Footer */}
      <footer className="text-center text-sm py-6 bg-black border-t border-gray-700">
        &copy; {new Date().getFullYear()} DJI Mini 4 Pro | Drone Portfolio
      </footer>
    </div>
  );
}

export default App;
