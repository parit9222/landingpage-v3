import React from "react";
import { motion } from "framer-motion";

export default function W11Token() {
  const cards = [
    {
      image: "/assets/images/w01.png",
      title: "What are World 11 Tokens?",
      description: "We work closely with leagues, teams, and sports bodies to deliver real-time match data, verified player stats, and authentic fantasy competitions users can trust.",
    },
    {
      image: "/assets/images/w02.png",
      title: "Blockchain-Powered",
      description: "We work closely with leagues, teams, and sports bodies to deliver real-time match data, verified player stats, and authentic fantasy competitions users can trust.",
    },
    {
      image: "/assets/images/w03.png",
      title: "How Tokens Can Be Used",
      description: "We work closely with leagues, teams, and sports bodies to deliver real-time match data, verified player stats, and authentic fantasy competitions users can trust.",
    },
    {
      image: "/assets/images/w04.png",
      title: "Token Economy",
      description: "We work closely with leagues, teams, and sports bodies to deliver real-time match data, verified player stats, and authentic fantasy competitions users can trust.",
    },
  ];

  // Animation Variant
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

  const Card = ({ image, title, description }) => (
    <div
      className="bg-white/5 backdrop-blur-md border border-white/10 
                 rounded-2xl overflow-hidden 
                 hover:bg-white/10 transition-all duration-300 group"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-44 sm:h-52 md:h-56 object-cover 
                     group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3">
          {title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <section
      id="token"
      className="relative w-full bg-black overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-contain bg-no-repeat md:bg-cover bg-black md:bg-center"
        style={{
          backgroundImage: "url('/assets/images/w11Token.png')",
        }}
      />
      <div
        className="relative max-w-6xl mx-auto 
                   px-4 sm:px-6 lg:px-8 
                   py-16 sm:py-20 lg:py-32 
                   text-white"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left Label */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/4 text-left lg:text-center"
          >
            <p className="text-gray-500 text-sm sm:text-base tracking-wide">
              World 11 Token
            </p>
          </motion.div>

          {/* Right Content */}
          <div className="lg:w-3/4 relative">

            {/* Background Number */}
            <motion.img
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              src="/assets/images/05.png"
              alt="05"
              className="absolute 
                         -top-8 sm:-top-10 lg:-top-10 
                         left-0 lg:-left-12 
                         w-14 sm:w-20 lg:w-32 
                         opacity-40 pointer-events-none"
            />

            {/* Heading */}
            <motion.h2
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 
                         text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                         font-semibold leading-snug max-w-2xl"
            >
              Powering Fantasy Sports <br />
              with <span className="text-gray-300">Blockchain.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-500 mt-6 
                         text-base sm:text-lg 
                         max-w-xl leading-relaxed"
            >
              <span className="text-white">World 11 Token is the digital backbone of our fantasy sports</span> ecosystem.
              Earn, use, and trade tokens as you play, compete, and win across global
              sports tournaments — all secured by blockchain technology.
            </motion.p>

            {/* Cards Grid */}
            <div
              className="grid 
                         grid-cols-1 
                         sm:grid-cols-2 
                         gap-5 sm:gap-6 
                         mt-12 sm:mt-14"
            >
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp(index * 0.01)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card
                    key={index}
                    {...card}
                  />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
