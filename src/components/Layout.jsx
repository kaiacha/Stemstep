import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AIGuidance from './AIGuidance';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-background font-sans text-text">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <AIGuidance />
            <Footer />
        </div>
    );
};

export default Layout;
