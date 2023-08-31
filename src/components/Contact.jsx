import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { FaGithub } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl h-fit"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="flex flex-col sm:flex-row flex-wrap justify-between text-center mt-6 gap-4">
          <a
            href="https://github.com/blackviking27"
            target="_blank"
            className="cursor-pointer flex flex-col items-center"
          >
            <div className="p-3 border border-white  border-1 rounded-full hover:text-[#050816] hover:bg-white transition-all duration-200">
              <FaGithub size={50} />
            </div>
            <span className="text-gray-200 mt-2">Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/abhi4747"
            target="_blank"
            className="cursor-pointer flex flex-col items-center "
          >
            <div className="p-3 border border-white  border-1 rounded-full hover:text-[#050816] hover:bg-white transition-all duration-200">
              <BiLogoLinkedin size={50} />
            </div>
            <span className="text-gray-200 mt-2">LinkedIn</span>
          </a>
          <a
            href="https://docs.google.com/document/d/19rr09JSANQauySu8rLRRSTKAICylg44JXCZu1CcsPBU/edit?usp=sharing"
            target="_blank"
            className="cursor-pointer flex flex-col items-center"
          >
            <div className="p-3 border border-white  border-1 rounded-full hover:text-[#050816] hover:bg-white transition-all duration-200">
              <AiOutlinePaperClip size={50} />
            </div>
            <span className="text-gray-200 mt-2">Resume</span>
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
