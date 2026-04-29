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

export const metadata = {
  title: "Nur Alya Khairina",
  description: "Information Systems student focused on data science, full-stack development, and UI/UX.",

  openGraph: {
    title: "Nur Alya Khairina",
    description: "Portfolio of Nur Alya Khairina, an Information Systems student focused on data science, full-stack development, and UI/UX.",
    url: "https://alyakhairina.com",
    siteName: "Alya Portfolio",
    images: [
      {
        url: "https://alyakhairina.com/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nur Alya Khairina",
    description: "Portfolio of Nur Alya Khairina, an Information Systems student focused on data science, full-stack development, and UI/UX.",
    images: ["https://alyakhairina.com/preview.png"],
  },
};