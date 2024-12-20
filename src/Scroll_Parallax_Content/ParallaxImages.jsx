/* eslint-disable react/prop-types */
import { motion, useTransform } from "framer-motion";

export const ParallaxImages = ({ scrollYProgress, img, yImg, yDiv, yScale, index }) => {

    const startingValueImg = index === 0 ? "4vh" : index === 2 ? "-10vh" : "0vh";
    const startingValueDiv = index === 0 ? "10vh" : index === 2 ? "-10vh" : "0vh";
    const startingValueScale = index === 1 ? 1 : 1.5;
    const dynamicYvalueImg = useTransform(scrollYProgress, [0, 1], [startingValueImg, yImg]);
    const dynamicYvalueDiv = useTransform(scrollYProgress, [0, 1], [startingValueDiv, yDiv]);
    const dynamicYscale = useTransform(scrollYProgress, [0, 1], [startingValueScale, yScale]);

    return (
        <motion.div
            style={{
                y: dynamicYvalueDiv,
                willChange: "transform",
            }}
            className="parallaxImg"
        >
            <motion.img
                style={{
                    y: dynamicYvalueImg,
                    scale: dynamicYscale,
                    padding: "20px",
                    willChange: "transform",
                }}
                loading="lazy"
                src={img}
            />
        </motion.div>
    );

}
