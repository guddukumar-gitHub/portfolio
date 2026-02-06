"use client";

import { useState, ChangeEvent, FormEvent } from "react";

type FeedbackForm = {
  name: string;
  email: string;
  message: string;
};

export default function Feedback() {
  const [form, setForm] = useState<FeedbackForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form); // connect API / Appwrite / EmailJS
    alert("Thanks for your feedback!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-2 text-center">
        Feedback
      </h2>
      <p className="text-center text-muted-foreground mb-6">
        I’d love to hear your thoughts or suggestions.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white/60 dark:bg-black/40 backdrop-blur-md p-6 rounded-2xl shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border bg-transparent outline-none focus:ring-2 focus:ring-primary"
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border bg-transparent outline-none focus:ring-2 focus:ring-primary"
        />

        <textarea
          name="message"
          placeholder="Your feedback"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border bg-transparent outline-none focus:ring-2 focus:ring-primary"
        />

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-primary text-primary-foreground cursor-pointer font-medium hover:opacity-90 transition"
        >
          Send Feedback
        </button>
      </form>
    </section>
  );
}
