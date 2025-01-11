import { Inter } from "next/font/google";
import "./globals.css";
import { ChatButton } from "@/components/chat-button";
import { AuthProvider } from "@/lib/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechBazaar - Your One-Stop Tech Shop",
  description:
    "Discover cutting-edge technology and premium products at TechBazaar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <ChatButton />
        </AuthProvider>
      </body>
    </html>
  );
}
