import profilePic from "../assets/Bewerbungsbild_Skender_Edmond .png";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
    const [text] = useTypewriter({
        words: ["I'm an Artificial Intelligence Student", "I'm a Developer", "I love creating"],
        loop: true,
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 2000,
    });

    const container = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: delay },
        },
    });

    return (
        <div className="border-b border-neutral-900 pb-60 py-16 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-8xl tracking-tight lg:mt-16 lg:text-8xl font-thin"
                        >
                            Hi, my Name is Edmond
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent leading-tight"
                        >
                            {text}
                            <Cursor cursorStyle="<"/>
                        </motion.span>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic}
                            alt="profile picture"
                            className="w-80 h-auto rounded-full shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
