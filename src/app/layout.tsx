import "./globals.css";
import { DM_Sans } from "next/font/google";
import { NavSection } from "@/components/NavSection";
const dm_sans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata = {
  title: "Startup Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={dm_sans.variable}>
      <body className={`${dm_sans.variable}  text-white px-11`}>
        <NavSection />
        {children}
      </body>
    </html>
  );
}
