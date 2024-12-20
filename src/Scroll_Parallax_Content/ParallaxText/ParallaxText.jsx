/* eslint-disable react-hooks/rules-of-hooks */
import { motion, useScroll, useTransform } from "framer-motion";
import "./ParallaxText.css";
import { useRef } from "react";

const ParallaxText = () => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["center center", "end start"]
    })
    const text = "scroll down";

    return (
        <div ref={ref} className="scrollParallaxText">
            {
                text.split("").map((letter, index) => {
                    const textParallax = useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -250) - 200]);
                    return (
                        <motion.span className="spanText" key={index} style={{ y: textParallax }}>
                            {letter}
                        </motion.span>
                    )
                })
            }
        </div>
    )
}

export default ParallaxText
