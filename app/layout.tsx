import "./globals.css";

export const metadata = {
  title: "Next Mindset",
  description: "Start where you are",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
