import "./styles/globals.css"
import NavBar from "./components/Navbar.js"

export const metadata = {
  title: 'Jeffrey Huang',
  description: 'My Personal Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#E0E0DB] ">
        {/* NewBar */}
        <NavBar></NavBar>
        <div className="w-full sm:py-2 md:py-12 lg:py-24 px-[10%] lg:px-60">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

