import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setIsNavbarVisible(false);
            } else {
                // Scrolling up
                setIsNavbarVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed bg-white w-full z-50 top-0 transition-transform duration-300 ${
                isNavbarVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="mx-auto px-4 py-4 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold">
                    <img
                        src="/assets/images/logo.png"
                        alt="logo"
                        className="w-16"
                    />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
