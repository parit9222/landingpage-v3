import React, { useEffect, useState } from "react";
import { PLAY_URL } from "../constant";

const NAV_ITEMS = [
  { label: "HOME", id: "home" },
  { label: "ABOUT US", id: "about" },
  { label: "HOW IT WORKS", id: "how" },
  { label: "PARTNERSHIPS", id: "partnership" },
  { label: "SPORTS", id: "sports" },
  { label: "WORLD XI TOKEN", id: "token" },
  { label: "TOURNAMENTS", id: "tournaments" },
  { label: "PROBO", id: "probo" },
  { label: "CONTACT US", id: "footer" },
];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMenuOpen(false);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ✅ Prevent body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 
        backdrop-blur-md shadow-md bg-black/60  
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">

          {/* Logo */}
          <img
            src="/assets/images/logo.png"
            alt="logo"
            onClick={() => {
              window.history.replaceState({}, document.title, window.location.pathname);
              window.location.href = window.location.pathname;
            }}
            className="w-10 h-10 object-contain cursor-pointer"
          />


          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 text-white text-[12px] tracking-wide">
            {NAV_ITEMS.map((item, index) => (
              <li key={index} className="hover:text-gray-300 text-sm transition">
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className="hover:text-gray-300 text-sm transition cursor-pointer"
                >
                  {item.label}
                </button>

              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition text-center"
          >
            PLAY
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden"
          >
            <img
              src="/assets/images/menu.png"
              alt="menu"
              className="w-6 h-6 object-contain"
            />
          </button>

        </div>
      </nav>

      {/* ===== FULL SCREEN MOBILE MENU ===== */}
      <div
        className={`fixed inset-0 bg-black z-999 flex flex-col text-white transform transition-transform duration-500
  ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* Top Bar (Fixed) */}
        <div className="flex items-center justify-between px-6 py-6">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            onClick={() => {
              window.history.replaceState({}, document.title, window.location.pathname);
              window.location.href = window.location.pathname;
            }}
            className="w-10 cursor-pointer"
          />

          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Area (Menu + Button) */}
        <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start px-6 pb-10">

          <ul className="flex flex-col items-center gap-6 text-lg tracking-widest py-4">
            {NAV_ITEMS.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className="hover:text-gray-400 transition cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Contact Button (Scrollable with list) */}
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-white text-black px-8 py-3 rounded-full font-semibold text-center"
          >
            PLAY
          </a>

        </div>
      </div>
    </>
  );
}
