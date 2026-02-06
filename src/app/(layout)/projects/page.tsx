const projects = [
  {
    title: "YouTube Frontend Clone",
    description:
      "A YouTube UI clone built with React, featuring video listing, responsive layout, and modern UI.",
    tech: ["React", "Tailwind CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "Group Saving & Loan App",
    description:
      "A web app for managing monthly savings, member loans, and interest tracking with admin control.",
    tech: ["React", "Node.js", "MySQL"],
    live: "#",
    github: "#",
  },
  {
    title: "Learning Management System",
    description:
      "An LMS platform with topic-based videos and related blogs using Appwrite as backend.",
    tech: ["React", "Tailwind", "Appwrite"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-lg hover:scale-[1.02] transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-sm text-muted-foreground mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-black/10 dark:bg-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 text-sm font-medium">
              <a
                href={project.live}
                target="_blank"
                className="text-primary hover:underline"
              >
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                className="text-primary hover:underline"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
