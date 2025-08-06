import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="w-full bg-gradient-to-br from-[#0b0c1a] via-[#0c0f2a] to-[#0b0c1a] text-white px-6 md:px-20 py-6 fixed z-50 shadow-md">
            <div className="flex items-center justify-between">

                <a href="#Home" className="text-2xl font-bold tracking-wide text-[#b794f4]" onClick={handleLinkClick}>
                    Portfolio
                </a>

                <ul className="hidden md:flex gap-10 font-medium text-md">
                    {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                        <li key={item} className="hover:text-[#b794f4] transition">
                            <a href={`#${item}`} onClick={handleLinkClick}>{item}</a>
                        </li>
                    ))}
                </ul>

                <div className="md:hidden">
                    {menuOpen ? (
                        <RiCloseLine size={28} className="cursor-pointer" onClick={toggleMenu} />
                    ) : (
                        <RiMenu2Line size={28} className="cursor-pointer" onClick={toggleMenu} />
                    )}
                </div>
            </div>

            {menuOpen && (
                <ul className="md:hidden mt-4 bg-[#12132e] rounded-xl p-6 space-y-4 font-medium text-md transition-all duration-300">
                    {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                        <li key={item} className="hover:text-[#b794f4] transition">
                            <a href={`#${item}`} onClick={handleLinkClick}>{item}</a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
