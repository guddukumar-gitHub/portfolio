"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error || "Something went wrong");
    } else {
      setSuccess(true);
      e.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 rounded-md border"
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        required
        className="w-full p-3 rounded-md border"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows={5}
        className="w-full p-3 rounded-md border"
      />

      <button
        disabled={loading}
        className="w-full bg-black text-white py-3 rounded-md"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && <p className="text-green-600">Message sent successfully!</p>}
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
}
