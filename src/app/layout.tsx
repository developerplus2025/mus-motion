import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { CommandMenu } from "@/components/CommandMenu";
// import { Toaster } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/ProgressBarProvider";
import Footer from "@/components/footer";
import { ToasterSonner } from "../components/ui/sonner";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Stroma: A Useful Platform For Musicians",
  description: "Stroma - Home",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html
        suppressHydrationWarning
        lang="en"
        className={`${GeistSans.className} custom_command_scroll dark`}
        style={{ colorScheme: "dark" }}
      >
        <head />
        <body className="relative overflow-x-hidden antialiased">
          <ThemeProvider enableSystem attribute="class" defaultTheme="system">
            <Navigation />
            <Toaster />
            <ToasterSonner
              hotkey={["alt + C"]}
              toastOptions={{
                unstyled: false,
                classNames: {
                  cancelButton: "bg-orange-400",
                  closeButton:
                    "dark:bg-black right-[12px] top-1/2 -transalate-y-1/2 border border-[#404040] transition-[background] transition-colors  ease-out duration-500 bg-white hover:bg-muted dark:hover:bg-white dark:hover:text-black",
                },
              }}
              closeButton
              className="top-[38px]"
              position="top-center"
            />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
