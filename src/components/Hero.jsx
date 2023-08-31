import { motion } from "framer-motion";

import { styles } from "../styles";
import City from "./canvas/City";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div
        className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex flex-row items-center justify-center gap-5 `}
      >
        <div className="z-[5] text-center">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Abhishek</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-gray-300`}>
            From crafting pixel-perfect UIs to coding server-side sorcery
          </p>
        </div>
      </div>
      <City />
    </section>
  );
};

export default Hero;
