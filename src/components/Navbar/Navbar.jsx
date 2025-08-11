import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import logo from "../../assets/logo_portfolio.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = ["About", "Experience", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full fixed z-50 px-6 md:px-20 py-6 transition-colors duration-300 shadow-md ${scrolled
          ? "bg-gradient-to-br from-[#0b0c1a] via-[#0c0f2a] to-[#0b0c1a]"
          : "bg-transparent"
        }`}
    >
      <div className="flex items-center justify-between">

        <motion.a
          href="#Home"
          className="inline-flex items-center justify-center h-10 w-auto overflow-visible"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={logo}
            alt="Logo"
            className="h-17 w-auto scale-150" // visually bigger
          />
        </motion.a>





        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              {navLinks.map((item) => (
                <NavigationMenuItem key={item}>
                  <NavigationMenuLink
                    href={`#${item}`}
                    className="text-[#e5d4ff] hover:text-[#b794f4] transition-colors"
                  >
                    {item}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="md:hidden">
          {menuOpen ? (
            <RiCloseLine size={28} className="cursor-pointer text-[#e5d4ff]" onClick={() => setMenuOpen(false)} />
          ) : (
            <RiMenu2Line size={28} className="cursor-pointer text-[#e5d4ff]" onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-[#12132e] rounded-xl p-6 space-y-4 font-medium text-md"
          >
            {navLinks.map((item) => (
              <li key={item} className="hover:text-[#b794f4] transition">
                <a href={`#${item}`} onClick={() => setMenuOpen(false)} className="text-[#e5d4ff]">
                  {item}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
