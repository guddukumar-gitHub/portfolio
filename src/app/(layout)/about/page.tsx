export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        About Me
      </h1>

      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Hi, I’m <span className="font-semibold text-foreground">Guddu Kumar</span>, 
          a passionate full-stack developer focused on building clean, scalable, 
          and user-friendly web applications.
        </p>

        <p>
          I work mainly with the <span className="font-medium text-foreground">
          MERN stack</span> and have hands-on experience with 
          <span className="font-medium text-foreground">
            {" "}React, Next.js, Tailwind CSS, MySQL, and MongoDB
          </span>.
          I enjoy turning ideas into real products with thoughtful UI and solid backend logic.
        </p>

        <p>
          Currently, I’m sharpening my problem-solving skills through 
          <span className="font-medium text-foreground"> Data Structures & Algorithms </span> 
          and building real-world projects like group finance apps, dashboards, and LMS platforms.
        </p>

        <p>
          I believe in continuous learning, clean code, and building things that actually help people.
          When I’m not coding, I like exploring new tech and improving my development workflow.
        </p>
      </div>
    </section>
  );
}
