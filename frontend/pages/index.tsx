import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./index.module.css";

const HomePage = () => {
    const router = useRouter();

    const handleOnClick = () => {
      router.push("/interview/contactForm")
    };

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Image
                    src="/Fling-Logo-Pink.svg"
                    alt="Fling Logo"
                    width={500}
                    height={500}
                    priority
                />
            </div>

            <div className={styles.contentWrapper}>
                <h1 className={styles.title}>
                    Welcome to{" "}
                    <span className={styles.highlight}>FLING.AI</span>
                </h1>
                <h2 className={styles.subtitle}>
                    Live Coding Interview (Frontend)
                </h2>

                <p className={styles.description}>
                    This is a simple web application for frontend interviews.
                </p>

                <button className={styles.button} onClick={handleOnClick}>
                    Get Started
                </button>
            </div>

            <div className={styles.footer}>
                <p>© 2025 FLING.AI</p>
            </div>
        </div>
    );
};

export default HomePage;
