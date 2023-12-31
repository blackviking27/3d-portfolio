import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { caseStudies, projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const ProjectCard = ({ key, index, name, description, tags, image, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      variants={
        window.innerWidth > 400
          ? fadeIn("right", "spring", index * 0.5, 0.75)
          : ""
      }
      key={key}
    >
      <div className="sm:w-[360px] w-full transition-all duration-300 hover:scale-110">
        <div className="w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags &&
            tags?.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
        </div>
      </div>
    </motion.a>
  );
};

const Works = () => {
  return (
    <>
      <p className={styles.sectionSubText}>My work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>

      <div className="w-full flex">
        <motion.p
          variants={window.innerWidth > 400 ? fadeIn("", "", 0.1, 1) : ""}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <h2 className={` mt-10 -mb-10 ${styles.sectionHeadText}`}>
        Case Studies.
      </h2>
      <div className="mt-20 flex flex-wrap gap-8">
        {caseStudies.map((project, index) => (
          <ProjectCard key={`study-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
