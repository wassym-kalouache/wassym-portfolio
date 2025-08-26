export default function Home() {
  return (
    <main className="container">
      <section className="hero" aria-labelledby="hero-title">
        <h1 id="hero-title">AI Product Specialist</h1>
        <p className="subtext">Execution-first.</p>
      </section>

      <section id="about" className="section" aria-labelledby="about-title">
        <h2 id="about-title">What I Do</h2>
        <p className="lede">I help founders and teams turn AI ideas into shipped products.</p>
        <ul className="bullets">
          <li><strong>Ship fast:</strong> scope, prototype, iterate — measurable outcomes over noise.</li>
          <li><strong>Pragmatic AI:</strong> the simplest model that wins beats the fanciest that doesn&#39;t.</li>
          <li><strong>Founder-friendly:</strong> clear tradeoffs, crisp roadmaps, minimal overhead.</li>
        </ul>
      </section>

      <section id="projects" className="section" aria-labelledby="projects-title">
        <h2 id="projects-title">Projects</h2>
        <div className="projects">
          <article className="project">
            <h3 className="project__title">⚔️ OCR Arena</h3>
            <p className="project__desc">Benchmark and demo space for OCR models.</p>
            <p className="project__actions">
              <a className="button" rel="noopener noreferrer" target="_blank" href="https://huggingface.co/spaces/Wassymk/OCRArena">Open</a>
            </p>
          </article>

          <article className="project">
            <h3 className="project__title">🏠 Airbnboost</h3>
            <p className="project__desc">AI suggestions for titles, descriptions, pricing, and photos to boost bookings.</p>
            <p className="project__actions">
              <a className="button" rel="noopener noreferrer" target="_blank" href="https://www.airbnboost.homes/">Open</a>
            </p>
          </article>
        </div>
      </section>

      <section id="contact" className="section" aria-labelledby="contact-title">
        <h2 id="contact-title">Get in Touch</h2>
        <p className="lede">Founder or builder? Let&#39;s talk.</p>
        <p>
          <a className="link-underline" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/wassymkalouache/">LinkedIn</a>
        </p>
      </section>
    </main>
  );
}
