import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const useLenis = () => {
    useEffect(() => {
        const lenis = new Lenis({
            smooth: true, // Enable smooth scrolling
        });

        const handleScroll = (time) => {
            lenis.raf(time);
            requestAnimationFrame(handleScroll);
        };

        requestAnimationFrame(handleScroll);

        // Cleanup on component unmount
        return () => lenis.destroy();
    }, []);
};

export default useLenis;
