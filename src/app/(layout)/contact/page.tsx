"use client";

import ContactForm from "@/components/ContactForm";

export default function Contact() {

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
        <ContactForm />

        <div className="mt-10 text-center text-sm text-muted-foreground">
          Or email me directly at{" "}
          <span className="text-foreground font-medium cursor-pointer hover:underline">
            gk4communication@gmail.com
          </span>
        </div>
      </div>
    </section>
  );
}
