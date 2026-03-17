import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TodoProvider } from "@/context/TodoContext";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo List TT",
  description: "Todo List a Simple design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <TodoProvider>
          <div className="bg-[#f8fafc] min-h-screen ">{children}</div>
        </TodoProvider>
      </body>
    </html>
  );
}
