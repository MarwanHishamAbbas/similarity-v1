import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/Toast";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-900 antialiased",
        montserrat.className
      )}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          {children}
          <Toaster position="bottom-right" />
        </Providers>
        {/* Allow for more hight on mobile devices */}
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}
