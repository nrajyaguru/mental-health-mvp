const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-800">Serenity</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#features" className="text-gray-700 hover:text-purple-600">
              Features
            </a>
            <a href="#about" className="text-gray-700 hover:text-purple-600">
              About
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-purple-600"
            >
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600">
              Contact
            </a>
          </nav>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-grow py-20 px-4 text-center md:text-left md:px-16 bg-gradient-to-br from-purple-100 to-blue-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-purple-800 leading-tight">
              Your Mental Health <br /> Matters Every Day
            </h2>
            <p className="mt-6 text-lg text-gray-700 max-w-md">
              Serenity is your pocket-friendly companion for mindfulness,
              journaling, and speaking with certified mental health
              professionals. Let's talk.
            </p>
            <button className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition">
              Start Your Free Trial
            </button>
          </div>
          <img
            src="./image.png"
            alt="Supportive mental health illustration"
            className="rounded-2xl w-full max-w-md shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white text-center">
        <h3 className="text-3xl font-bold text-purple-800 mb-10">
          Key Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
          <div className="bg-purple-50 p-6 rounded-2xl shadow">
            <h4 className="text-xl font-semibold text-purple-700 mb-2">
              Mood Tracking
            </h4>
            <p className="text-gray-600">
              Daily mood check-ins and analytics to help you understand your
              emotional patterns.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-2xl shadow">
            <h4 className="text-xl font-semibold text-purple-700 mb-2">
              Therapist Chat
            </h4>
            <p className="text-gray-600">
              Connect with licensed therapists in a safe and confidential
              environment.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-2xl shadow">
            <h4 className="text-xl font-semibold text-purple-700 mb-2">
              Guided Journaling
            </h4>
            <p className="text-gray-600">
              Simple guided prompts to express yourself and reflect every day.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 bg-gradient-to-b from-blue-50 to-purple-100 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-purple-800 mb-6">
            Why Serenity?
          </h3>
          <p className="text-gray-700 text-lg">
            With rising stress and anxiety levels globally, we aim to
            democratize mental wellness by making support tools accessible,
            stigma-free, and user-first. Serenity is built for everyday use —
            whether you're going through a rough patch or simply want to
            maintain balance.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-purple-800 mb-10">
            What Our Users Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-purple-50 p-6 rounded-2xl shadow text-left">
              <p className="text-gray-700 italic">
                “Serenity helped me deal with burnout and anxiety during the
                hardest time of my life. The daily check-ins are a
                game-changer.”
              </p>
              <p className="mt-4 font-semibold text-purple-700">
                — Priya R., Designer
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-2xl shadow text-left">
              <p className="text-gray-700 italic">
                “It feels like a therapist in your pocket. Affordable, calming,
                and exactly what I needed.”
              </p>
              <p className="mt-4 font-semibold text-purple-700">
                — James L., Developer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-b from-purple-100 to-blue-50 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-purple-800 mb-6">
            Stay Connected
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Have questions, feedback, or just want to say hello? Drop us a
            message — we’d love to hear from you.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-gray-300 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 shadow-inner">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">
            &copy; 2025 Serenity. All rights reserved.
          </p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-purple-600 hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-purple-600 hover:underline">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
