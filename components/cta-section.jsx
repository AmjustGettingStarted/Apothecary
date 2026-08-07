"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import {
  ArrowRight,
  Tag,
  UserPlus,
  Calendar,
  ShieldCheck,
  Lock,
  CheckCircle,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const { isSignedIn } = useAuth();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden border border-emerald-500/20 bg-[#040D08] p-8 md:p-12 lg:p-16 shadow-2xl shadow-emerald-950/50">
          {/* Background Graphic Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/cta-image.png"
              alt="Healthcare security visual background"
              fill
              className="object-cover object-center lg:object-right opacity-40 lg:opacity-100 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#040D08] via-[#040D08]/80 to-transparent lg:w-[55%]" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 max-w-xl space-y-8">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-3 bg-emerald-950/60 border border-emerald-500/30 rounded-full px-4 py-2 text-emerald-400 text-sm font-medium backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-xs">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Trusted by thousands of patients</span>
              </div>
              <div className="flex items-center -space-x-2">
                <div className="w-6 h-6 rounded-full border border-emerald-500/40 bg-emerald-800/60 overflow-hidden flex items-center justify-center text-[10px] text-white">
                  👨‍⚕️
                </div>
                <div className="w-6 h-6 rounded-full border border-emerald-500/40 bg-emerald-800/60 overflow-hidden flex items-center justify-center text-[10px] text-white">
                  👩‍⚕️
                </div>
                <div className="w-6 h-6 rounded-full border border-emerald-500/40 bg-emerald-800/60 overflow-hidden flex items-center justify-center text-[10px] text-white">
                  👨‍💼
                </div>
                <span className="pl-3 text-[11px] text-emerald-400 font-semibold">
                  10K+
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Ready to take control <br />
              of your <span className="text-[#20e28f]">healthcare?</span>
            </h2>

            {/* Subtitle */}
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-lg">
              {isSignedIn
                ? "Manage your upcoming consultations, explore specialized doctors, and continue your journey toward seamless healthcare."
                : "Join thousands of users who have simplified their healthcare journey with our platform. Get started today and experience healthcare the way it should be."}
            </p>

            {/* Dynamic Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-[#20e28f] hover:bg-[#1bc77d] text-background font-semibold rounded-full px-8 py-6 text-base transition-all duration-200 shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                {isSignedIn ? (
                  <Link
                    href="/doctors"
                    className="flex items-center justify-center gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Book Consultation
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                ) : (
                  <Link
                    href="/sign-up"
                    className="flex items-center justify-center gap-2"
                  >
                    <UserPlus className="h-5 w-5" />
                    Sign Up Now
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                )}
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-black/40 border-white/10 hover:border-white/20 hover:bg-black/60 text-white font-medium rounded-full px-8 py-6 text-base backdrop-blur-sm transition-all duration-200 cursor-pointer"
              >
                <Link
                  href="#pricing"
                  className="flex items-center justify-center gap-2"
                >
                  <Tag className="h-4 w-4 text-emerald-400" />
                  View Pricing
                </Link>
              </Button>
            </div>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Lock className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Easy To Use</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Headphones className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
