import Link from "next/link";
import { ArrowRight, Search, Stethoscope, Sparkles, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Pricing from "@/components/pricing";
import { creditBenefits, features, testimonials } from "@/lib/data";
import { FeatureCards } from "@/components/feature-cards";
import { AnimatedTestimonials } from "@/components/testimonial-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTASection } from "@/components/cta-section";
import { RadialCarousel } from "@/components/radial-carousel";

const heroSpecialists = [
  {
    id: "dr-downey",
    title: "Dr. Robert Downey",
    url: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "dr-suma",
    title: "Dr. Suma M",
    url: "https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "dr-vikram",
    title: "Dr. Vikram Rao",
    url: "https://images.pexels.com/photos/5722157/pexels-photo-5722157.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "dr-aditi",
    title: "Dr. Aditi Sharma",
    url: "https://plus.unsplash.com/premium_photo-1664475450083-5c9eef17a191?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "dr-keerthana",
    title: "Dr. Keerthana",
    url: "https://plus.unsplash.com/premium_photo-1682089874677-3eee554feb19?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "dr-ethan",
    title: "Dr. Ethan Hall",
    url: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "dr-sarah",
    title: "Dr. Sarah Jenkins",
    url: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "dr-michael",
    title: "Dr. Michael Chang",
    url: "https://images.pexels.com/photos/6234634/pexels-photo-6234634.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "dr-elena",
    title: "Dr. Elena Gomez",
    url: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "dr-david",
    title: "Dr. David Kim",
    url: "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function Home() {
  return (
    <div className="bg-[#050B08] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden pt-28 pb-16 lg:py-12">
        {/* Modern Ambient Mesh Lighting & Glows */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-2/3 w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[140px]" />
          <div className="absolute -top-20 -left-20 w-[450px] h-[450px] rounded-full bg-emerald-600/10 blur-[120px]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050B08] to-transparent" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Headlines & CTA */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <Badge
                  variant="outline"
                  className="bg-emerald-950/60 backdrop-blur-md border-emerald-500/30 px-4 py-1.5 text-emerald-400 text-sm font-medium rounded-full inline-flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                >
                  <Sparkles className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
                  Healthcare made simple.
                </Badge>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] flex flex-col">
                <span>
                  Connect <br className="hidden sm:block" /> with doctors
                </span>
                <span className="text-emerald-400 font-normal mt-1">
                  Anytime, Anywhere
                </span>
              </h1>

              {/* Paragraph */}
              <p className="text-emerald-100/80 text-lg md:text-xl max-w-[540px] mx-auto lg:mx-0 font-normal leading-relaxed drop-shadow-sm">
                Book appointments, consult via high-definition video, and manage
                your family&apos;s healthcare journey all in one secure platform.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#20e28f] hover:bg-[#1bc77d] text-black font-semibold rounded-full px-8 py-6 text-base transition-all duration-200 shadow-lg shadow-emerald-500/20 cursor-pointer hover:scale-105"
                >
                  <Link
                    href="/onboarding"
                    className="flex items-center justify-center gap-2"
                  >
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-black/60 border-white/15 hover:border-white/30 hover:bg-black/80 text-white font-medium rounded-full px-8 py-6 text-base backdrop-blur-md transition-all duration-200 cursor-pointer hover:scale-105"
                >
                  <Link
                    href="/doctors"
                    className="flex items-center justify-center gap-2"
                  >
                    <Search className="h-4 w-4 text-emerald-400" />
                    Find Doctors
                  </Link>
                </Button>
              </div>

              {/* Key Trust Stats Pill Bar */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-neutral-300/80 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-emerald-400" />
                  <span>100% Verified Doctors</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <span>Instant 24/7 Booking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-emerald-400" />
                  <span>5,000+ Consultations</span>
                </div>
              </div>
            </div>

            {/* Right Column: Radial Carousel Hub */}
            <div className="lg:col-span-6 flex items-center justify-center relative w-full">
              <RadialCarousel items={heroSpecialists} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-emerald-950/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform makes healthcare accessible with just a few clicks
            </p>
          </div>

          <FeatureCards items={features} />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4"
            >
              Affordable Healthcare
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Consultation Packages
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the perfect consultation package that fits your healthcare
              needs
            </p>
          </div>

          <div className="mx-auto">
            <Pricing />

            <Card className="mt-12 bg-muted/20 border-emerald-900/30">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center">
                  <Stethoscope className="h-5 w-5 mr-2 text-emerald-400" />
                  How Our Credit System Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {creditBenefits.map((benefit, index) => (
                    <AccordionItem value={String(index)} key={index}>
                      <AccordionTrigger className="hover:no-underline cursor-pointer text-white">
                        {benefit.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p
                          className="text-muted-foreground"
                          dangerouslySetInnerHTML={{ __html: benefit.answer }}
                        />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-emerald-950/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4"
            >
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from patients and doctors who use our platform
            </p>
          </div>

          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
