import { RiReactjsLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiPython } from "react-icons/di";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";import {
    SiCplusplus,
    SiTensorflow,
    SiPytorch,
    SiSplunk,
} from "react-icons/si";
import {motion} from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: [0.445, 0.05, 0.55, 0.95], // Custom Bezier curve for sine-like motion
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});



const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-40">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(1.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCplusplus className="text-7xl text-[#00549D]"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(1.8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-[#61DAFB]"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className="text-7xl text-[#0277BD]"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(1.6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSplunk className="text-7xl text-neutral-100"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiPython className="text-7xl text-[#3776AB]"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(1.2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPytorch className="text-7xl text-[#EE4C2C]"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className="text-7xl text-[#00ACC1]"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(1.6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandFramerMotion className="text-7xl text-neutral-100"/>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;

