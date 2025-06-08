import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
} from "lucide-react";

// JSON data for features
export const features = [
  {
    icon: <User className="h-6 w-6 text-emerald-400" />,
    title: "Create Your Profile",
    description:
      "Sign up and complete your profile to get personalized healthcare recommendations and services.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-emerald-400" />,
    title: "Book Appointments",
    description:
      "Browse doctor profiles, check availability, and book appointments that fit your schedule.",
  },
  {
    icon: <Video className="h-6 w-6 text-emerald-400" />,
    title: "Video Consultation",
    description:
      "Connect with doctors through secure, high-quality video consultations from the comfort of your home.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-emerald-400" />,
    title: "Consultation Credits",
    description:
      "Purchase credit packages that fit your healthcare needs with our simple subscription model.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
    title: "Verified Doctors",
    description:
      "All healthcare providers are carefully vetted and verified to ensure quality care.",
  },
  {
    icon: <FileText className="h-6 w-6 text-emerald-400" />,
    title: "Medical Documentation",
    description:
      "Access and manage your appointment history, doctor's notes, and medical recommendations.",
  },
];

// JSON data for testimonials
export const testimonials = [
  {
    initials: "Ma",
    name: "Mary",
    role: "Patient",
    src: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote:
      "The video consultation feature saved me so much time. I was able to get medical advice without taking time off work or traveling to a clinic.",
  },
  {
    initials: "DR",
    name: "Dr. Robert Downey",
    role: "Cardiologist",
    src: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote:
      "This platform has revolutionized my practice. I can now reach more patients and provide timely care without the constraints of a physical office.",
  },
  {
    initials: "Mia",
    name: "Mia",
    role: "Patient",
    src: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote:
      "This service was a lifesaver—quick, convenient, and reassuring. I got expert advice from the comfort of my home!",
  },
  {
    initials: "DR",
    name: "Dr. Suma M",
    role: "Gynocologist",
    src: "https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote:
      "The ability to assess and guide patients remotely has improved efficiency while maintaining the quality of care.",
  },
  {
    initials: "D",
    name: "Dino ",
    role: "Patient",
    src: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote:
      "The credit system is so convenient. I purchased a package for my family, and we've been able to consult with specialists whenever needed.",
  },
];

// JSON data for credit system benefits
export const creditBenefits = [
  {
    question: "How many credits does each consultation require?",
    answerer:
      "Each consultation requires <strong class='text-emerald-400'>2 credits</strong> regardless of duration",
  },
  {
    question: "Do credits expire?",
    answerer:
      "Credits <strong class='text-emerald-400'>never expire</strong> - use them whenever you need",
  },
  {
    question: "How does the monthly subscription work?",
    answerer:
      "Monthly subscriptions give you <strong class='text-emerald-400'>fresh credits every month</strong>",
  },
  {
    question: "Can I cancel or change my subscription?",
    answerer:
      "Cancel or change your subscription <strong class='text-emerald-400'>anytime</strong> without penalties",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept major <strong class='text-emerald-400'>credit cards</strong> and <strong class='text-emerald-400'>digital payment</strong> options for seamless transactions.",
  },
  {
    question: "Can I get a refund on unused credits?",
    answer:
      "Unfortunately, credits are <strong class='text-emerald-400'>non-refundable</strong>, but they never expire and can be used anytime.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! Our Basic plan includes <strong class='text-emerald-400'>2 free credits</strong>, allowing you to experience consultations at no cost.",
  },
  {
    question: "How do I upgrade my subscription?",
    answer:
      "You can upgrade anytime by selecting a <strong class='text-emerald-400'>higher-tier</strong> package in your account settings.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No hidden fees—what you see is what you pay, ensuring complete <strong class='text-emerald-400'>transparency</strong> in pricing.",
  },
  {
    question: "Can I share credits with family members?",
    answer:
      "Credits are linked to your account but can be used to book consultations for <strong class='text-emerald-400'>family members</strong>.",
  },
];
