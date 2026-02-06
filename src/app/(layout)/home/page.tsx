import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Hi, I’m <span className="text-primary">GUDDU KUMAR</span> 👋
        </h1>

        <p className="mt-4 text-xl sm:text-2xl text-muted-foreground">
          Full-Stack Web Developer crafting fast, scalable, and user-focused web
          applications.
        </p>

        <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          I enjoy building modern web apps using React, Next.js, and backend
          technologies, focusing on clean code and real-world problem solving.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/home"
            className="px-6 py-3 rounded-lg border border-border font-medium hover:bg-muted transition"
          >
            Hire Me
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg border border-border font-medium hover:bg-muted transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
