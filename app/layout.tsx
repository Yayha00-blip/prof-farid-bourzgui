import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prof. Dentist | The Library",
  description: "High-end dental academic site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black antialiased selection:bg-accent selection:text-black">
        {children}
      </body>
    </html>
  );
}