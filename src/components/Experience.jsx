import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const ExperienceCard = (props) => {
  return (
    <div key={props.key} className="flex gap-1 flex-col">
      <p className="text-2xl font-bold">
        <span>{props.title}</span>
        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
          &nbsp;&nbsp;@{props.company_name}
        </span>
      </p>
      <div className="text-sm text-gray-400">{props.date}</div>
      <ul>
        {props.points.map((point) => (
          <li className="mt-2">{point}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far...</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10">
        {experiences.map((data, key) => (
          <ExperienceCard key={key} {...data} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
