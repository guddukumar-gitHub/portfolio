"use client";

import { FormEvent } from "react";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    console.log(data);
    // later: send to EmailJS / API
  };

  return (
    <section id="contact" className="w-full py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Get in Touch
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have a project, question, or just want to say hi? My inbox is always open.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full rounded-lg border border-border bg-transparent px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full rounded-lg border border-border bg-transparent px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full rounded-lg border border-border bg-transparent px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90 cursor-pointer"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-sm text-muted-foreground">
          Or email me directly at{" "}
          <span className="text-foreground font-medium cursor-pointer hover:underline">
            yourname@email.com
          </span>
        </div>
      </div>
    </section>
  );
}
