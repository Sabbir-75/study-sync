import React from "react";
import {
  Users,
  Clock3,
  BookOpen,
  CalendarCheck,
  Star,
  University,
} from "lucide-react"; // optional: lucide-react icons

const stats = [
  {
    id: 1,
    label: "Active Study Groups",
    value: "128+",
    sub: "live & moderated",
    icon: Users,
  },
  {
    id: 2,
    label: "Learners Joined",
    value: "12.4k",
    sub: "since launch",
    icon: University,
  },
  {
    id: 3,
    label: "Study Hours Logged",
    value: "86k+",
    sub: "collaborative hours",
    icon: Clock3,
  },
  {
    id: 4,
    label: "Sessions (This Month)",
    value: "540",
    sub: "scheduled & completed",
    icon: CalendarCheck,
  },
  {
    id: 5,
    label: "Average Rating",
    value: "4.8",
    sub: "from 2.1k+ reviews",
    icon: Star,
  },
  {
    id: 6,
    label: "Resources Shared",
    value: "9.7k",
    sub: "notes, decks, quizzes",
    icon: BookOpen,
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            Study Sync at a Glance
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Real impact from online group-study—clear, simple, and measurable.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map(({ id, label, value, sub, icon: Icon }) => (
            <div
              key={id}
              className="
                group relative overflow-hidden
                rounded-2xl border border-gray-100 bg-white
                p-6 shadow-sm hover:shadow-md transition
              "
            >
              {/* subtle accent */}
              <span className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-50 opacity-70 group-hover:opacity-100"></span>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <Icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>

              <div className="mt-3">
                <div className="text-4xl font-extrabold tracking-tight text-gray-900">
                  {value}
                </div>
                <div className="mt-1 text-sm text-gray-500">{sub}</div>
              </div>

              {/* focus ring for accessibility */}
              <span className="absolute inset-0 rounded-2xl ring-1 ring-transparent focus-within:ring-blue-400"></span>
            </div>
          ))}
        </div>

        {/* Footer meta */}
        <div className="mt-8 text-center text-xs text-gray-500">
          Last updated: Aug 2025 • Static showcase (hook up to API later)
        </div>
      </div>
    </section>
  );
}
