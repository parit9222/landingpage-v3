import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeOut",
      },
    },
  });

  return (
    <div
      id="home"
      className="relative min-h-100 sm:min-h-screen bg-cover bg-black bg-center"
      style={{
        backgroundImage: "url('/assets/images/home.png')",
      }}
    >
      {/* Side Center Mask Images */}
      <img
        src="/assets/images/maskGroup01.png"
        alt="mask-left"
        className="absolute left-0 top-95 md:top-130 lg:top-220 -translate-y-1/2 w-38 sm:w-44 md:w-68 lg:w-100 z-0 pointer-events-none"
      />

      <img
        src="/assets/images/maskGroup02.png"
        alt="mask-right"
        className="absolute right-0 top-36 md:top-60 lg:top-80 -translate-y-1/2 opacity-50 w-32 sm:w-44 md:w-62 lg:w-80 z-0 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">

        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-6 lg:gap-8 text-white pt-24 sm:pt-34 lg:pt-60"
        >

          <div className="lg:w-[20%] text-left lg:text-center">
            <p className="text-[14px] sm:text-[16px] tracking-widest text-gray-400">
              by WORLD XI
            </p>
          </div>

          <div className="md:w-[60%] lg:w-[80%] text-left">
            <h1 className="text-2xl sm:text-4xl lg:text-7xl font-semibold text-white! leading-tight mb-4 lg:mb-6">
              One Platform. Two <br className="hidden lg:block" />
              Sports. Infinite Action.
            </h1>

            <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed">
              <span className="text-white font-medium">
                All your cricket and football action
              </span>{" "}
              in one powerful platform.
              <br className="hidden lg:block" />
              Track matches, build teams, and play smarter every moment counts.
            </p>
          </div>

        </motion.div>


        <div className="flex items-end justify-center gap-4 sm:gap-6 md:gap-10 pt-16 sm:pt-28 lg:pt-80 pb-2 sm:pb-10">

          <motion.img
            src="/assets/images/group01.png"
            alt="group01"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-24 sm:w-36 md:w-42 lg:w-72 drop-shadow-2xl"
          />

          <motion.img
            src="/assets/images/group02.png"
            alt="group02"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-28 sm:w-44 md:w-48 lg:w-80 md:scale-105 drop-shadow-2xl"
          />

          <motion.img
            src="/assets/images/group03.png"
            alt="group03"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-24 sm:w-36 md:w-42 lg:w-72 drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
