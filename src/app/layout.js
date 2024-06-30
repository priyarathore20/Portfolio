import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Priya Rathore - Web Developer",
  description: "Explore my web development journey and projects. I'm Priya Rathore, a passionate web developer with a focus on creating user-friendly and responsive websites. View my portfolio and get in touch to discuss collaboration opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
