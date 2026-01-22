import Link from "next/link";
export const metadata = {
  title: "Digital Star Chain — Digital Growth Partner",
  description:
    "Digital Star Chain is a corporate-grade growth partner for digital channels, focused on clarity, execution, and measurable results."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

