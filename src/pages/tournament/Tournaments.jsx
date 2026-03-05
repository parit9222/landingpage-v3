import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { IMAGES } from "../../components/constant/image";

export default function HowItsWork() {
  const checking = [
    {
      icon: IMAGES.TOURNAMENT,
      activeIcon: IMAGES.TOURNAMENTACTIVE,
      first: IMAGES.TOURNAMENTFIRST,
      second: IMAGES.TOURNAMENTSECOND,
      last: IMAGES.TOURNAMENTLAST,
      title: "Live Tournaments",
      description:
        "Real-time contests running alongside live matches, keeping the competition intense from start to finish.",
    },
    {
      icon: IMAGES.LEADERBOARD,
      activeIcon: IMAGES.LEADERBOARDACTIVE,
      first: IMAGES.LEADERBOARDFIRST,
      second: IMAGES.LEADERBOARDSECOND,
      last: IMAGES.LEADERBOARDLAST,
      title: "Smart Leaderboards",
      description:
        "Instant leaderboard updates based on live player performance and match stats.",
    },
    {
      icon: IMAGES.TIME,
      activeIcon: IMAGES.TIMEACTIVE,
      first: IMAGES.TIMEFIRST,
      second: IMAGES.TIMESECOND,
      last: IMAGES.TIMELAST,
      title: "Upcoming Matches",
      description:
        "Plan ahead with a complete view of upcoming tournaments across cricket, football, and more.",
    },
    {
      icon: IMAGES.REWARDS,
      activeIcon: IMAGES.REWARDSACTIVE,
      first: IMAGES.REWARDSFIRST,
      second: IMAGES.REWARDSSECOND,
      last: IMAGES.REWARDSLAST,
      title: "Big Prize Pools",
      description:
        "Win cash rewards, World 11 Tokens, and exclusive bonuses in every tournament.",
    },
  ];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const [progressStarted, setProgressStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Delay so browser renders 0% first
          setTimeout(() => {
            setProgressStarted(true);
          }, 50);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === checking.length - 1) {
          setIsResetting(true);

          setTimeout(() => {
            setIsResetting(false);
            setActiveIndex(0);
          }, 300); // small delay for smooth reset

          return prev; // temporarily stop here
        }

        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [checking.length, isVisible]);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setPrevIndex(activeIndex);
    }, 900);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

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

  return (
    <div id="tournaments" className="relative bg-black">

      <section
        ref={sectionRef}
        className="relative py-6 sm:py-10 bg-contain bg-no-repeat md:bg-cover md:bg-center overflow-hidden bg-white rounded-t-[40px] sm:rounded-t-[60px]"
        style={{
          backgroundImage: `url(${IMAGES.TOURNAMENTS})`,
        }}
      >
        {/* 
      OLD Background Absolute Layer
      <div
        className="absolute inset-0 bg-contain bg-no-repeat md:bg-cover md:bg-center"
        style={{
          backgroundImage: `url(${IMAGES.TOURNAMENTS})`,
        }}
      />
      */}

        <div className="max-w-6xl mx-auto w-full px-6 py-10 sm:py-20 pt-10 sm:pt-20">

          {/* HEADER STRUCTURE MATCHING PROBO */}
          <div className="flex flex-col md:flex-row gap-10">

            {/* LEFT LABEL */}
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:w-1/4"
            >
              <p className="text-gray-500 text-[20px]">Tournaments</p>
            </motion.div>

            {/* RIGHT CONTENT */}
            <div className="md:w-3/4 relative">

              <motion.img
                variants={fadeUp(0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                src={IMAGES.ZEROSIX}
                alt="06"
                className="absolute -top-6 sm:-top-15 md:-top-8 lg:-top-15 left-0 sm:-left-8 w-14 sm:w-20 lg:w-32  pointer-events-none select-none"
              />

              <motion.h2
                variants={fadeUp(0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight max-w-3xl"
              >
                Compete in Live Fantasy Tournaments
              </motion.h2>

              <motion.p
                variants={fadeUp(0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-6 text-base md:text-lg max-w-2xl leading-tight text-gray-500"
              >
                <span className="text-black">
                  Join high-intensity fantasy tournaments across multiple sports.
                </span>{" "}
                Track your progress live, climb the leaderboard, and win exciting
                rewards all in real time.
              </motion.p>

              {/* ================= CONTENT START ================= */}
              <div className="mt-8 sm:mt-20">

                <div className="flex flex-col lg:flex-row gap-7 items-stretch">

                  {/* MOBILE VIEW (UNCHANGED) */}
                  <div className="lg:hidden w-full overflow-hidden">
                    <div className="flex gap-2 mb-4">
                      {checking.map((_, index) => (
                        <div
                          key={index}
                          className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden"
                        >
                          <div
                            className={`h-full bg-black ${!isResetting ? 'transition-all duration-3000 ease-linear' : ''}`}
                            style={{
                              width: isResetting
                                ? "0%"
                                : index < activeIndex
                                  ? "100%"
                                  : index === activeIndex
                                    ? progressStarted
                                      ? "100%"
                                      : "0%"
                                    : "0%",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <div
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{
                        transform: `translateX(-${activeIndex * 100}%)`,
                      }}
                    >
                      {checking.map((item, index) => {
                        return (
                          <div key={index} className="w-full shrink-0 px-2">
                            <div className="bg-white rounded-2xl p-4 border border-gray-100">
                              <div className="flex gap-3">
                                <img
                                  src={item.first}
                                  className="w-1/2 h-40 rounded-2xl object-cover"
                                  alt=""
                                />
                                <img
                                  src={item.second}
                                  className="w-1/2 h-40 rounded-2xl object-cover"
                                  alt=""
                                />
                              </div>

                              <img
                                src={item.last}
                                className="w-full h-52 rounded-2xl mt-3 object-cover"
                                alt=""
                              />

                              <div className="mt-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                                  <img
                                    src={item.activeIcon}
                                    alt=""
                                    className="w-6 h-6"
                                  />
                                </div>

                                <div>
                                  <h3 className="font-semibold text-base">
                                    {item.title}
                                  </h3>
                                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* DESKTOP LIST */}
                  <div className="hidden lg:flex lg:w-1/2 flex-col justify-between h-full space-y-14">
                    {checking.map((check, index) => {
                      const isLast = index === checking.length;

                      return (
                        <div key={index} className="relative pl-20">

                          {!isLast && (
                            <div className="absolute -left-10 -top-2 w-0.5 h-28 bg-gray-200 overflow-hidden">
                              <div
                                className={`w-full bg-black ${!isResetting ? 'transition-all duration-3000 ease-linear' : ''}`}
                                style={{
                                  height: isResetting
                                    ? "0%"
                                    : index < activeIndex
                                      ? "100%"
                                      : index === activeIndex
                                        ? progressStarted
                                          ? "100%"
                                          : "0%"
                                        : "0%",
                                }}
                              />
                            </div>
                          )}

                          {/* Icon */}
                          <div className="absolute left-0 top-1 w-10 h-10 rounded-lg flex items-center justify-center shadow-md">
                            <img
                              src={
                                index === activeIndex
                                  ? check.activeIcon
                                  : check.icon
                              }
                              alt=""
                            />
                          </div>

                          <h3 className="text-xl font-semibold">
                            {check.title}
                          </h3>

                          <p className="text-gray-500 text-base mt-3 leading-relaxed">
                            {check.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>


                  {/* DESKTOP IMAGE (UNCHANGED) */}
                  <div className="hidden lg:flex lg:w-[48%] relative h-132 overflow-hidden">
                    <div className="absolute inset-0 flex flex-col justify-between z-0">
                      <div className="flex gap-6">
                        <img
                          src={checking[prevIndex].first}
                          className="w-44"
                          alt=""
                        />
                        <img
                          src={checking[prevIndex].second}
                          className="w-44"
                          alt=""
                        />
                      </div>
                      <img
                        src={checking[prevIndex].last}
                        className="w-96 mt-3"
                        alt=""
                      />
                    </div>

                    <motion.div
                      key={activeIndex}
                      initial={false}
                      className="absolute inset-0 flex flex-col justify-between z-10"
                    >
                      <div className="flex gap-6">
                        <motion.img
                          src={checking[activeIndex].first}
                          initial={{ x: -300 }}
                          animate={{ x: 0 }}
                          transition={{ duration: 0.9 }}
                          className="w-44"
                          alt=""
                        />
                        <motion.img
                          src={checking[activeIndex].second}
                          initial={{ x: 300 }}
                          animate={{ x: 0 }}
                          transition={{ duration: 0.9 }}
                          className="w-44"
                          alt=""
                        />
                      </div>

                      <motion.img
                        src={checking[activeIndex].last}
                        initial={{ y: 300 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="w-96 mt-3"
                        alt=""
                      />
                    </motion.div>
                  </div>

                </div>
              </div>
              {/* ================= CONTENT END ================= */}

            </div>
          </div>
        </div>
      </section>
    </div >
  );
}
