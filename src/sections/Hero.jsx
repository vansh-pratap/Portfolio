import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

// Static variables declared outside to prevent unnecessary re-renders
const fullName = "Vansh Singh";
const titles = ["Software Engineer", "Backend Engineer"];

const Hero = () => {
    // State for Name
    const [nameText, setNameText] = useState("");
    const [isNameDone, setIsNameDone] = useState(false);

    // State for Looping Title
    const [titleText, setTitleText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    // 1. Effect to type the Name exactly once
    useEffect(() => {
        let nameIndex = 0;
        const nameInterval = setInterval(() => {
            if (nameIndex <= fullName.length) {
                setNameText(fullName.substring(0, nameIndex));
                nameIndex++;
            } else {
                clearInterval(nameInterval);
                setIsNameDone(true); // Triggers the title loop
            }
        }, 120);

        return () => clearInterval(nameInterval);
    }, []);

    // 2. Effect to loop through the Titles infinitely
    useEffect(() => {
        if (!isNameDone) return;

        const handleType = () => {
            const currentTitleIndex = loopNum % titles.length;
            const fullText = titles[currentTitleIndex];

            // Update text based on whether we are typing or deleting
            setTitleText(
                isDeleting
                    ? fullText.substring(0, titleText.length - 1)
                    : fullText.substring(0, titleText.length + 1)
            );

            // Dynamic typing speeds: Deleting is faster than typing
            let nextSpeed = isDeleting ? 40 : 100;

            if (!isDeleting && titleText === fullText) {
                // Word is fully typed out -> Pause for 2 seconds, then start deleting
                nextSpeed = 1000;
                setIsDeleting(true);
            } else if (isDeleting && titleText === "") {
                // Word is fully deleted -> Switch to the next word, pause briefly, then type
                setIsDeleting(false);
                setLoopNum((prev) => prev + 1);
                nextSpeed = 500;
            }

            setTypingSpeed(nextSpeed);
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [titleText, isDeleting, isNameDone, loopNum, typingSpeed]);

    return (
        <section id="home" className="hero-split-section">
            <div className="hero-text-content">
                <h1 className="hero-title">
                    Hi, I'm <br />
                    <span className="text-gradient">{nameText}</span>
                    {!isNameDone && <span className="typing-cursor"></span>}
                </h1>

                <h2 className="hero-subtitle">
                    {titleText}
                    {isNameDone && <span className="typing-cursor persistent"></span>}
                </h2>


                <div className="hero-action-group">
                    <a href="https://drive.google.com/file/d/1qY-kEFpYXOF6jeJ23BmYqM5YuiUnl8YV/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-solid-primary">
                        View Resume
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                    </a>

                    <div className="hero-socials">
                        <a href="https://github.com/vansh-pratap" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.45-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/vansh-pratap-singh-a59a90250/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065c0-1.138.92-2.063 2.063-2.063c1.14 0 2.064.925 2.064 2.063c0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="hero-image-content">
                <div className="floating-image-wrapper spline-wrapper">
                    <div className="hero-glow-backdrop"></div>
                    <Spline
                        scene="https://prod.spline.design/BVDQTtO3ztfBMTze/scene.splinecode"
                        className="live-avatar-canvas"
                    />

                </div>
            </div>
        </section>


    );
};

export default Hero;