import "./globals.css";

export const metadata = {
  title: "Royal Travel | Destination Management Company",
  description: "Your trusted B2B Destination Management Company. Curated travel packages, luxury stays, and seamless ground handling across India and 50+ countries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
