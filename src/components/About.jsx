import {ABOUT_TEXT} from "../constants/index.js";
import aboutImg from "../assets/about-image.png";
import {motion} from "framer-motion";

const About = () => {
    return <div className="border-b border-neutral-900 pb-40">
        <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl">About
            <span className="text-neutral-500"> Me</span>
        </motion.h2>
        <div className="flex flex-wrap">
            <motion.div
                whileInView={{opacity: 1, x:0}}
                initial={{opacity: 0, x:-100}}
                transition={{duration: 0.5}}
                className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-3xl size-9/12" src={aboutImg} alt="about"/>
                </div>
            </motion.div>
            <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 0.5}}
                className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6 whitespace-pre-wrap">{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
}
export default About;