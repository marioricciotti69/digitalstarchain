import "./globals.css";

export const metadata = {
  title: "Digital Star Chain",
  description: "Digital Star Chain website"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
