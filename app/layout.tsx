export const metadata = {
  title: "Digital Star Chain",
  description: "Digital marketing strategies for measurable growth"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont"
        }}
      >
        {children}
      </body>
    </html>
  );
}
