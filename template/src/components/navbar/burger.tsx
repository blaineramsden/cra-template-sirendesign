import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./narbar.scss";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const btnone = {
        open: {
            rotate: [0, 0, 45],
            translateY: [0, 7],
            backgroundColor: "#86A1B2",
        },
        closed: {
            rotate: 0,
            translateY: 0,
        },
    };

    const btntwo = {
        open: {
            opacity: 0,
        },
        closed: {
            translateY: 0,
            rotate: 0,
        },
    };
    const btnthree = {
        open: {
            rotate: [0, 0, -45],
            translateY: [0, -7],
            backgroundColor: "#86A1B2",
            
        },
        closed: {
            translateY: 0,
            rotate: 0,
        },

    };

    return (
        <>
           
                <motion.div
                    className='openbtn'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <motion.div
                        animate={isOpen ? "open" : "closed"}
                        variants={btnone}
                        initial={false}
                        className='burger-line'
                    />
                    <motion.div
                        animate={isOpen ? "open" : "closed"}
                        variants={btntwo}
                        initial={false}
                        className='burger-line'
                        
                    />
                    <motion.div
                        animate={isOpen ? "open" : "closed"}
                        variants={btnthree}
                        initial={false}
                        className='burger-line'
                    />
                </motion.div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: "100vw", display: "none" }}
                    animate={{ opacity: 1, x: 0, display: "flex" }}
                    exit={{ opacity: 0, x: "100vw" }}
                    transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 30,
                        duration: 0.25,
                    }}
                    className='burger-menu'
                    style={{
                        width: "100vw",
                        position: "fixed",
                        top: "0",
                        left: "0",
                        height: "100vh",
                    }}
                >
                    <div className='burger-menu'>
                        <div className='logo'>
                            <img
                                src='../images/navbar/logo.svg'
                                width={"50%"}
                                alt='logo'
                            />
                        </div>
                        <div className='links'>
                            <motion.div
                                initial={{ x: 15, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 150,
                                    damping: 20,
                                    delay: 0.25,
                                }}
                            >
                                <Link onClick={() => setIsOpen(false)} to='/'>
                                    <h6
                                        className={
                                            location.pathname === "/"
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        Home
                                    </h6>
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ x: 15, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 150,
                                    damping: 20,
                                    delay: 0.35,
                                }}
                            >
                                <Link
                                    onClick={() => setIsOpen(false)}
                                    to='/building'
                                >
                                    <h6
                                        className={
                                            location.pathname === "/building"
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        The building
                                    </h6>
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ x: 15, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 150,
                                    damping: 20,
                                    delay: 0.45,
                                }}
                            >
                                <Link
                                    onClick={() => setIsOpen(false)}
                                    to='/availability'
                                >
                                    <h6
                                        className={
                                            location.pathname ===
                                            "/availability"
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        Availability
                                    </h6>
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ x: 15, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 150,
                                    damping: 20,
                                    delay: 0.55,
                                }}
                            >
                                <Link
                                    onClick={() => setIsOpen(false)}
                                    to='/location'
                                >
                                    <h6
                                        className={
                                            location.pathname === "/location"
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        Location
                                    </h6>
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ x: 15, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 150,
                                    damping: 20,
                                    delay: 0.65,
                                }}
                            >
                                <Link
                                    onClick={() => setIsOpen(false)}
                                    to='/contact'
                                >
                                    <h6
                                        className={
                                            location.pathname === "/contact"
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        Contact
                                    </h6>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default BurgerMenu;
