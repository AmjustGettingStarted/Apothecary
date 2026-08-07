import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";
import { format } from "date-fns";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ConsultX 🩺 ",
  description: "Connect with doctors anytime, anywhere",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-[#050B08] border-t border-white/5 py-8">
              <div className="container mx-auto px-4 text-center text-muted-foreground/60 text-sm flex justify-center items-center">
                <p>
                  ©{format(new Date(), "yyyy")}{" "}
                  <span className="text-emerald-500/40 mx-1.5">|</span> HMV{" "}
                  <span className="text-emerald-500/40 mx-1.5">|</span> ConsultX
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
