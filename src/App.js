import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <header
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: "url('/drone-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-black bg-opacity-60 p-6 rounded-2xl max-w-xl mx-auto text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Aerial Visions</h1>
          <p className="text-base sm:text-xl">Stunning drone photography and cinematography</p>
        </div>
      </header>

      {/* About Section */}
      <section className="p-8 sm:p-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I’m a certified drone pilot with a passion for capturing landscapes, real estate, and events from breathtaking angles.
          Whether it's cinematic footage or high-res photos, I bring creativity and precision to every shoot.
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
      <section className="p-8 sm:p-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Services</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Real Estate Aerial Shoots</li>
          <li>Event Coverage</li>
          <li>Commercial Drone Videography</li>
          <li>Post-Production & Video Editing</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="p-8 sm:p-10 bg-gray-800">
        <h2 className="text-3xl font-semibold mb-6 text-center">Get In Touch</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            className="w-full p-3 rounded-xl text-black"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="w-full p-3 rounded-xl text-black"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            className="w-full p-3 rounded-xl text-black"
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
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
