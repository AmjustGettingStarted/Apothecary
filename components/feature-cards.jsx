"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Star,
  ArrowUpRight,
  Zap,
  Lock,
} from "lucide-react";

// ─── Mini UI Mockup Atoms ──────────────────────────────────────────────────────

const DoctorAvatar = ({ src, name, status = "online" }) => (
  <div className="flex items-center gap-2.5">
    <div className="relative">
      <img
        src={src}
        alt={name}
        className="w-9 h-9 rounded-full object-cover border-2 border-emerald-500/40"
      />
      <span
        className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-neutral-900 ${
          status === "online" ? "bg-emerald-400" : "bg-neutral-500"
        } shadow-[0_0_6px_rgba(16,185,129,0.8)]`}
      />
    </div>
    <div>
      <p className="text-xs font-semibold text-white leading-tight">{name}</p>
      <p className="text-[10px] text-emerald-400 leading-tight capitalize">{status}</p>
    </div>
  </div>
);

const StatPill = ({ label, value, color = "emerald" }) => (
  <div
    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-${color}-500/15 border border-${color}-500/25 text-${color}-300`}
  >
    <span className={`w-1.5 h-1.5 rounded-full bg-${color}-400`} />
    {value} {label}
  </div>
);

const Tag = ({ label, active }) => (
  <span
    className={`px-2.5 py-1 rounded-full text-[11px] font-medium border transition-all ${
      active
        ? "bg-emerald-500 text-black border-emerald-400"
        : "bg-white/5 text-neutral-400 border-white/10"
    }`}
  >
    {label}
  </span>
);

// ─── Card Mockup Content per Feature ──────────────────────────────────────────

const ProfileMockup = () => (
  <div className="mt-4 space-y-3">
    <div className="flex items-center justify-between">
      <p className="text-[11px] text-neutral-400 uppercase tracking-widest font-semibold">Your Profile</p>
      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">Active</span>
    </div>
    <DoctorAvatar
      src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100"
      name="Mia Johnson"
      status="online"
    />
    <div className="grid grid-cols-3 gap-2 mt-2">
      {["General", "Cardiology", "Dermatology"].map((s) => (
        <Tag key={s} label={s} active={s === "General"} />
      ))}
    </div>
    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400" />
    </div>
    <p className="text-[10px] text-neutral-500">Profile complete — 75%</p>
  </div>
);

