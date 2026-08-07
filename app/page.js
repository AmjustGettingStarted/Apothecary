import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, Stethoscope } from "lucide-react";
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

export default function Home() {
  return (
    <div className="bg-[#050B08] text-white">
      {/* Hero Section - 100vh Full Screen */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden py-20 lg:py-0">
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner.png"
            alt="Doctor consultation visual background"
            fill
            priority
            className="object-cover object-center lg:object-[80%_center] opacity-30 sm:opacity-40 lg:opacity-100 transition-opacity duration-300 pointer-events-none"
          />

          {/* Left-to-right gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B08] via-[#050B08]/85 to-transparent lg:w-[60%]" />

          {/* NEW: Bottom gradient blending smoothly into bg-emerald-950/10 */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#06160e] via-[#06160e]/70 to-transparent pointer-events-none" />
        </div>

        {/* Content Container - 50% width balance */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl lg:max-w-[50%] space-y-8">
            <Badge
              variant="outline"
              className="bg-emerald-950/40 border-emerald-500/30 px-4 py-1.5 text-emerald-400 text-sm font-medium rounded-full"
            >
              Healthcare made simple.
            </Badge>

            {/* Headline with 14px added breathability */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] flex flex-col ">
              <span>
                Connect <br /> with doctors
              </span>
              <span className="text-emerald-400 font-normal">
                Anytime, Anywhere
              </span>
            </h1>

            {/* Paragraph Capped at ~500px width */}
            <p className="text-emerald-100/70 text-lg md:text-xl max-w-[500px] font-normal leading-relaxed">
              Book appointments, consult via video, and manage your healthcare
              journey all in one secure platform.
            </p>

            {/* Styled Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-[#20e28f] hover:bg-[#1bc77d] text-black font-semibold rounded-full px-8 py-6 text-base transition-all duration-200 shadow-lg shadow-emerald-500/10"
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
                className="bg-black/40 border-white/10 hover:border-white/20 hover:bg-black/60 text-white font-medium rounded-full px-8 py-6 text-base backdrop-blur-sm transition-all duration-200"
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
