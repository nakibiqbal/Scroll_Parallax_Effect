import "./Content.css"
import { useScroll } from "framer-motion"
import { useRef } from 'react';
import ParallaxImages from "./ParallaxImages/ParallaxImages";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg";
import ParallaxText from "./ParallaxText/ParallaxText";

const Content = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const imgData = [
        {
            img: img1,
            yImg: "-7vh",
            yDiv: "-12vh",
            yScale: 1.5
        },
        {
            img: img3,
            yImg: "0vh",
            yDiv: "0vh",
            yScale: 2
        },
        {
            img: img2,
            yImg: "5vh",
            yDiv: "12vh",
            yScale: 1.5
        }
    ];

    return (
        <>
            <ParallaxText />

            <div ref={ref} className="scrollParallax">

                <div className="scrollParallaxImages">

                    {imgData.map((img, index) => (
                        <ParallaxImages
                            key={index}
                            scrollYProgress={scrollYProgress}
                            img={img.img}
                            yImg={img.yImg}
                            yDiv={img.yDiv}
                            yScale={img.yScale}
                            index={index}
                        />
                    ))}

                </div>

            </div>

            <div style={{
                width: "100%",
                height: "100vh"
            }} />
        </>
    )
}

export default Content;