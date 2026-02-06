"use client";

import { useState } from "react";

type FeedbackResponse = {
  success?: boolean;
  error?: string;
};

export default function FeedbackForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        message: formData.get("feedback"),
      }),
    });

    const data: FeedbackResponse = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error || "Something went wrong");
    } else {
      setSuccess(true);
      e.currentTarget.reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 glass glass-hover backdrop-blur-md p-6 rounded-2xl shadow-lg"
    >
      <input
        name="name"
        type="text"
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
        name="feedback"
        placeholder="Your Feedback"
        rows={5}
        required
        className="w-full p-3 rounded-md border"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 rounded-lg bg-primary text-primary-foreground cursor-pointer font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Submit Feedback"}
      </button>

      {success && (
        <p className="text-sm text-green-600">
          Thanks! Your feedback has been sent 🙌
        </p>
      )}

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}
    </form>
  );
}
