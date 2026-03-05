import React from "react";
import { motion } from "framer-motion";
import { ICONS } from "../../components/constant/image";
import { Link } from "react-router-dom";
import { FACEBOOK_URL, INSTAGRAM_URL, TELEGRAM_URL, TWITTER_URL } from "../../components/constant";

function Footer() {
  const FOOTER_ITEMS = [
    { label: "ABOUT US", id: "about", isScroll: true },
    { label: "KYC POLICY", link: "/know-your-customer-policy" },
    { label: "RESPONSIBLE GAMING", link: "/responsible-gaming" },
    { label: "TERMS & CONDITIONS", link: "/terms-and-conditions" },
    { label: "PRIVACY POLICY", link: "/privacy-policy" },
  ];

  /* ========= SAME ANIMATION STYLE ========= */
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut",
      },
    },
  });

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <section
      id="footer"
      className="bg-[#f2f2f2] pt-20 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* ================= HEADING ================= */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center mx-auto font-semibold leading-tight max-w-xl lg:max-w-4xl">
            Stop guessing. Start predicting smarter only on one centralized
            soccer & cricket Probo platform.
          </h1>
        </motion.div>

        {/* ================= SOCIAL ICONS ================= */}
        {/* <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-between max-w-md mx-auto mt-14"
        >
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition duration-300 hover:scale-110"
          >
            <img src={ICONS.FACEBOOK} alt="Facebook" className="w-10" />
            <i className="fa-brands fa-facebook-f"></i>
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition duration-300 hover:scale-110"
          >
            <img src={ICONS.LINKEDIN} alt="LinkedIn" className="w-10" />
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition duration-300 hover:scale-110"
          >
            <img src={ICONS.TWITTER} alt="Twitter" className="w-10" />
            <i className="fa-brands fa-twitter"></i>
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition duration-300 hover:scale-110"
          >
            <img src={ICONS.INSTAGRAM} alt="Instagram" className="w-10" />
            <i className="fa-brands fa-instagram"></i>
          </a>
        </motion.div> */}

        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-between max-w-md mx-auto mt-14"
        >
          {/* FACEBOOK */}
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8d8979] hover:text-[#1877F2] 
               opacity-70 hover:opacity-100 
               transition duration-300 hover:scale-110 text-2xl"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>

          {/* LINKEDIN */}
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8d8979] hover:text-[#0A66C2] 
               opacity-70 hover:opacity-100 
               transition duration-300 hover:scale-110 text-2xl"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>

          {/* TWITTER */}
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8d8979] hover:text-[#1DA1F2] 
               opacity-70 hover:opacity-100 
               transition duration-300 hover:scale-110 text-2xl"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>

          {/* INSTAGRAM */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8d8979] hover:text-[#E4405F] 
               opacity-70 hover:opacity-100 
               transition duration-300 hover:scale-110 text-2xl"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            flex 
            justify-center 
            items-center
            gap-8 
            sm:gap-10 
            mt-14 
            text-xs 
            sm:text-sm 
            tracking-wider 
            text-gray-500 
            uppercase
          "
        >
          {FOOTER_ITEMS.map((item, index) =>
            item.isScroll ? (
              <button
                key={index}
                onClick={() => handleScrollTo(item.id)}
                className="hover:text-black text-center transition duration-300 cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={index}
                to={item.link}
                target="_blank"
                className="hover:text-black text-center transition duration-300 cursor-pointer"
              >
                {item.label}
              </Link>
            )
          )}
        </motion.div>


      </div>

      {/* ================= DIVIDER ================= */}
      <motion.div
        variants={fadeUp(1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border-t border-gray-300 mt-12"
      />

      {/* ================= COPYRIGHT ================= */}
      <motion.div
        variants={fadeUp(1.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-[12px] text-gray-600 py-6"
      >
        {getCurrentYear()} ALL RIGHTS RESERVED BY WORLD 11
      </motion.div>
    </section>
  );
}

export default Footer;
