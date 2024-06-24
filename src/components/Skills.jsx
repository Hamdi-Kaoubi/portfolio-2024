import logo1 from "../assets/html-icon.webp";
import logo2 from "../assets/css-icon.webp";
import logo3 from "../assets/JavaScript-logo.png";
import logo4 from "../assets/React-icon.svg.png";
import logo5 from "../assets/redux-icon.webp";
import logo6 from "../assets/tailwind-css-icon-512x307-1v56l8ed.png";
import logo7 from "../assets/material-ui-icon-2048x1626-on580ia9.png";
import logo8 from "../assets/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png";
import logo9 from "../assets/image.png";
import logo10 from "../assets/free-mongodb-5-1175140.webp";
import logo11 from "../assets/nodejs-logo.png";
import logo12 from "../assets/Git_icon.svg.png";
import logo13 from "../assets/github-icon.webp";
import gomycode from "../assets/gomycode.jpg";
import coursera from "../assets/coursera.png";
import logoblack from "../assets/logo-black.svg";

export default function Skills() {
  return (
    <div
      className={`max-sm:h-auto max-md:h-auto w-full bg-slate-400/10 h-screen flex flex-col justify-evenly items-center`}
      id="skills"
    >
      <div
        className={`max-sm:flex-col max-sm:p-6 max-sm:gap-10 max-md:h-auto w-full h-5/6  flex justify-around items-center`}
      >
        <div
          className={`max-sm:w-full w-5/12 h-5/6 max-md:w-1/2 flex flex-col items-center gap-10`}
        >
          <h2 className="text-2xl font-bold text-slate-800">
            My <span className="text-purple-900 font-extrabold">Skills</span>
          </h2>
          <div
            className={`w-full h-2/3  flex flex-wrap gap-8 p-4 justify-center`}
          >
            <img src={logo1} alt="" className="w-16 h-16 drop-shadow-xl" />
            <img src={logo2} alt="" className="w-16 h-16 drop-shadow-xl" />
            <img src={logo3} alt="" className="w-16 h-16 drop-shadow-xl" />
            <img src={logo4} alt="" className="w-16 h-16 drop-shadow-xl" />
            <img src={logo5} alt="" className="w-16 h-16 drop-shadow-xl" />
            <img src={logo6} alt="" className="w-20 h-16 drop-shadow-xl" />
            <img src={logo7} alt="" className="w-16 h-16 drop-shadow-xl" />
            <img src={logo8} alt="" className="w-14 h-16 drop-shadow-xl" />
            <img src={logo9} alt="" className="w-16 h-16 drop-shadow-xl" />
            <img src={logo10} alt="" className="w-16 h-16 drop-shadow-xl" />
            <img src={logo11} alt="" className="w-16 h-16 drop-shadow-xl" />
            <img src={logo12} alt="" className="w-16 h-16 drop-shadow-xl" />
            <img src={logo13} alt="" className="w-16 h-16 drop-shadow-xl" />
          </div>
        </div>
        <div
          className={`w-0.5 h-5/6 bg-purple-900 rounded-t-full rounded-b-full`}
        ></div>
        <div
          className={`max-sm:w-full max-md:w-1/2 w-5/12 h-5/6  flex flex-col items-center gap-10`}
        >
          <h2 className="text-2xl font-bold text-slate-800">
            My{" "}
            <span className="text-purple-900 font-extrabold">
              Certifications
            </span>
          </h2>
          <div className={`w-full h-2/3  flex gap-10 flex-wrap justify-center`}>
            <div className="w-1/3 h-auto flex flex-col">
              <a
                href="https://drive.google.com/file/d/1e7mJow7823BJNn2RdxDVD-RI0T8hW5cE/view?usp=sharing"
                target="_blank"
              >
                <img
                  src={gomycode}
                  alt=""
                  className="w-full h-32 grayscale hover:grayscale-0 transition"
                />
              </a>
              <span className="text-center text-slate-800 font-semibold">
                The Full-Stack JavaScript Bootcamp
              </span>
            </div>
            <div className="w-1/3 h-auto flex flex-col">
              <a
                href="https://drive.google.com/file/d/1sHOxNU2V1ZcOJztz7IqQV6KBOuZd_nkG/view?usp=sharing"
                target="_blank"
              >
                <img
                  src={coursera}
                  alt=""
                  className="w-full h-32 grayscale hover:grayscale-0 transition"
                />
              </a>
              <span className="text-center text-slate-800 font-semibold">
                Meta Advanced React
              </span>
            </div>
            <div className="w-1/3 h-auto flex flex-col">
              <a
                href="https://drive.google.com/file/d/1UX7YS74xKxY9G4IyCuaNsQiEVXYMdrz3/view?usp=sharing"
                target="_blank"
              >
                <img
                  src={coursera}
                  alt=""
                  className="w-full h-32 grayscale hover:grayscale-0 transition"
                />
              </a>
              <span className="text-center text-slate-800 font-semibold">
                Meta Principles of UX/UI design
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`max-sm:hidden w-48 h-10 flex items-center justify-evenly `}
      >
        <img src={logoblack} alt className={`w-10 h-4/5 opacity-50`} />
        <span>|</span>
        <p>&copy; Hk 2024</p>
      </div>
    </div>
  );
}
