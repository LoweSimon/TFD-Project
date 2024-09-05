import type { Metadata } from "next";
import "./globals.css";
import NavBar from './components/NavBar';


export const metadata: Metadata = {
  title: "The First Descendant Builder",
  description: "An app for The First Descendant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='font-mono bg-gray-900'>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
