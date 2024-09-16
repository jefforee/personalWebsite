import "./styles/globals.css"
import NavBar from "./components/Navbar.js"
import Footer from "./components/Footer.js";

export const metadata = {
  title: 'Jeffrey Huang',
  description: 'My Personal Website',
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" class="scroll-smooth">
      <body className="bg-[#E0E0DB] ">
        {/* NewBar */}
        <NavBar></NavBar>
        <div className="w-full px-[10%] lg:px-60">
          <main>{children}</main>
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
};

