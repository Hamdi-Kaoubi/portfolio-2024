import img1 from "../assets/html.webp";
import img2 from "../assets/CSS3_logo.png";
import img3 from "../assets/React-icon.svg.png";
import img4 from "../assets/JavaScript-logo.png";
import img5 from "../assets/nodejs-logo.png";
import Personal from "../assets/personal.png";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div
      className={`max-sm:flex-col max-sm:items-center max-sm:h-auto max-md:items-center w-full h-screen flex`}
      id="home"
    >
      <motion.div
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
        className={`max-sm:w-full max-sm:h-auto max-sm:justify-center max-sm:items-center max-md:w-1/2 w-1/3 h-3/4 flex justify-end`}
      >
        <div
          className={`max-sm:w-full max-sm:h-auto  w-4/5 h-4/5 mr-1 mt-6 flex  flex-col items-center justify-center gap-10`}
        >
          <div className={`w-4/5  flex flex-col`}>
            <span className={`font-bold text-slate-700`}>Hello I&apos;m</span>
            <span
              className={`text-4xl font-extrabold text-purple-900 drop-shadow-xl`}
            >
              Hamdi KAOUBI
            </span>
          </div>
          <div className={`w-2/3 flex flex-col`}>
            <span className={`text-xl font-bold text-slate-700`}>
              Engineer &
            </span>
            <span className={`text-xl font-bold text-slate-700`}>
              Full Stack Developer
            </span>
          </div>
          <div
            className={`w-40 bg-purple-900 text-white rounded-xl p-2 flex items-center justify-between shadow-xl hover:bg-white hover:text-purple-900 font-bold`}
          >
            Download CV
            <a
              href="https://drive.google.com/file/d/1z5iwpppRtoEDtHGGwFoMdxTpiId-93mF/view?usp=sharing"
              target="_blank"
            >
              <span className={`material-symbols-outlined`}>file_save</span>
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className={`max-sm:hidden max-md:hidden w-1/3 h-96  self-center flex flex-col gap-10`}
      >
        <div className={`flex justify-between`}>
          <img
            src={img1}
            alt="html"
            className={`w-24 
          animate-bounce 
          drop-shadow-xl`}
          />
          <img
            src={img2}
            alt="css"
            className={`w-24 
          animate-bounce 
          drop-shadow-xl 
          transition 
          delay-75`}
          />
        </div>
        <div className={`flex justify-center`}>
          <img
            src={img3}
            alt="react"
            className={`w-24 
          animate-spin 
          drop-shadow-xl 
          delay-100`}
          />
        </div>
        <div className={`flex justify-between`}>
          <img
            src={img4}
            alt="js"
            className={`w-24 
          animate-bounce 
          drop-shadow-xl 
          delay-150`}
          />
          <img
            src={img5}
            alt="js"
            className={`w-24  
          animate-bounce 
          drop-shadow-xl 
          delay-200`}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
        className={`max-sm:self-center max-sm:w-full max-md:w-1/2 max-md:self-end w-1/3 h-3/4 self-end`}
      >
        <img src={Personal} alt="personal-photo" className={`h-full`} />
      </motion.div>
    </div>
  );
}
