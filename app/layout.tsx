import "./globals.css";
import "./components.css";
import Navbar from "@/components/Navbar";
// import ScrollSnap from "@/components/ScrollSnap";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <ScrollSnap /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}