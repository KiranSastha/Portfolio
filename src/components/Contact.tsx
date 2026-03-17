const Contact = () => {
  return (
    <section id="contact" className="section-padding text-center">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Let's work <span className="italic text-gradient">together</span>
      </h2>

      {/* Description */}
      <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
        Have a robotics or embedded systems project in mind? 
        I'm always open to internships, collaborations, and innovative ideas.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">

        <a
          href="mailto:sasthakiran046@gmail.com"
          className="px-6 py-3 rounded-lg border border-border hover:bg-secondary transition"
        >
          Email
        </a>

        <a
          href="https://github.com/KiranSastha/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg border border-border hover:bg-secondary transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/kiran-s-k/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg border border-border hover:bg-secondary transition"
        >
          LinkedIn
        </a>

        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 rounded-lg border border-border hover:bg-secondary transition"
        >
          Download Resume
        </a>

      </div>

      {/* Divider */}
      <div className="border-t border-border pt-6 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} S. K. Kiran 
        </p>
      </div>

    </section>
  );
};

export default Contact;