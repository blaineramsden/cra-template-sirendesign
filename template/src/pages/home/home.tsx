import { Link } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import "../../scss/global.scss";
import LottieAnimation from "lottie-react";
import animation from "../../components/navbar/data.json";
import "./home.scss";
import { motion } from "framer-motion";

const Home: React.FC = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    

    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkIsMobile = () => {
            const isMobileDevice = window.innerWidth <= 768;
            setIsMobile(isMobileDevice);
        };
        checkIsMobile();
        const handleResize = () => {
            checkIsMobile();
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className='hero'>
                <div className='anim-wrapper'>
                    <LottieAnimation
                        animationData={animation}
                        loop={false}
                        autoPlay={true}
                        width={"100%"}
                        height={"auto"}
                        style={{
                            position: "relative",
                            zIndex: -1,
                        }}
                    />
                    <motion.div animate={
                        {
                            opacity: [0, 1],
                            translateY: [-25, 0],
                            transition: {
                                duration: 1,
                                delay: 4,
                            },
                        }
                    
                    } className="arrow">
                        <img src="../images/arrow.svg" alt="arrow" />
                    </motion.div>
                </div>
                <div className='split-text contain'>
                    <div className='gradient'> </div>
                    <img
                        src={`../images/home/${
                            isMobile ? "mobile" : "desktop"
                        }/1.jpg`}
                        alt='hero'
                        width={"100%"}
                        className='hero-image'
                    />
                    <img className="triangle-tr"  src="../images/triangle.png" />

                    {!isMobile ? <h1>Available</h1> : null}
                </div>
                {!isMobile ? (
                    <div className='lower-split'>
                        <h1>now</h1>
                    </div>
                ) : null}
                <div className='home-body'>
                    <h3>fourth and fifth floors</h3>
                    <h4>13,300 - 27,042 SQ FT</h4>
                    <div className='home-links'>
                        <Link to={"./building"}>
                            <h4>VIEW THE BUILDING</h4>
                        </Link>
                        <Link to={"./availability"}>
                            <h4>VIEW THE AVAILABILITY</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
