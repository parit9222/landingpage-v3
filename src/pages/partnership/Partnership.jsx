import React from "react";
import { motion } from "framer-motion";

export default function Partnership() {
  const cards = [
    {
      icon: "/assets/images/businessDeal.png",
      title: "Official Sports Partners",
      description:
        "We work closely with leagues, teams, and sports bodies to deliver real-time match data, verified player stats, and authentic fantasy competitions users can trust.",
    },
    {
      icon: "/assets/images/yoga.png",
      title: "Athlete & Creator Network",
      description:
        "Top athletes and sports creators collaborate with World 11 to share expert insights, exclusive leagues, and community-driven challenges.",
    },
    {
      icon: "/assets/images/chain.png",
      title: "Blockchain Infrastructure",
      description:
        "Powered by leading blockchain partners, World 11 ensures secure transactions, transparent rewards, and tamper-proof digital assets across the platform.",
    },
    {
      icon: "/assets/images/globalBusiness.png",
      title: "Brand & Enterprise Alliances",
      description:
        "Global brands and enterprises partner with World 11 to reach passionate sports fans through sponsorships, campaigns, and immersive digital experiences.",
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
        delay: delay,
        ease: "easeOut",
      },
    },
  });

  const Card = ({ icon, title, description, }) => {
    return (
      <div
        className="bg-white/5 backdrop-blur-md border border-white/10 
                   p-5 sm:p-6 rounded-2xl hover:bg-white/10 
                   transition-all duration-300"
      >
        <div className="w-10 h-10 flex items-center justify-center mb-4">
          <img src={icon} alt={title} className="w-6 sm:w-8 h-6 sm:h-8 object-contain" />
        </div>

        <h3 className="text-base sm:text-lg font-semibold mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    );
  };

  return (
    <section
      id="partnership"
      className="relative w-full bg-black overflow-hidden"
    >

      <div
        className="absolute inset-0 bg-contain bg-no-repeat bg-black md:bg-cover md:bg-center"
        style={{
          backgroundImage: "url('/assets/images/partnership.png')",
        }}
      />
      <div
        className="relative z-10 max-w-6xl mx-auto 
                   px-4 sm:px-6 lg:px-8 
                   py-16 sm:py-20 lg:py-32 
                   text-white"
      >
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left Label */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/4 text-left lg:text-center"
          >
            <p className="text-gray-500 text-sm sm:text-base tracking-wide">
              Partnerships
            </p>
          </motion.div>

          {/* Right Content */}
          <div className="lg:w-3/4">

            {/* Heading Section */}
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/assets/images/03.png"
                alt="03"
                className="absolute 
                           -top-10 sm:-top-12 lg:-top-20 
                           left-0 lg:-left-12 
                           w-14 sm:w-20 lg:w-32 
                           pointer-events-none"
              />

              <h2
                className="relative z-10 
                           text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                           font-semibold leading-snug max-w-xl"
              >
                Building the World’s Most Powerful Fantasy Sports Network
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-500 mt-6 
                         text-base sm:text-lg 
                         max-w-2xl leading-relaxed"
            >
              <span className="text-white">
                World 11 collaborates with sports, technology,
              </span>{" "}
              and business leaders to create a transparent, scalable, and
              next-generation fantasy sports experience.
            </motion.p>

            {/* Cards Grid */}
            <div
              className="grid 
                         grid-cols-1 
                         sm:grid-cols-2 
                         gap-5 sm:gap-6 
                         mt-12 sm:mt-14 
                         max-w-2xl"
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
