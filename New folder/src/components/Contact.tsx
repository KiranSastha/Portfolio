const Contact = () => {
  return (
    <section id="contact" className="px-6 md:px-20 py-24 bg-black text-white text-center">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Let’s build something <span className="italic text-yellow-400">impactful</span>
      </h2>

      {/* Description */}
      <p className="text-gray-400 mb-10 max-w-xl mx-auto">
        Interested in robotics, embedded systems, or automation projects?
        I'm open to internships, collaborations, and real-world engineering challenges.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">

        {/* 🔥 Primary CTA */}
        <a
          href="mailto:sasthakiran046@gmail.com"
          className="px-6 py-3 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition"
        >
          Email Me
        </a>

        {/* Secondary Buttons */}
        <a
          href="https://github.com/KiranSastha/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg border border-gray-700 hover:border-yellow-400 hover:text-yellow-400 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/kiran-s-k/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg border border-gray-700 hover:border-yellow-400 hover:text-yellow-400 transition"
        >
          LinkedIn
        </a>

        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 rounded-lg border border-gray-700 hover:border-yellow-400 hover:text-yellow-400 transition"
        >
          Download Resume
        </a>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 pt-6 text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} S. K. Kiran — Built with passion for robotics
        </p>
      </div>

    </section>
  );
};

export default Contact;