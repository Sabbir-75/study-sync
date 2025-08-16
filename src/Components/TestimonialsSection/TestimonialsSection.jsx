import React, { useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Aisha Rahman",
    role: "CSE Student, DU",
    avatar: "https://i.pravatar.cc/80?img=5",
    rating: 5,
    quote:
      "Study Sync’s group sessions have helped me stay consistent with my studies. Mock tests and peer discussions—truly gold!",
  },
  {
    id: 2,
    name: "Nabil Hasan",
    role: "Frontend Learner",
    avatar: "https://i.pravatar.cc/80?img=12",
    rating: 4,
    quote:
      "In the Web Dev study circle, I grew really fast with project-based learning. Mentor feedback and daily goals worked wonders.",
  },
  {
    id: 3,
    name: "Tanisha Chowdhury",
    role: "HSC Candidate",
    avatar: "https://i.pravatar.cc/80?img=32",
    rating: 5,
    quote:
      "By regularly practicing in the Math problem-solving group, my concepts became crystal clear. The community itself is the biggest plus!",
  },
  {
    id: 4,
    name: "Arif Mahmud",
    role: "Physics Enthusiast",
    avatar: "https://i.pravatar.cc/80?img=22",
    rating: 5,
    quote:
      "Weekly study plans + accountability partners—these two things have kept me on track. Highly recommend!",
  },
];


function Stars({ count = 0 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-5 w-5 ${i < count ? "fill-yellow-400" : "fill-gray-200"}`}
          aria-hidden="true"
        >
          <path d="M9.05 2.927c.3-.921 1.6-.921 1.9 0l1.3 3.97h4.08c.97 0 1.37 1.24.59 1.8l-3.3 2.38 1.26 3.98c.3.95-.78 1.73-1.59 1.17L10 13.98l-3.29 2.25c-.81.56-1.89-.22-1.59-1.17l1.26-3.98-3.3-2.38c-.78-.56-.38-1.8.59-1.8h4.08l1.3-3.97Z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const trackRef = useRef(null);

  const avg =
    Math.round(
      (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length) * 10
    ) / 10;

  return (
    <section data-aos="fade-up" className="px-4 py-12">
      
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-base-content">
              What Learners <span className="text-primary">Say</span>
            </h2>
            <p className="mt-2 text-base-content/60 max-w-2xl">
              Real feedback from Study Sync’s online group-study members.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Stars count={Math.round(avg)} />
            <span className="text-sm text-base-content/50">
              {avg} / 5 • {testimonials.length}+ reviews
            </span>
          </div>
        </div>

        {/* Track: slider on small, grid on large */}
        <div
          ref={trackRef}
          className="
            md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            gap-4
            md:overflow-visible
            overflow-x-auto no-scrollbar
            snap-x snap-mandatory
            -mx-6 px-6 md:mx-0 md:px-0
          "
        >
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="
                ts-card
                min-w-[85%] sm:min-w-[65%] md:min-w-0
                snap-center
                rounded-2xl border border-base-content/65 shadow-sm
                hover:shadow-md transition
                p-6 bg-base-100
                mt-2
              "
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-100"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-semibold text-primary">{t.name}</h3>
                  <p className="text-sm text-base-content/50">{t.role}</p>
                </div>
              </div>

              <p className="mt-4 text-base-content/65 leading-relaxed">“{t.quote}”</p>

              <div className="mt-4 flex items-center justify-between">
                <Stars count={t.rating} />
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-primary">
                  Verified Member
                </span>
              </div>
            </article>
          ))}
        </div>
    </section>
  );
}
