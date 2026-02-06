"use client";

import FeedbackForm from "@/components/FeedbackForm";
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
    <section className="w-full py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Feedback</h2>
          <p className="mt-4 text-muted-foreground">
            I’d love to hear your thoughts or suggestions.
          </p>
        </div>
        {/* Form */}
        <FeedbackForm />

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
