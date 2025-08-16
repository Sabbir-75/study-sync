import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Clock3,
  BookOpen,
  CalendarCheck,
  Star,
  University,
} from "lucide-react";
import CountUp from "react-countup";

const stats = [
  { id: 1, label: "Active Study Groups", value: 128, suffix: "+", sub: "live & moderated", icon: Users },
  { id: 2, label: "Learners Joined", value: 12400, suffix: "", sub: "since launch", icon: University },
  { id: 3, label: "Study Hours Logged", value: 86000, suffix: "+", sub: "collaborative hours", icon: Clock3 },
  { id: 4, label: "Sessions (This Month)", value: 540, suffix: "", sub: "scheduled & completed", icon: CalendarCheck },
  { id: 5, label: "Average Rating", value: 4.8, decimals: 1, suffix: "", sub: "from 2.1k+ reviews", icon: Star },
  { id: 6, label: "Resources Shared", value: 9700, suffix: "", sub: "notes, decks, quizzes", icon: BookOpen },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section data-aos="fade-up" className="px-4 py-12" ref={ref}>
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-base-content">
              Study Sync at <span className="text-primary">a Glance</span>
            </h2>
        <p className="mt-2 text-base-content/65 max-w-2xl mx-auto">
          Real impact from online group-study—clear, simple, and measurable.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map(({ id, label, value, sub, icon: Icon, suffix, decimals }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-base-100 p-6 shadow-sm hover:shadow-md transition"
          >
            <span className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary  opacity-60 group-hover:opacity-90 duration-300"></span>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl">
                <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div className="text-base font-medium text-base-content/60">{label}</div>
            </div>

            <div className="mt-3 text-4xl font-extrabold tracking-tight text-base-content">
              {isInView ? <CountUp end={value} duration={2.5} decimals={decimals || 0} separator="," /> : 0}
              {suffix}
            </div>
            <div className="mt-1 text-sm text-base-content/50">{sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
