import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
    const features = [
        {
            icon: "/assets/images/chain.png",
            title: "Trusted on Blockchain",
            description:
                "World 11 is designed for quick decisions. Users can join matches, make predictions, or build fantasy teams in just a few taps.",
        },
        {
            icon: "/assets/images/world.png",
            title: "Global Access",
            description:
                "World 11 is designed for quick decisions. Users can join matches, make predictions, or build fantasy teams in just a few taps.",
        },
        {
            icon: "/assets/images/codeCompare.png",
            title: "Competitive Leagues",
            description:
                "World 11 is designed for quick decisions. Users can join matches, make predictions, or build fantasy teams in just a few taps.",
        },
        {
            icon: "/assets/images/user.png",
            title: "Easy Team Creation & Monitoring",
            description:
                "World 11 is designed for quick decisions. Users can join matches, make predictions, or build fantasy teams in just a few taps.",
        },
        {
            icon: "/assets/images/gift.png",
            title: "Win Prizes",
            description:
                "World 11 is designed for quick decisions. Users can join matches, make predictions, or build fantasy teams in just a few taps.",
        },
    ];

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
                className="bg-white/5 backdrop-blur-lg border border-white/10 
                   p-5 rounded-2xl hover:bg-white/10 
                   transition-all duration-300"
            >
                <div className="w-10 h-10 flex items-center justify-center mb-4">
                    <img src={icon} alt={title} className="w-8 h-8 object-contain" />
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
            id="about"
            className="relative w-full bg-black bg-cover bg-center"
            style={{
                backgroundImage: "url('/assets/images/aboutus.png')",
            }}
        >
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 
                      py-16 sm:py-20 lg:py-38 text-white">

                <div className="flex flex-col lg:flex-row gap-12">

                    <motion.div
                        variants={fadeUp(0)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:w-1/4 text-left lg:text-center"
                    >

                        <p className="text-gray-400 text-sm sm:text-base tracking-wide">
                            About Us
                        </p>
                    </motion.div>

                    <div className="lg:w-3/4">

                        <motion.div
                            variants={fadeUp(0)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative"
                        >

                            <img
                                src="/assets/images/01.png"
                                alt="01"
                                className="absolute 
                           -top-10 sm:-top-10 lg:-top-22 sm:left-0 lg:-left-10 
                           w-14 sm:w-18 lg:w-28 
                           md:opacity-60 pointer-events-none z-0"
                            />

                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                             font-semibold leading-snug max-w-xl z-10 relative">
                                Fast, intuitive access to live sports data and{" "}
                                <span className="text-gray-400">
                                    predictions is the foundation of a modern fantasy experience.
                                </span>
                            </h2>
                        </motion.div>

                        <motion.div
                            variants={fadeUp(0)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >

                            <p className="text-gray-400 mt-6 text-base sm:text-lg leading-relaxed max-w-2xl">
                                In today’s always-connected world, users expect instant clarity, real-time updates, and effortless interaction. World 11 is built for users who want to engage with cricket and soccer without friction—whether it’s creating fantasy teams, tracking live matches, or making quick predictions.
                            </p>
                            <p className="text-gray-400 mt-4 text-base sm:text-lg leading-relaxed max-w-2xl">
                                Digital-first users don’t want to spend time learning complex systems. They expect apps to work intuitively from the first tap. World 11 focuses on simplifying decision-making by presenting only what matters most, exactly when it’s needed.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 mt-12 sm:mt-14 max-w-2xl">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUp(index * 0.01)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <FeatureCard {...feature} />
                                </motion.div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
