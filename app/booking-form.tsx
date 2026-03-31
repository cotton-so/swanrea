"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import AddressInput from "./address-input";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
        }
      ) => string;
      reset: (widgetId: string) => void;
    };
  }
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA";

export default function BookingForm() {
  const [turnstileToken, setTurnstileToken] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const renderWidget = useCallback(() => {
    if (window.turnstile && turnstileRef.current && !widgetIdRef.current) {
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token: string) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(""),
        theme: "light",
      });
    }
  }, []);

  useEffect(() => {
    if (window.turnstile) {
      renderWidget();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.onload = () => {
      setTimeout(renderWidget, 100);
    };
    document.head.appendChild(script);

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!turnstileToken) return;

    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("cf-turnstile-response", turnstileToken);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      alert("Something went wrong. Please try calling us instead.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-2xl text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-green-600 text-2xl font-bold">&#10003;</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Enquiry sent!</h3>
        <p className="text-gray-600">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition"
            placeholder="02X XXX XXXX"
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition"
          placeholder="your@email.com"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Address <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <AddressInput />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What&apos;s the issue? (select all that apply)
        </label>
        <div className="flex flex-wrap gap-2">
          {[
            "Not heating",
            "Not cooling",
            "Strange noise",
            "Won't turn on",
            "High power bills",
            "Water leaking",
            "Bad smell",
            "Remote not working",
            "New installation",
            "Regular service",
            "Other",
          ].map((issue) => (
            <button
              key={issue}
              type="button"
              onClick={() =>
                setSelectedIssues((prev) =>
                  prev.includes(issue)
                    ? prev.filter((i) => i !== issue)
                    : [...prev, issue]
                )
              }
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition ${
                selectedIssues.includes(issue)
                  ? "bg-brand-red text-white border-brand-red"
                  : "bg-white text-gray-600 border-gray-300 hover:border-brand-red hover:text-brand-red"
              }`}
            >
              {issue}
            </button>
          ))}
        </div>
        <input type="hidden" name="issues" value={selectedIssues.join(", ")} />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Anything else? (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition resize-none"
          placeholder="Any extra details..."
        />
      </div>
      <div className="mb-4 flex justify-center">
        <div ref={turnstileRef} />
      </div>
      <button
        type="submit"
        disabled={!turnstileToken || submitting}
        className="w-full bg-brand-red text-white text-lg font-semibold py-4 rounded-xl hover:bg-brand-red-dark transition shadow-lg shadow-brand-red/25 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending..." : "Send Enquiry"}
      </button>
      <p className="text-center text-gray-400 text-xs mt-3">
        We&apos;ll respond within 24 hours. No spam, ever.
      </p>
    </form>
  );
}
