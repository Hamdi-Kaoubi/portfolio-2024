import logoblack from "../assets/logo-black.svg";
import { FaGithubSquare } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa6";

export default function Footer() {
  return (
    <div
      className={`max-sm:h-auto max-sm:flex-col max-md:h-auto max-md:flex-col w-full h-64 bg-slate-400/20 flex items-center `}
    >
      <img
        src={logoblack}
        alt=""
        className="w-64 h-2/3 opacity-40 animate-pulse"
      />
      <div className="max-sm:h-auto max-sm:flex-col max-md:h-auto max-md:flex-col h-2/3 w-full p-4 text-slate-800 flex justify-start gap-10 items-center">
        <span className="text-2xl">
          &copy; Hamdi Kaoubi. all rights reserved
        </span>
        <span className="max-sm:hidden max-md:hidden text-3xl">|</span>
        <span className="flex gap-10 text-3xl">
          <a href="https://github.com/Hamdi-Kaoubi" target="_blank">
            <FaGithubSquare />
          </a>
          <a href="https://www.facebook.com/hamdi.kaoubi/" target="_blank">
            <FiFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/hamdi-kaoubi-3315031a3/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.linkedin.com/in/hamdi-kaoubi-3315031a3/"
            target="_blank"
          >
            <FaCodepen />
          </a>
        </span>
      </div>
    </div>
  );
}
