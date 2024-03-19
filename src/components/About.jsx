import Personal2 from "../assets/personal-2.png";
import logoblack from "../assets/logo-black.svg";
import engineer from "../assets/mechanic.jpg";
import develop from "../assets/develop.jpg";
import challenge from "../assets/challenge.jpg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 1,
  },
};

export default function About() {
  return (
    <div
      className={`max-sm:h-auto max-md:h-auto w-full h-screen bg-slate-400/10  flex`}
      id="about"
    >
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition="transition"
        className={`
        max-sm:hidden
        max-md:hidden
        w-1/3  
        h-full 
        flex 
        items-end
        `}
      >
        <img src={Personal2} alt="personal" className={`h-4/5`} />
      </motion.div>
      <div
        className={`
        max-sm:w-full
        max-sm:gap-20
        max-sm:p-6
        max-md:w-full
        max-md:gap-10
        max-md:p-6
        w-2/3 
        h-full 
        flex 
        flex-col 
        items-center 
        relative 
        justify-evenly
        `}
      >
        <div
          className={`max-sm:flex-row max-sm:w-1/2 max-md:w-1/2 max-md:flex-row w-1/4  mt-4 flex flex-col`}
        >
          <span className={`font-bold text-slate-700`}>Get to know</span>
          <span
            className={`text-4xl font-extrabold text-purple-900 drop-shadow-xl`}
          >
            About me
          </span>
        </div>
        <div
          className={`max-sm:w-4/5 max-md:w-4/5 w-1/2 font-bold text-slate-700`}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(2500)
                .typeString(
                  `As a fullstack developer, I bring
        a passion for coding and a solid
        foundation in both front-end and
        back-end development. With a keen
        eye for detail and a commitment to
        writing clean, efficient code, I am
        dedicated to contributing to dynamic
        and collaborative teams. Eager to
        learn and adapt to new technologies,
        I am ready to tackle challenges and
        help drive innovation in web
        development projects`
                )
                .start();
            }}
          />
        </div>
        <div
          className={`max-sm:flex-col max-sm:gap-10 max-sm:items-center max-md:w-full max-md:gap-4 w-4/5 h-1/3 flex justify-between`}
        >
          <div
            className={`max-sm:w-1/2 max-sm:h-auto max-md:w-1/3 w-1/4 h-full hover:scale-110 transition duration-700 cursor-pointer shadow-2xl flex flex-col items-center rounded-xl`}
          >
            <img
              src={engineer}
              alt="engineer"
              className={`max-sm:h-64 max-md:h-44 w-full h-1/2 rounded-t-xl`}
            />
            <p className={`text-sm font-semibold text-purple-900`}>
              As an engineer, I have brought a unique blend of engineering
              precision and keen interest in crafting innovative solutions.
            </p>
          </div>
          <div
            className={`max-sm:w-1/2 max-sm:h-auto max-md:w-1/3 w-1/4 h-full hover:scale-110 transition duration-700 cursor-pointer shadow-2xl flex flex-col items-center rounded-xl`}
          >
            <img
              src={develop}
              alt="engineer"
              className={`max-sm:h-64 max-md:h-44 w-full h-1/2 rounded-t-xl`}
            />
            <p className={`text-sm font-semibold text-purple-900`}>
              And with a great passion to the world of IT and development. I
              decided to change to become a full stack developer.
            </p>
          </div>
          <div
            className={`max-sm:w-1/2 max-sm:h-auto max-md:w-1/3 w-1/4 h-full hover:scale-110 transition duration-700 cursor-pointer shadow-2xl flex flex-col items-center rounded-xl`}
          >
            <img
              src={challenge}
              alt="engineer"
              className={`max-sm:h-64 max-md:h-44 w-full h-1/2 rounded-t-xl`}
            />
            <p className={`text-sm font-semibold text-purple-900`}>
              a mile way begins by a step, I am still learning new features and
              technologies each day and ready for new challenges.
            </p>
          </div>
        </div>
        <div
          className={`max-sm:hidden max-md:hidden w-48 h-10 flex absolute bottom-0 left-76 items-center justify-evenly`}
        >
          <img src={logoblack} alt className={`w-10 h-4/5 opacity-50`} />
          <span>|</span>
          <p>&copy; Hk 2024</p>
        </div>
      </div>
    </div>
  );
}
