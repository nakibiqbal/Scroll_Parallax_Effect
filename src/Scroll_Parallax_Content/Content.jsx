import "./Content.css"
import { useScroll } from "framer-motion"
import { useRef } from 'react';
import { ParallaxImages } from "./ParallaxImages";


const Content = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const imgData = [
        {
            img: "../src/Images/img1.jpg",
            yImg: "-7vh",
            yDiv: "-12vh",
            yScale: 1.5
        },
        {
            img: "../src/Images/img3.jpg",
            yImg: "0vh",
            yDiv: "0vh",
            yScale: 2
        },
        {
            img: "../src/Images/img2.jpg",
            yImg: "5vh",
            yDiv: "12vh",
            yScale: 1.5
        }
    ];

    return (
        <>
            <div style={{
                width: "100%",
                height: "100vh"
            }} />

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