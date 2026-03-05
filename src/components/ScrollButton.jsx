import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ProgressWrapper = styled.div`
    position: fixed;
    bottom: 20px;
    right: 10px;
    height: 50px;
    width: 50px;
    display: none;
    place-items: center;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    z-index: 1000;
`;

const ProgressValue = styled.div`
    display: block;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-size: 22px;
    color: white;
    background-color: #fff;
`;

const ScrollButton = () => {
    useEffect(() => {
        const scrollProgress = document.getElementById('progress');

        const tl = gsap.timeline({ paused: true });

        tl.to(scrollProgress, {
            display: 'grid',
            autoAlpha: 1,
            duration: 3,
            ease: 'power1.out',
        });

        ScrollTrigger.create({
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            onUpdate: (self) => {
                const scrollValue = Math.round(self.progress * 100);

                if (scrollValue > 0.75) {
                    tl.play();
                } else {
                    tl.reverse();
                }

                gsap.to(scrollProgress, {
                    background: `conic-gradient( #55f48e ${scrollValue}%, #fff ${scrollValue}%)`,
                    duration: 0.3,
                });
            }
        });

        const handleScrollTop = () => {
            gsap.to(window, {
                scrollTo: { y: 0 },
                duration: 2,      
                ease: 'power2.out'
            });
        };

        scrollProgress.addEventListener('click', handleScrollTop);

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            scrollProgress.removeEventListener('click', handleScrollTop);
        };
    }, []);

    return (
        <ProgressWrapper id="progress">
            <ProgressValue className=" relative group">
                <i className="fa-solid fa-angle-up text-black lg:hidden block"></i>
                {/* <i className="fa-solid fa-minus text-black absolute transition-opacity duration-300 group-hover:opacity-0 lg:block hidden"></i> */}
                <i className="fa-solid fa-angle-up text-black absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100 lg:block hidden"></i>
            </ProgressValue>
        </ProgressWrapper>
    );
};

export default ScrollButton;