import React from "react";
import { Button } from "./ui/button";
import {
  Calendar,
  CreditCard,
  ShieldCheck,
  Stethoscope,
  User,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import { Badge } from "./ui/badge";
import { checkAndAllocateCredits } from "@/actions/credits";
import Image from "next/image";

export default async function Header() {
  const user = await checkUser();
  if (user?.role === "PATIENT") {
    await checkAndAllocateCredits(user);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl transition-all duration-300">
      <nav className="container mx-auto max-w-7xl h-18 px-4 flex items-center justify-between">
        {/* Logo Section with Enhanced Visibility & Glow */}
        <Link
          href="/"
          className="relative flex items-center gap-2.5 cursor-pointer group py-1"
        >
          {/* Ambient Backlight Glow */}
          <div className="absolute -left-1 -top-1 w-10 h-10 rounded-full bg-emerald-500/25 blur-lg pointer-events-none transition-all duration-300 group-hover:bg-emerald-400/40 group-hover:scale-125" />

          {/* Brightened Logo Graphic */}
          <div className="relative flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="ConsultX Emblem"
              width={40}
              height={40}
              className="h-9 w-auto object-contain brightness-125 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* High-Contrast Brand Text */}
          <span className="text-xl font-bold tracking-tight text-white transition-colors duration-300">
            Consult<span className="text-emerald-400">X</span>
          </span>
        </Link>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <SignedIn>
            {/* Admin Dashboard */}
            {user?.role === "ADMIN" && (
              <Link href="/admin">
                <Button
                  variant="ghost"
                  className="hidden md:inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/90 border border-white/10 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] cursor-pointer"
                >
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  Admin Dashboard
                </Button>
                <Button
                  variant="ghost"
                  className="md:hidden w-10 h-10 p-0 bg-white/5 border border-white/10 rounded-xl"
                >
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                </Button>
              </Link>
            )}

            {/* Doctor Dashboard */}
            {user?.role === "DOCTOR" && (
              <Link href="/doctor">
                <Button
                  variant="ghost"
                  className="hidden md:inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/90 border border-white/10 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] cursor-pointer"
                >
                  <Stethoscope className="h-4 w-4 text-emerald-400" />
                  Doctor Dashboard
                </Button>
                <Button
                  variant="ghost"
                  className="md:hidden w-10 h-10 p-0 bg-white/5 border border-white/10 rounded-xl cursor-pointer"
                >
                  <Stethoscope className="h-4 w-4 text-emerald-400" />
                </Button>
              </Link>
            )}

            {/* Patient Appointments */}
            {user?.role === "PATIENT" && (
              <Link href="/appointments">
                <Button
                  variant="ghost"
                  className="hidden md:inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/90 border border-white/10 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] cursor-pointer"
                >
                  <Calendar className="h-4 w-4 text-emerald-400" />
                  My Appointments
                </Button>
                <Button
                  variant="ghost"
                  className="md:hidden w-10 h-10 p-0 bg-white/5 border border-white/10 rounded-xl cursor-pointer"
                >
                  <Calendar className="h-4 w-4 text-emerald-400" />
                </Button>
              </Link>
            )}

            {/* Unassigned Profile Complete */}
            {user?.role === "UNASSIGNED" && (
              <Link href="/onboarding">
                <Button
                  variant="ghost"
                  className="hidden md:inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/90 border border-white/10 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-[1px] cursor-pointer"
                >
                  <User className="h-4 w-4 text-emerald-400" />
                  Complete Profile
                </Button>
                <Button
                  variant="ghost"
                  className="md:hidden w-10 h-10 p-0 bg-white/5 border border-white/10 rounded-xl cursor-pointer"
                >
                  <User className="h-4 w-4 text-emerald-400" />
                </Button>
              </Link>
            )}
          </SignedIn>

          {/* Credits Pill (Hidden for Admins) */}
          {(!user || user?.role !== "ADMIN") && (
            <Link href={user?.role === "PATIENT" ? "/pricing" : "/doctor"}>
              <Badge
                variant="outline"
                className="h-10 bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/20 px-3.5 py-1.5 flex items-center gap-2 rounded-xl text-emerald-400 transition-all duration-300 hover:-translate-y-[1px] cursor-pointer hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
              >
                <CreditCard className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-xs font-semibold tracking-wide">
                  {user && user.role !== "ADMIN" ? (
                    <>
                      {user.credits}{" "}
                      <span className="hidden md:inline">
                        {user?.role === "PATIENT"
                          ? "Credits"
                          : "Earned Credits"}
                      </span>
                    </>
                  ) : (
                    <>Pricing</>
                  )}
                </span>
              </Badge>
            </Link>
          )}

          {/* Guest Sign-In CTA */}
          <SignedOut>
            <SignInButton mode="modal">
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-black font-semibold rounded-xl px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer flex items-center gap-1.5">
                Sign In
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </SignInButton>
          </SignedOut>

          {/* User Profile Avatar with Online Status Dot */}
          <SignedIn>
            <div className="relative flex items-center justify-center p-0.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/30 hover:rotate-2">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9 rounded-full",
                    userButtonPopoverCard:
                      "shadow-2xl border border-white/10 bg-slate-950 text-white",
                    userPreviewMainIdentifier: "font-semibold text-white",
                  },
                }}
                afterSignOutUrl="/"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-black rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)] pointer-events-none" />
            </div>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
