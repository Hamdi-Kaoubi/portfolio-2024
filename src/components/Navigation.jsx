import Logo from ".././assets/20231128_223654.svg";
import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <motion.div
      initial={{ x: -150 }}
      animate={{ x: 0 }}
      transition={{ duration: 1.5, delay: 1 }}
      className={`
      fixed 
      bg-slate-400/10
      hover:bg-slate-500/30
      w-20 
      flex 
      flex-col 
      gap-40 
      items-center 
      p-6
      top-6
      z-222
      rounded-xl
      max-sm:flex-row
      max-sm:w-4/5
      max-sm:z-222
      max-sm:gap-20
      max-sm:justify-center
      max-sm:top-3/4
      max-sm:left-14
      max-sm:h-20
      `}
    >
      <img
        src={Logo}
        alt="logo"
        className="w-8 hover:cursor-pointer hover:scale-125 duration-700"
      />
      <ul className="flex flex-col gap-8 max-sm:flex-row">
        <li>
          <a href="#home" title="Home">
            <span className={`material-symbols-outlined hover:cursor-pointer`}>
              home
            </span>
          </a>
        </li>
        <li>
          <a href="#about" title="About">
            <span className={`material-symbols-outlined hover:cursor-pointer`}>
              info
            </span>
          </a>
        </li>
        <li>
          <a href="#portfolio" title="Portfolio">
            <span className={`material-symbols-outlined hover:cursor-pointer`}>
              deployed_code
            </span>
          </a>
        </li>
        <li>
          <a href="#skills" title="Skills">
            <span className={`material-symbols-outlined hover:cursor-pointer`}>
              interests
            </span>
          </a>
        </li>
        <li>
          <a href="#contact" title="Contact">
            <span className={`material-symbols-outlined hover:cursor-pointer`}>
              mail
            </span>
          </a>
        </li>
      </ul>
    </motion.div>
  );
}