const BookingMockup = () => (
  <div className="mt-4 space-y-2.5">
    <div className="flex items-center justify-between mb-1">
      <p className="text-[11px] text-neutral-400 uppercase tracking-widest font-semibold">Book Appointment</p>
      <Zap className="w-3.5 h-3.5 text-emerald-400" />
    </div>
    {[
      { name: "Dr. Robert Downey", spec: "Cardiologist", time: "10:00 AM", avail: true },
      { name: "Dr. Suma M", spec: "Dermatologist", time: "11:30 AM", avail: true },
      { name: "Dr. Vikram Rao", spec: "Pediatrician", time: "2:00 PM", avail: false },
    ].map((d) => (
      <div
        key={d.name}
        className="flex items-center justify-between bg-white/[0.04] hover:bg-emerald-500/10 border border-white/8 rounded-xl px-3 py-2 transition-all group"
      >
        <div>
          <p className="text-xs font-semibold text-white">{d.name}</p>
          <p className="text-[10px] text-neutral-400">{d.spec}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-emerald-300 font-medium">{d.time}</p>
          <span
            className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ${
              d.avail ? "bg-emerald-500/20 text-emerald-400" : "bg-white/10 text-neutral-500"
            }`}
          >
            {d.avail ? "Available" : "Full"}
          </span>
        </div>
      </div>
    ))}
  </div>
);

const VideoMockup = () => (
  <div className="mt-4 space-y-3">
    <div className="relative rounded-xl overflow-hidden bg-neutral-950 border border-white/10 aspect-video flex items-center justify-center">
      <img
        src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300"
        alt="Dr. Robert"
        className="w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-[10px] text-white font-semibold">LIVE • 12:34</span>
      </div>
      <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md rounded-lg px-2 py-1 flex items-center gap-1.5">
        <Video className="w-3 h-3 text-emerald-400" />
        <span className="text-[10px] text-white">HD</span>
      </div>
    </div>
    <div className="flex items-center justify-between">
      <p className="text-xs text-white font-medium">Dr. Robert Downey</p>
      <div className="flex gap-2">
        {["🎤", "📷", "📞"].map((e, i) => (
          <button key={i} className="w-7 h-7 rounded-full bg-white/10 hover:bg-emerald-500/30 border border-white/10 text-xs transition-all flex items-center justify-center">
            {e}
          </button>
        ))}
      </div>
    </div>
  </div>
);

const CreditsMockup = () => (
  <div className="mt-4 space-y-3">
    <div className="flex items-center justify-between">
      <p className="text-[11px] text-neutral-400 uppercase tracking-widest font-semibold">Your Credits</p>
      <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
    </div>
    <div className="bg-gradient-to-br from-emerald-950/80 to-neutral-950 rounded-xl border border-emerald-500/20 p-3 flex items-center justify-between">
      <div>
        <p className="text-2xl font-black text-white">24</p>
        <p className="text-[10px] text-emerald-400 font-medium">Credits Available</p>
      </div>
      <div className="text-right">
        <p className="text-xs text-neutral-400">= 12 Consultations</p>
        <p className="text-[10px] text-emerald-300 mt-0.5">Never expire</p>
      </div>
    </div>
    <div className="space-y-1.5">
      {[
        { label: "Booking used", val: "2 credits", icon: "📅" },
        { label: "Monthly top-up", val: "+10 credits", icon: "🔄" },
      ].map((t) => (
        <div key={t.label} className="flex items-center justify-between bg-white/[0.04] rounded-lg px-2.5 py-1.5 text-xs border border-white/6">
          <span className="text-neutral-400 flex items-center gap-1.5">{t.icon} {t.label}</span>
          <span className="text-white font-semibold">{t.val}</span>
        </div>
      ))}
    </div>
  </div>
);

const VerifiedMockup = () => (
  <div className="mt-4 space-y-3">
    <div className="flex items-center justify-between mb-1">
      <p className="text-[11px] text-neutral-400 uppercase tracking-widest font-semibold">Verified Doctors</p>
      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
    </div>
    {[
      { src: "https://images.pexels.com/photos/5722157/pexels-photo-5722157.jpeg?auto=compress&cs=tinysrgb&w=100", name: "Dr. Vikram Rao", spec: "Pediatrician", rating: 4.9 },
      { src: "https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=100", name: "Dr. Suma M", spec: "Dermatologist", rating: 5.0 },
    ].map((d) => (
      <div key={d.name} className="flex items-center justify-between bg-white/[0.04] border border-white/8 rounded-xl px-3 py-2">
        <DoctorAvatar src={d.src} name={d.name} status="online" />
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span className="text-xs text-white font-bold">{d.rating}</span>
          </div>
          <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
            <ShieldCheck className="w-2.5 h-2.5" /> Verified
          </span>
        </div>
      </div>
    ))}
  </div>
);

const DocsMockup = () => (
  <div className="mt-4 space-y-2.5">
    <div className="flex items-center justify-between mb-1">
      <p className="text-[11px] text-neutral-400 uppercase tracking-widest font-semibold">Medical Records</p>
      <FileText className="w-3.5 h-3.5 text-emerald-400" />
    </div>
    {[
      { name: "Consultation Summary", date: "Sep 5, 2026", tag: "New" },
      { name: "Doctor's Notes", date: "Aug 28, 2026", tag: null },
      { name: "Prescription", date: "Aug 10, 2026", tag: null },
    ].map((doc) => (
      <div key={doc.name} className="flex items-center justify-between bg-white/[0.04] border border-white/8 rounded-xl px-3 py-2 group hover:border-emerald-500/30 transition-all">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white">{doc.name}</p>
            <p className="text-[10px] text-neutral-500">{doc.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {doc.tag && (
            <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">{doc.tag}</span>
          )}
          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-emerald-400 transition-colors" />
        </div>
      </div>
    ))}
  </div>
);

// ─── Feature Data ──────────────────────────────────────────────────────────────

const featureData = [
  {
    id: "profile",
    step: "01",
    icon: User,
    title: "Create Your Profile",
    description: "Complete your profile to get personalized healthcare recommendations from verified specialists.",
    mockup: <ProfileMockup />,
    span: "lg:col-span-1",
  },
  {
    id: "booking",
    step: "02",
    icon: Calendar,
    title: "Book Appointments",
    description: "Browse doctors, check real-time availability, and instantly book appointments that fit your schedule.",
    mockup: <BookingMockup />,
    span: "lg:col-span-2",
  },
  {
    id: "video",
    step: "03",
    icon: Video,
    title: "Video Consultation",
    description: "Connect via encrypted HD video from home. No travel, no waiting rooms.",
    mockup: <VideoMockup />,
    span: "lg:col-span-2",
  },
  {
    id: "credits",
    step: "04",
    icon: CreditCard,
    title: "Consultation Credits",
    description: "Flexible credit packages that fit your healthcare needs — credits never expire.",
    mockup: <CreditsMockup />,
    span: "lg:col-span-1",
  },
  {
    id: "verified",
    step: "05",
    icon: ShieldCheck,
    title: "Verified Doctors",
    description: "Every doctor is carefully vetted, licensed, and reviewed before joining the platform.",
    mockup: <VerifiedMockup />,
    span: "lg:col-span-1",
  },
  {
    id: "docs",
    step: "06",
    icon: FileText,
    title: "Medical Documentation",
    description: "Access your full history — prescriptions, notes, and consultation summaries in one place.",
    mockup: <DocsMockup />,
    span: "lg:col-span-2",
  },
];

// ─── Main Component ────────────────────────────────────────────────────────────

export const FeatureCards = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
      {featureData.map((f) => {
        const Icon = f.icon;
        const isHovered = hovered === f.id;

        return (
          <motion.div
            key={f.id}
            className={`relative rounded-2xl border bg-neutral-950/70 backdrop-blur-xl overflow-hidden flex flex-col p-5 transition-all duration-300 cursor-default ${f.span} ${
              isHovered
                ? "border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.18)]"
                : "border-white/8 shadow-xl"
            }`}
            onMouseEnter={() => setHovered(f.id)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: featureData.indexOf(f) * 0.07 }}
          >
            {/* Ambient glow on hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"
                />
              )}
            </AnimatePresence>

            {/* Step badge + Icon row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                    isHovered
                      ? "bg-emerald-500/20 border-emerald-500/50 shadow-[0_0_16px_rgba(16,185,129,0.3)]"
                      : "bg-white/[0.06] border-white/10"
                  }`}
                >
                  <Icon className={`w-4.5 h-4.5 transition-colors duration-300 ${isHovered ? "text-emerald-400" : "text-neutral-400"}`} />
                </div>
                <span className="text-[11px] font-mono font-bold text-neutral-600 tracking-widest">
                  {f.step}
                </span>
              </div>
              <ArrowUpRight
                className={`w-4 h-4 transition-all duration-300 ${
                  isHovered ? "text-emerald-400 translate-x-0.5 -translate-y-0.5" : "text-neutral-700"
                }`}
              />
            </div>

            {/* Title */}
            <h3 className="text-base font-bold text-white leading-snug mb-1.5">
              {f.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-neutral-400 leading-relaxed">
              {f.description}
            </p>

            {/* Mini UI Mockup */}
            <div className="mt-auto">{f.mockup}</div>
          </motion.div>
        );
      })}
    </div>
  );
};
