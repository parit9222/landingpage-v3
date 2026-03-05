import React from "react";
import { motion } from "framer-motion";

export default function Sports() {
    const features = [
        "Live match updates & stats",
        "Global leagues & tournaments",
        "Fantasy team performance tracking",
        "Fantasy team performance tracking",
    ];
    const cricketFeatures = [
        "Live scores & ball-by-ball updates",
        "Global cricket leagues & tournaments",
        "Real-time fantasy team tracking",
        "Player form & performance insights",
    ];

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

    const slideLeftToRight = (delay = 0) => ({
        hidden: { opacity: 0, x: -80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                delay,
                ease: "easeOut",
            },
        },
    });

    const slideRightToLeft = (delay = 0) => ({
        hidden: { opacity: 0, x: 80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                delay,
                ease: "easeOut",
            },
        },
    });


    return (
        <div id="sports" className="relative bg-black">
            <div
                className="relative bg-white rounded-t-[30px] md:rounded-t-[60px] overflow-hidden"
            >
                <img
                    src="/assets/images/bg04.png"
                    alt="04 background"
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-380 pt-6 md:pt-18 pointer-events-none select-none"
                />

                <div className="max-w-6xl mx-auto px-6 md:py-28 md:pt-32 relative z-10">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-10">

                        <div className="md:w-1/4 text-left lg:text-center">
                            <p className="text-gray-500 text-[16px]">Sports</p>
                        </div>

                        <div className="md:w-3/4 relative">

                            <motion.img
                                variants={fadeUp(0)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                src="/assets/images/04.png"
                                alt="04"
                                className="absolute 
                            -top-4 sm:-top-12 lg:-top-16 
                            left-0 lg:-left-12 
                            w-14 sm:w-20 lg:w-32 
                            pointer-events-none"
                            />

                            <div className="relative z-10">

                                <motion.h2
                                    variants={fadeUp(0)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="text-5xl font-semibold leading-snug max-w-3xl"
                                >
                                    Sports Events.
                                </motion.h2>

                                <motion.p
                                    variants={fadeUp(0)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="text-gray-500 mt-6 text-lg max-w-md leading-relaxed"
                                >
                                    You’ll fall in love with the way sports unfold on{" "}
                                    <span className="font-medium text-black">
                                        World 11. From pre-match analysis
                                    </span>{" "}
                                    to live action and final results,
                                    everything you need to play fantasy sports smarter is right here
                                    clean, fast, and built for competition.
                                </motion.p>

                            </div>


                            <div className="relative mt-20 sm:mt-38 grid grid-cols-2 items-start gap-6 md:-left-12">
                                <motion.div
                                    variants={slideLeftToRight(0)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
                                        Football <br /> matches.
                                    </h3>
                                </motion.div>


                                <motion.div
                                    variants={slideRightToLeft(0)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <p className="text-sm font-semibold tracking-wide text-gray-900 mb-4">
                                        BE A PART OF THE EVENT
                                    </p>

                                    <p className="text-gray-500 leading-relaxed">
                                        You’ll fall in love with the way sports unfold on World 11.
                                        From pre-match analysis to live action and final results,
                                        everything you need to play fantasy sports smarter is right
                                        here clean, fast, and built for competition.
                                    </p>
                                </motion.div>

                            </div>

                            <div className="relative mt-10 grid grid-cols-2 gap-4 max-w-4xl md:-left-12">
                                {features.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeUp(index * 0.01)}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        <div
                                            key={index}
                                            className="flex items-center gap-2 bg-[#f3f1ea] border border-[#e5e2d8] px-2 sm:px-3 py-2 rounded-xl text-gray-800 hover:shadow-md transition duration-300"
                                        >
                                            <span className="w-5 h-5 flex items-center justify-center text-sm">
                                                ⚽
                                            </span>
                                            <span className="text-xs sm:text-base font-medium">
                                                {item}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>



                        </div>
                    </div>
                </div>

                <div className="relative w-full max-w-6xl mx-auto rounded-[50px] overflow-hidden mb-4 sm:mb-24 sm:mt-14 md:mt-2
                bg-white md:bg-transparent">

                    <img
                        src="/assets/images/sports.png"
                        alt="Sports Background"
                        className="hidden md:block absolute inset-0 w-full h-full object-cover"
                    />

                    <div
                        className="relative z-10 
                    flex md:grid md:grid-cols-3 
                    gap-0 md:gap-3 lg:gap-0 
                    overflow-x-auto md:overflow-visible 
                    snap-x snap-mandatory 
                    max-w-5xl mx-auto
                    px-6 md:px-10 py-10 md:py-32"
                    >

                        {/* Upcoming */}
                        <motion.div
                            variants={fadeUp(0)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="
                        shrink-0 md:shrink 
                        w-[85%] sm:w-[60%] md:w-auto
                        snap-center
                        bg-transparent
                        sm:shadow-none
                        p-0 md:p-0
                        flex flex-col items-center text-center
                        sm:-translate-y-20"
                        >
                            <img
                                src="/assets/images/allMatches.png"
                                alt="Upcoming"
                                className="w-56 md:w-62"
                            />

                            <p className="mt-6 text-gray-600 md:text-gray-300 max-w-50">
                                <span className="font-semibold text-black md:text-white">
                                    Upcoming
                                </span>{" "}
                                – All the information and full background overview presented in a simple way.
                            </p>
                        </motion.div>

                        {/* Live */}
                        <motion.div
                            variants={fadeUp(0)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="
                        shrink-0 md:shrink 
                        w-[85%] sm:w-[60%] md:w-auto
                        snap-center
                        bg-transparent
                        sm:shadow-none
                        p-0 md:p-0
                        flex flex-col items-center text-center
                        "
                        >
                            <img
                                src="/assets/images/megaContests02.png"
                                alt="Live"
                                className="w-56 md:w-62"
                            />

                            <p className="mt-6 text-gray-600 md:text-gray-300 max-w-50">
                                <span className="font-semibold text-black md:text-white">
                                    Live
                                </span>{" "}
                                – All the information and full background overview presented in a simple way.
                            </p>
                        </motion.div>

                        {/* Completed */}
                        <motion.div
                            variants={fadeUp(0)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="
                        shrink-0 md:shrink 
                        w-[85%] sm:w-[60%] md:w-auto
                        snap-center
                        bg-transparent
                        sm:shadow-none
                        p-0 md:p-0
                        flex flex-col items-center text-center
                        sm:translate-y-20"
                        >
                            <img
                                src="/assets/images/megaContests01.png"
                                alt="Completed"
                                className="w-56 md:w-62"
                            />

                            <p className="mt-6 text-gray-600 md:text-gray-300 max-w-50">
                                <span className="font-semibold text-black md:text-white">
                                    Completed
                                </span>{" "}
                                – All the information and full background overview presented in a simple way.
                            </p>
                        </motion.div>

                    </div>

                </div>


                <div className="max-w-6xl mx-auto px-6 pb-2">

                    <div className="grid md:grid-cols-2 gap-3 md:gap-10">

                        <motion.div
                            variants={fadeUp(0.01)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div
                                className="bg-[#f5f5f5] rounded-3xl p-10 text-center hover:shadow-lg transition duration-300"
                            >
                                <div className="flex justify-center mb-8">
                                    <img
                                        src="/assets/images/contestDetails.png"
                                        alt="Contest Details"
                                        className="w-56 md:w-64"
                                    />
                                </div>
                                <motion.div
                                    variants={fadeUp(0.01)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <p className="text-gray-500 leading-relaxed max-w-100 text-lg mx-auto">
                                        Choose from <span className="font-semibold">multiple football contests with real-time prize pools, flexible entry fees, and fair competition.</span> Enter matches, track prizes, and start winning instantly.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeUp(0.01)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div
                                className="bg-[#f5f5f5] rounded-3xl p-10 text-center hover:shadow-lg transition duration-300"
                            >
                                <div className="flex justify-center mb-8">
                                    <img
                                        src="/assets/images/peakGoalkeeper.png"
                                        alt="Pick Goalkeeper"
                                        className="w-56 md:w-64"
                                    />
                                </div>
                                <motion.div
                                    variants={fadeUp(0.01)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <p className="text-gray-500 leading-relaxed max-w-100 text-lg mx-auto">
                                        Create your <span className="font-semibold">football fantasy team by selecting top players </span> for every position. Balance credits, analyze stats, and build a squad that dominates the match.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeUp(0.01)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div
                                className="bg-[#f5f5f5] rounded-3xl p-10 text-center hover:shadow-lg transition duration-300"
                            >
                                <div className="flex justify-center mb-8">
                                    <img
                                        src="/assets/images/previewTeam.png"
                                        alt="Preview Team"
                                        className="w-56 md:w-64"
                                    />
                                </div>
                                <motion.div
                                    variants={fadeUp(0.01)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <p className="text-gray-500 leading-relaxed max-w-100 text-lg mx-auto">
                                        Set your team using real football formations. Pick forwards,<span className="font-semibold"> midfielders, defenders, and goalkeepers based on matchups</span> and performance insights.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeUp(0.01)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div
                                className="bg-[#f5f5f5] rounded-3xl p-10 text-center hover:shadow-lg transition duration-300"
                            >
                                <div className="flex justify-center mb-8">
                                    <img
                                        src="/assets/images/joinedWith.png"
                                        alt="Joined Teams"
                                        className="w-56 md:w-64"
                                    />
                                </div>
                                <motion.div
                                    variants={fadeUp(0.01)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <p className="text-gray-500 leading-relaxed max-w-100 text-lg mx-auto">
                                        Edit, switch, or clone teams before the match starts. <span className="font-semibold">Enter multiple teams into contests and maximize your chances</span> to top the leaderboard.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>

                <div className="max-w-6xl md:max-w-2xl lg:max-w-4xl mx-auto px-6 pb-0">

                    {/* Heading Section */}
                    <div className="relative mt-20 sm:mt-38 grid grid-cols-2 items-start gap-6 md:-left-6 lg:-left-12">

                        <motion.div
                            variants={slideLeftToRight(0)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
                                Cricket <br /> matches.
                            </h3>
                        </motion.div>

                        <motion.div
                            variants={slideRightToLeft(0)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <p className="text-sm font-semibold tracking-wide text-gray-900 mb-4">
                                BE A PART OF THE EVENT
                            </p>

                            <p className="text-gray-500 leading-relaxed">
                                You’ll fall in love with the way sports unfold on World 11.
                                From pre-match analysis to live action and final results,
                                everything you need to play fantasy sports smarter is right
                                here clean, fast, and built for competition.
                            </p>
                        </motion.div>

                    </div>

                    {/* Feature Cards */}
                    <div className="relative mt-10 grid grid-cols-2 gap-4 max-w-4xl md:-left-6 lg:-left-12">

                        {cricketFeatures.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp(index * 0.01)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <div
                                    key={index}
                                    className="flex items-center gap-2 bg-[#f3f1ea] border border-[#e5e2d8] px-2 sm:px-3 py-2 rounded-xl text-gray-800 hover:shadow-md transition duration-300"
                                >
                                    <span className="w-5 h-5 flex items-center justify-center text-sm">
                                        🏏
                                    </span>
                                    <span className="text-xs sm:text-base font-medium">
                                        {item}
                                    </span>
                                </div>
                            </motion.div>
                        ))}

                    </div>

                </div>



                <div className="relative w-full bg-white py-18 overflow-hidden">

                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                        <img
                            src="/assets/images/cricketers.png"
                            alt="Cricketers Background"
                            className="w-full max-w-full object-contain"
                        />
                    </div>

                    {/* <div className="relative z-10 max-w-6xl mx-auto px-6"> */}

                    <div
                        className="relative z-10 
                    flex md:grid md:grid-cols-3 
                    gap-0 md:gap-3 lg:gap-0 
                    overflow-x-auto md:overflow-visible 
                    snap-x snap-mandatory 
                    max-w-6xl mx-auto
                    px-6 md:px-10 py-10 md:py-32"
                    >

                        {/* Upcoming */}
                        <motion.div
                            variants={fadeUp(0)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="
                            shrink-0 md:shrink
                            w-[85%] sm:w-[60%] md:w-auto
                            snap-center
                            bg-transparent
                            p-6 md:p-0
                            flex flex-col items-center text-center
                            sm:-translate-y-20"
                        >
                            <img
                                src="/assets/images/upcomingMatch01.png"
                                alt="Upcoming"
                                className="w-56 md:w-72 drop-shadow-2xl"
                            />

                            <p className="mt-8 text-gray-600 md:text-gray-600 max-w-50">
                                <span className="font-semibold text-black">
                                    Upcoming
                                </span>{" "}
                                – All the information and full background overview presented in a simple way.
                            </p>
                        </motion.div>

                        {/* Live */}
                        <motion.div
                            variants={fadeUp(0)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="
                            shrink-0 md:shrink
                            w-[85%] sm:w-[60%] md:w-auto
                            snap-center
                            bg-transparent
                            p-6 md:p-0
                            flex flex-col items-center text-center
                            "
                        >
                            <img
                                src="/assets/images/contestDetails01.png"
                                alt="Live"
                                className="w-56 md:w-72 drop-shadow-2xl"
                            />

                            <p className="mt-8 text-gray-600 md:text-gray-600 max-w-50">
                                <span className="font-semibold text-black">
                                    Live
                                </span>{" "}
                                – All the information and full background overview presented in a simple way.
                            </p>
                        </motion.div>

                        {/* Completed */}
                        <motion.div
                            variants={fadeUp(0)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="
                            shrink-0 md:shrink
                            w-[85%] sm:w-[60%] md:w-auto
                            snap-center
                            bg-transparent
                            p-6 md:p-0
                            flex flex-col items-center text-center
                            sm:translate-y-20"
                        >
                            <img
                                src="/assets/images/yourTeams.png"
                                alt="Completed"
                                className="w-56 md:w-72 drop-shadow-2xl"
                            />

                            <p className="mt-8 text-gray-600 md:text-gray-600 max-w-50">
                                <span className="font-semibold text-black">
                                    Completed
                                </span>{" "}
                                – All the information and full background overview presented in a simple way.
                            </p>
                        </motion.div>


                    </div>
                    {/* </div> */}
                </div>


                <div className="max-w-6xl mx-auto px-6 pb-26">

                    <div className="grid md:grid-cols-2 gap-3 md:gap-10">
                        <motion.div
                            variants={fadeUp(0.01)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div
                                className="bg-[#f5f5f5] rounded-3xl p-10 text-center hover:shadow-lg transition duration-300"
                            >
                                <div className="flex justify-center mb-8">
                                    <img
                                        src="/assets/images/peakTeam.png"
                                        alt="Pick Team"
                                        className="w-56 md:w-64"
                                    />
                                </div>
                                <motion.div
                                    variants={fadeUp(0.01)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <p className="text-gray-500 leading-relaxed max-w-100 text-lg mx-auto">
                                        View and manage all your fantasy cricket teams in one place. <span className="font-semibold">Check team composition, player roles, and make quick</span> adjustments before the match begins.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeUp(0.01)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div
                                className="bg-[#f5f5f5] rounded-3xl p-10 text-center hover:shadow-lg transition duration-300"
                            >
                                <div className="flex justify-center mb-8">
                                    <img
                                        src="/assets/images/viewContest.png"
                                        alt="View Contest"
                                        className="w-56 md:w-64"
                                    />
                                </div>
                                <motion.div
                                    variants={fadeUp(0.01)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <p className="text-gray-500 leading-relaxed max-w-100 text-lg mx-auto">
                                        You haven’t joined any cricket contests for this match yet. <span className="font-semibold">Explore available contests and enter with your selected team</span> to start competing.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeUp(0.01)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div
                                className="bg-[#f5f5f5] rounded-3xl p-10 text-center hover:shadow-lg transition duration-300"
                            >
                                <div className="flex justify-center mb-8">
                                    <img
                                        src="/assets/images/myMatches.png"
                                        alt="My Matches"
                                        className="w-56 md:w-64"
                                    />
                                </div>
                                <motion.div
                                    variants={fadeUp(0.01)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <p className="text-gray-500 leading-relaxed max-w-100 text-lg mx-auto">
                                        Track all your <span className="font-semibold">upcoming, live, and completed cricket matches.</span> Stay updated with match schedules, live status, and tournament formats.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeUp(0.01)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div
                                className="bg-[#f5f5f5] rounded-3xl p-10 text-center hover:shadow-lg transition duration-300"
                            >
                                <div className="flex justify-center mb-8">
                                    <img
                                        src="/assets/images/joinedWith01.png"
                                        alt="Joined Contests"
                                        className="w-56 md:w-64"
                                    />
                                </div>
                                <motion.div
                                    variants={fadeUp(0.01)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <p className="text-gray-500 leading-relaxed max-w-100 text-lg mx-auto">
                                        <span className="font-semibold">See which fantasy teams you’ve joined in a contest.</span> Edit, switch, or create new teams before the match deadline to improve your winning chances.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
