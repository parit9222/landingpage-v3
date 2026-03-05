import React from "react";
import { motion } from "framer-motion";
import { ICONS, IMAGES } from "../../components/constant/image";

function Probo() {
  const features = [
    {
      icon: ICONS.SOCCER,
      title: "Soccer Predictions",
      description:
        "Predict match winners, goals, and key outcomes across top leagues and tournaments. Simple Yes/No decisions with live market updates.",
    },
    {
      icon: ICONS.CRICKET,
      title: "Cricket Predictions",
      description:
        "From T20 thrillers to ODI classics, predict match results and key moments. Built for fans who understand the game deeply.",
    },
    {
      icon: ICONS.REALTIME,
      title: "Real-Time Probability",
      description:
        "Each prediction is backed by live probability data so you can make informed decisions before the market closes.",
    },
    {
      icon: ICONS.RESULT,
      title: "Instant Results & Rewards",
      description:
        "Once the match outcome is decided, predictions are resolved instantly — winnings credited without delays.",
    },
    {
      icon: ICONS.ONECENTER,
      title: "One Centralized App",
      description:
        "Track predictions, open markets, and past performance — all in a single dashboard designed for speed and clarity.",
    },
    {
      icon: ICONS.SECURE,
      title: "Transparent & Secure",
      description:
        "Every prediction follows predefined rules with full transparency, giving you complete confidence in the system.",
    },
  ];

  /* ================= ANIMATION ================= */
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

  const FeatureCard = ({ icon, title, description }) => {
    return (
      <div
        className="bg-white/5 backdrop-blur-md border border-white/10 
                   p-4 rounded-xl hover:bg-white/10 
                   transition duration-300"
      >
        <div className="w-10 h-10 flex items-center justify-center mb-4">
          <img src={icon} alt={title} className="w-8 h-8 object-contain" />
        </div>

        <h3 className="text-base font-medium mb-2">{title}</h3>

        <p className="text-sm text-gray-400 leading-tight">
          {description}
        </p>
      </div>
    );
  };

  return (
    <section
      id="probo"
      className="relative py-10 bg-cover  bg-black bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${IMAGES.PROBOB})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-6xl mx-auto w-full text-white px-6 sm:py-10 lg:py-20 ">
        <div className="flex flex-col md:flex-row gap-10">

          {/* LEFT LABEL */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:w-1/4"
          >
            <p className="text-gray-500 text-[20px]">Probo</p>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="md:w-3/4">

            {/* HEADING */}
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={IMAGES.ZEROSEVEN}
                alt="07"
                className="absolute -top-8 md:-top-10 lg:-top-15 md:-left-8 lg:-left-8 w-14 sm:w-20 lg:w-32 pointer-events-none select-none"
              />

              <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight max-w-3xl">
                Predict. Play. Profit On Soccer & Cricket
              </h2>
            </motion.div>

            {/* DESCRIPTION PARAGRAPHS */}
            <motion.p
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 text-sm md:text-lg max-w-2xl leading-tight"
            >
              <span className="text-gray-500">
                A centralized sports prediction platform
              </span>{" "}
              where your match knowledge turns into real rewards. Simple, fast,
              and transparent.
            </motion.p>

            <motion.p
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-400 mt-6 text-base md:text-lg max-w-2xl leading-tight"
            >
              Our Probo section lets you participate in outcome-based
              predictions for{" "}
              <span className="text-white">soccer and cricket matches</span> all
              from one centralized app.
            </motion.p>

            <motion.p
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-400 mt-6 text-base md:text-lg max-w-2xl leading-tight"
            >
              With real-time markets and clear probability-based pricing, you
              always know where you stand.
            </motion.p>

            <motion.p
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-400 mt-6 text-base md:text-lg max-w-2xl leading-tight"
            >
              From high-pressure football clashes to nail-biting cricket
              finishes, every prediction is an opportunity to prove your sports
              IQ and earn rewards.
            </motion.p>

            {/* FEATURE GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 max-w-2xl">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp(index * 0.01)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <FeatureCard
                    key={index}
                    {...feature}
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

export default Probo;
