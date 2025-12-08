import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AIGuidance from "./AIGuidance";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-text w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full overflow-x-hidden overflow-y-visible">
        {children}
      </main>
      <AIGuidance />
      <Footer />
    </div>
  );
};

export default Layout;
