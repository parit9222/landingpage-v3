import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "../../App.css";
import { IMAGES } from "../../components/constant/image";



export default function HowItsWork() {
    const [activeStep, setActiveStep] = useState(0);
    const [isResetting, setIsResetting] = useState(false);
    const stepsSectionRef = useRef(null);
    const swiperRef = useRef(null);
    const [isMobileSwiperVisible, setIsMobileSwiperVisible] = useState(false);
    const [isStepsVisible, setIsStepsVisible] = useState(false);
    const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
    const [mobileResetting, setMobileResetting] = useState(false);
    const [progressStarted, setProgressStarted] = useState(false);
    const [desktopProgressStarted, setDesktopProgressStarted] = useState(false);


    // const steps = [
    //     {
    //         icon: "fa-solid fa-user-plus",
    //         title: "Sign Up & Get Started",
    //         description: "Create your World 11 account using your email or social login. Once inside, you get instant access to live matches, fantasy contests, and prediction markets.",
    //         image: "/assets/images/signup.png",
    //     },
    //     {
    //         icon: "fa-solid fa-trophy",
    //         title: "Choose Your Sport",
    //         description: "Select your preferred sport and explore ongoing contests. Join matches, fantasy leagues, and prediction challenges easily.",
    //         image: "/assets/images/contestDetails.png",
    //     },
    //     {
    //         icon: "fa-solid fa-users",
    //         title: "Build Your Fantasy Team",
    //         description: "Draft real-world players and create your fantasy team. Player performance in live matches directly impacts your fantasy score.",
    //         image: "/assets/images/previewTeam.png",
    //     },
    //     {
    //         icon: "fa-solid fa-circle-check",
    //         title: "Make Predictions (Probo)",
    //         description: "Answer simple Yes/No prediction questions on match outcomes, player performance, or key moments—quick decisions with real-time excitement.",
    //         image: "/assets/images/todayPrediction.png",
    //     },
    //     {
    //         icon: "fa-solid fa-chart-line",
    //         title: "Track Live Performance",
    //         description: "Follow live scores, fantasy points, and prediction status in real time. All updates are instant and easy to understand.",
    //         image: "/assets/images/megaContests02.png",
    //     },
    //     {
    //         icon: "fa-solid fa-gift",
    //         title: "Earn Rewards",
    //         description: "Win tokens and rewards based on your fantasy performance and accurate predictions.",
    //         image: "/assets/images/inviteEarn.png",
    //     },
    // ];

    const steps = [
        {
            icon: IMAGES.GETSTART,
            title: "Sign Up & Get Started",
            description:
                "Create your World 11 account using your email or social login. Once inside, you get instant access to live matches, fantasy contests, and prediction markets.",
            image: "/assets/images/signup.png",
            activeIcon: IMAGES.GETSTARTACTIVE,
        },
        {
            icon: IMAGES.CHOOSESPORT,
            title: "Choose Your Sport",
            description:
                "Select your preferred sport and explore ongoing contests. Join matches, fantasy leagues, and prediction challenges easily.",
            image: "/assets/images/contestDetails.png",
            activeIcon: IMAGES.CHOOSESPORTACTIVE,
        },
        {
            icon: IMAGES.BUILDTEAM,
            title: "Build Your Fantasy Team",
            description:
                "Draft real-world players and create your fantasy team. Player performance in live matches directly impacts your fantasy score.",
            image: "/assets/images/previewTeam.png",
            activeIcon: IMAGES.BUILDTEAMACTIVE,
        },
        {
            icon: IMAGES.PROBO,
            title: "Make Predictions (Probo)",
            description:
                "Answer simple Yes/No prediction questions on match outcomes, player performance, or key moments—quick decisions with real-time excitement.",
            image: "/assets/images/todayPrediction.png",
            activeIcon: IMAGES.PROBOACTIVE,
        },
        {
            icon: IMAGES.TRACK,
            title: "Track Live Performance",
            description:
                "Follow live scores, fantasy points, and prediction status in real time. All updates are instant and easy to understand.",
            image: "/assets/images/megaContests02.png",
            activeIcon: IMAGES.TRACKACTIVE,
        },
        {
            icon: IMAGES.REWARDS,
            title: "Earn Rewards",
            description:
                "Win tokens and rewards based on your fantasy performance and accurate predictions.",
            image: "/assets/images/inviteEarn.png",
            activeIcon: IMAGES.REWARDSACTIVE,
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsStepsVisible(true);

                    // Reset states to "empty" first to ensure animation triggers
                    setProgressStarted(false);
                    setDesktopProgressStarted(false);

                    // Trigger mobile progress after a short delay
                    setTimeout(() => {
                        setProgressStarted(true);
                    }, 100); // 100ms is enough for the DOM to register 0% width

                    // Trigger desktop progress
                    setTimeout(() => {
                        setDesktopProgressStarted(true);
                    }, 100);
                } else {
                    // Optional: Reset when leaving the section so it re-animates next time
                    setProgressStarted(false);
                    setDesktopProgressStarted(false);
                }
            },
            { threshold: 0.4 }
        );

        if (stepsSectionRef.current) {
            observer.observe(stepsSectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const mobileObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsMobileSwiperVisible(true);

                    // Start autoplay when visible
                    if (swiperRef.current?.autoplay) {
                        swiperRef.current.autoplay.start();
                    }
                } else {
                    setIsMobileSwiperVisible(false);

                    // Stop autoplay when leaving section
                    if (swiperRef.current?.autoplay) {
                        swiperRef.current.autoplay.stop();
                    }
                }
            },
            { threshold: 0.4 }
        );

        if (stepsSectionRef.current) {
            mobileObserver.observe(stepsSectionRef.current);
        }

        return () => mobileObserver.disconnect();
    }, []);

    useEffect(() => {
        if (!isStepsVisible) return;   // 🚀 START ONLY WHEN VISIBLE

        const interval = setInterval(() => {

            setActiveStep((prev) => {
                if (prev === steps.length - 1) {
                    setIsResetting(true);

                    setTimeout(() => {
                        setIsResetting(false);
                        setActiveStep(0);
                    }, 300);

                    return prev; // temporarily stop
                }

                return prev + 1;
            });

        }, 3000);

        return () => clearInterval(interval);

    }, [isStepsVisible]);

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
        <div id="how" className="relative bg-black">
            <div
                className="relative bg-white text-black overflow-hidden rounded-t-[40px] sm:rounded-t-[60px]"
            >
                <div className="max-w-6xl mx-auto 
                  px-4 sm:px-6 lg:px-8 
                  py-16 sm:py-20 lg:py-32">

                    <div className="flex flex-col md:flex-row gap-8 md:gap-12">

                        <motion.div
                            variants={fadeUp(0)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="md:w-1/4 text-left md:text-center">
                            <p className="text-gray-500 text-sm sm:text-base">
                                How it works
                            </p>
                        </motion.div>

                        <div className="md:w-3/4 relative">

                            <motion.img
                                variants={fadeUp(0)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                src="/assets/images/02.png"
                                alt="02"
                                className="absolute 
                     -top-8 sm:-top-12 lg:-top-16 
                     left-0 sm:-left-6 
                     w-14 sm:w-20 lg:w-28  
                     pointer-events-none"
                            />

                            <motion.h2
                                variants={fadeUp(0)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="relative z-10 
                       text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                       font-semibold 
                       leading-snug 
                       max-w-3xl"
                            >
                                From Match Selection to <br />
                                Rewards
                            </motion.h2>

                            {/* Description */}
                            <motion.p
                                variants={fadeUp(0)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-gray-500 font-medium mt-6 
                       text-base sm:text-lg 
                       max-w-2xl leading-relaxed">
                                <span className="text-black">
                                    World 11 guides users
                                </span>{" "}
                                step by step from choosing a match to earning tokens —
                                making fantasy sports engaging and effortless.
                            </motion.p>

                        </div>
                    </div>

                    <div className="relative mt-12 sm:mt-16 lg:mt-14">

                        <motion.img
                            variants={fadeUp(0)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            src="/assets/images/steps.png"
                            alt="Steps"
                            className="relative sm:top-0 left-0 sm:left-80 w-42 md:w-58 lg:w-68 select-none pointer-events-none pt-0 md:pt-8 lg:pt-18"
                        />


                        <div ref={stepsSectionRef} className="relative mt-12">

                            <div className="hidden lg:flex flex-col md:flex-row gap-10">
                                {/* Empty Left Side */}
                                <div className="md:w-[20%]"></div>

                                {/* Right Content */}
                                <div className="md:w-[80%]">

                                    <div className="flex flex-col lg:flex-row gap-16 mt-10">

                                        {/* Steps */}
                                        <div className="lg:w-1/2 relative">

                                            <div className="space-y-12">
                                                {steps.map((step, index) => {

                                                    const isActive = index === activeStep;
                                                    const isCompleted = index < activeStep;
                                                    const isLast = index === steps.length;

                                                    return (
                                                        <div
                                                            key={index}
                                                            className="relative pl-16 cursor-pointer group"
                                                            onClick={() => setActiveStep(index)}
                                                        >

                                                            {!isLast && (
                                                                <div className="absolute -left-6 -top-2 w-0.5 h-28 bg-gray-200 overflow-hidden">
                                                                    <div
                                                                        className={`w-full bg-[#171717] ${!isResetting ? 'transition-all duration-3000 ease-linear' : ''}`}
                                                                        style={{
                                                                            height: isResetting
                                                                                ? "0%"
                                                                                : index < activeStep
                                                                                    ? "100%"
                                                                                    : index === activeStep
                                                                                        ? desktopProgressStarted
                                                                                            ? "100%"
                                                                                            : "0%"
                                                                                        : "0%",
                                                                        }}

                                                                    />
                                                                </div>
                                                            )}


                                                            {/* Icon */}
                                                            <div className="absolute rounded-lg left-0 top-1 w-10 h-10 flex items-center justify-center shadow-md">
                                                                <img
                                                                    // src={
                                                                    //     isActive
                                                                    //         ? `${step.activeIcon}`
                                                                    //         : isCompleted
                                                                    //             ? `${step.activeIcon}`
                                                                    //             : `${step.icon}`
                                                                    // }
                                                                    src={isActive ? step.activeIcon : step.icon}
                                                                    alt=""
                                                                />
                                                            </div>

                                                            {/* Content */}
                                                            <h3
                                                                className={`text-lg font-semibold transition-colors duration-300 text-neutral-900`}
                                                            >
                                                                {step.title}
                                                            </h3>

                                                            <p
                                                                className={`text-sm mt-2 leading-relaxed transition-all duration-300 text-neutral-500`}
                                                            >
                                                                {step.description}
                                                            </p>
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                        </div>


                                        <div className="lg:w-1/2 flex justify-center relative">
                                            <div className="relative w-100 h-full overflow-hidden">

                                                {steps.map((step, index) => {

                                                    const isActive = index === activeStep;

                                                    return (
                                                        <img
                                                            key={index}
                                                            src={step.image}
                                                            alt={step.title}
                                                            className={`absolute left-0 w-full h-full object-contain transition-all duration-700 ease-in-out
                                                            ${isActive
                                                                    ? "opacity-100 translate-y-0 z-30"
                                                                    : index < activeStep
                                                                        ? "opacity-0 -translate-y-16 z-20"
                                                                        : "opacity-0 translate-y-20 z-10"
                                                                }`}
                                                        />
                                                    );
                                                })}
                                            </div>

                                            <div className="absolute -bottom-6 w-64 h-10 bg-black/10 blur-xl rounded-full"></div>
                                        </div>



                                    </div>
                                </div>

                            </div>

                            {/* ================= MOBILE + TABLET SLIDER ================= */}
                            <div className="lg:hidden mt-1">
                                <div className="flex gap-2 mb-6 max-w-75 mx-auto">
                                    {steps.map((_, index) => (
                                        <div
                                            key={index}
                                            className="flex-1 h-1 bg-gray-200 overflow-hidden rounded-full"
                                        >
                                            <div
                                                className={`h-full bg-black ${!mobileResetting && index === mobileActiveIndex && progressStarted
                                                    ? "transition-all duration-3000 ease-linear"
                                                    : "transition-none"
                                                    }`}
                                                style={{
                                                    width: mobileResetting
                                                        ? "0%"
                                                        : index < mobileActiveIndex
                                                            ? "100%"
                                                            : (index === mobileActiveIndex && progressStarted)
                                                                ? "100%"
                                                                : "0%",
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <Swiper
                                    modules={[Autoplay]}
                                    autoplay={false} 
                                    loop={true}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    onSwiper={(swiper) => {
                                        swiperRef.current = swiper; // store instance
                                    }}
                                    onSlideChange={(swiper) => {
                                        const realIndex = swiper.realIndex;
                                        const isMovingBackward = realIndex < mobileActiveIndex;
                                        const isLoopForward = realIndex === 0 && mobileActiveIndex === steps.length - 1;

                                        if (isLoopForward) {
                                            setMobileResetting(true);
                                            setTimeout(() => {
                                                setMobileActiveIndex(0);
                                                setMobileResetting(false);
                                            }, 10);
                                        } else if (isMovingBackward) {
                                            setMobileResetting(true);
                                            setMobileActiveIndex(realIndex);
                                            setTimeout(() => {
                                                setMobileResetting(false);
                                            }, 50);
                                        } else {
                                            setMobileActiveIndex(realIndex);
                                        }
                                    }}
                                    className="custom-swiper"
                                >

                                    {steps.map((step, index) => (
                                        <SwiperSlide key={index}>

                                            <div className="bg-white p-6 pb-10 border border-gray-200 rounded-3xl text-center">

                                                {/* Image */}
                                                <div className="flex justify-center mb-6">
                                                    <img
                                                        src={step.image}
                                                        alt={step.title}
                                                        className="w-60 drop-shadow-2xl"
                                                    />
                                                </div>

                                                {/* Icon + Content Row */}
                                                <div className="flex items-center gap-4 text-left">

                                                    {/* Icon */}
                                                    <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center shadow-md shrink-0">
                                                        {/* <i className={`${step.icon}`}></i> */}
                                                        <img src={step.activeIcon} alt="" />
                                                    </div>

                                                    {/* Text Content */}
                                                    <div>
                                                        <h3 className="text-lg font-semibold">
                                                            {step.title}
                                                        </h3>

                                                        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                                                            {step.description}
                                                        </p>
                                                    </div>

                                                </div>

                                            </div>

                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                            </div>

                        </div>


                    </div>
                </div>

                <div className="mt-1 sm:mt-10 mb-20 sm:mb-28 lg:mb-40 px-4 sm:px-6">
                    <div className="relative max-w-6xl mx-auto overflow-hidden rounded-[30px] sm:rounded-[40px]">

                        <img
                            src="/assets/images/players.png"
                            alt="Players Background"
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        />

                        <img
                            src="/assets/images/maskGroup.png"
                            alt="Mask Group"
                            className="absolute bottom-108 md:bottom-0 right-0 md:right-0 
                   w-40 sm:w-56 lg:w-72 
                   z-10 pointer-events-none"
                        />

                        <div className="relative z-20  flex flex-col lg:flex-row items-center 
                    px-6 sm:px-10 lg:px-16 
                     pb-20 md:pb-20 py-8 sm:py-10 lg:py-10 gap-10">

                            <div
                                className="
                                flex flex-row lg:flex-col 
                                items-center gap-4
                                absolute 
                                bottom-1 left-1/2 -translate-x-1/2
                                lg:bottom-auto lg:left-8 xl:left-16 lg:translate-x-0
                            "
                            >
                                <div className="flex flex-col items-center gap-0 px-3 py-2">

                                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-black text-white rounded-lg flex items-center justify-center">
                                        <i className="fa-solid fa-baseball-bat-ball text-sm sm:text-base"></i>
                                    </div>

                                    <p className="text-xs sm:text-sm text-gray-800 font-medium">
                                        Cricket
                                    </p>

                                </div>


                                {/* Football Icon */}
                                {/* <div className="w-9 h-9 sm:w-10 sm:h-10 text-black flex items-center justify-center">
                                
                            </div> */}

                                <div className="flex flex-col items-center gap-1 px-3 py-2">

                                    <div className="w-9 h-9 sm:w-10 sm:h-10 text-black flex items-center justify-center">
                                        <i className="fa-solid fa-futbol text-lg sm:text-xl"></i>
                                    </div>

                                    <p className="text-xs sm:text-sm text-gray-800 font-medium">

                                    </p>

                                </div>
                            </div>


                            {/* TEXT SECTION (Top on mobile, Right on desktop) */}
                            <div className="flex-1 max-w-xl text-left order-1 lg:order-2">
                                <motion.div
                                    variants={fadeUp(0.01)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
                                        World 11 simplifies fantasy sports{" "}
                                        <span className="text-gray-600 font-normal">
                                            and live predictions with a fast, intuitive, and engaging experience.
                                        </span>
                                    </h2>
                                </motion.div>

                                <div className="mt-3 md:mt-6 space-y-2">
                                    <motion.div
                                        variants={fadeUp(0.01)}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex items-center justify-start gap-4">
                                            <p className="text-gray-800 font-medium text-base sm:text-lg text-left">
                                                Smart predictions
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        variants={fadeUp(0.01)}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex items-center justify-start gap-4">
                                            <p className="text-gray-800 font-medium text-base sm:text-lg text-left">
                                                High speed performance
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        variants={fadeUp(0.01)}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex items-center justify-start gap-4">
                                            <p className="text-gray-800 font-medium text-base sm:text-lg text-left">
                                                Real time engagement
                                            </p>
                                        </div>
                                    </motion.div>

                                </div>

                            </div>

                            {/* MOBILE IMAGE (Center on mobile) */}
                            <div className="flex-1 flex justify-center order-2 lg:order-1">
                                <motion.img
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    src="/assets/images/upcomingMatch.png"
                                    alt="Upcoming Match"
                                    className="w-56 sm:w-64 lg:w-80 drop-shadow-2xl"
                                />
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}