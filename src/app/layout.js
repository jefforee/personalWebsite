"use client";

import { HasStartedProvider, useHasStarted } from "./contexts/HasStartedContext";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <HasStartedProvider>
      <html lang="en" className="scroll-smooth">
        <head>
          <title>Jeffrey Huang</title> 

          <link rel="icon" href="./icon.ico" sizes="any" />
        </head>

        <body className="bg-[#E0E0DB]">
          <NavBar />
          <div className="w-full px-[10%] lg:px-60">
            <main>{children}</main>
          </div>
          <FooterWrapper /> {/* Conditionally renders Footer */}
        </body>
      </html>
    </HasStartedProvider>
  );
}

function FooterWrapper() {
  const { hasStarted } = useHasStarted();
  return hasStarted ? <Footer /> : null;
}
