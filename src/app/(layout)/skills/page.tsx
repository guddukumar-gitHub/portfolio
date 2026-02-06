"use client";

const skills = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "MySQL", "Appwrite"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
  {
    title: "Programming",
    items: ["JavaScript", "Java", "C++ (Basics)", "DSA (Learning)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-muted-foreground mt-2">
          Technologies and tools I work with
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="rounded-2xl border border-white/10 bg-white/10 dark:bg-white/5
                       backdrop-blur-xl shadow-lg p-6 hover:scale-[1.02]
                       transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              {skill.title}
            </h3>

            <ul className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <li
                  key={item}
                  className="text-sm px-3 py-1 rounded-full
                             bg-white/20 dark:bg-white/10
                             text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
