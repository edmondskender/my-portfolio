import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <div className="mx-2 w-10 text-2xl font-bold">ES</div>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <motion.a
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.linkedin.com/in/edmond-skender-635807223/?originalSubdomain=de"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/edmondskender"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </motion.a>
            </div>
        </nav>
    );
};

export default Navbar;
