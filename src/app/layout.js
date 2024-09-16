// "use client"

// import { createContext, useContext, useState } from 'react';
// import "./styles/globals.css"
// import NavBar from "./components/Navbar.js"
// import Footer from "./components/Footer.js";

// const HasStartedContext = createContext();

// export default function RootLayout({ children }) {

//   const [hasStarted, setHasStarted] = useState(true);
  
//   return (
//     <html lang="en" class="scroll-smooth">
//       <body className="bg-[#E0E0DB] ">
//         {/* NewBar */}
//         <NavBar></NavBar>

//         <div className="w-full px-[10%] lg:px-60">
//           <main>{children}</main>
//         </div>
//         <Footer></Footer>
//       </body>
//     </html>
//   );
// };

"use client";

import { HasStartedProvider, useHasStarted } from "./contexts/HasStartedContext";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <HasStartedProvider>
      <html lang="en" className="scroll-smooth">
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
