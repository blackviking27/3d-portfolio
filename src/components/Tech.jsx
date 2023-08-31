import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Marquee from "react-fast-marquee";

const Tech = () => {
  return (
    <Marquee
      direction="right"
      className="whitespace-nowrap"
      gradient
      gradientColor={[5, 8, 22]}
      autoFill={true}
    >
      {technologies.map((data) => (
        <img
          key={data.name}
          className="h-24 w-24 px-4 mx-7"
          src={data.icon}
          alt={data.name}
        />
      ))}
    </Marquee>
  );
};

export default SectionWrapper(Tech, "");
