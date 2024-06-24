import work1 from "../assets/New-Project.jpg";
import work2 from '../assets/todo.jpg'
import logoblack from "../assets/logo-black.svg";

export default function Portfolio() {
  return (
    <div
      className={`max-sm:h-auto max-sm:gap-20 max-md:h-auto max-md:gap-10 max-md:p-6 w-full h-screen flex flex-col items-center justify-evenly`}
      id="portfolio"
    >
      <div className={`max-sm:flex-row max-sm:w-1/2 max-md:flex-row max-md:w-1/2 w-1/4 flex flex-col`}>
        <span className={`font-bold text-slate-700`}>Some of </span>
        <span
          className={`text-4xl font-extrabold text-purple-900 drop-shadow-xl`}
        >
          My Works
        </span>
      </div>
      <div
        className={`max-sm:flex-col max-md:flex-wrap w-full h-2/3 flex items-center justify-center gap-8`}
      >
        <div
          className={`w-52 h-4/6 relative hover:scale-110 transition duration-700 flex flex-col border-2 border-slate-800 items-center hover:shadow-xl`}
        >
          <img src={work1} alt="image" className={`w-full h-1/2`} />
          <div className="flex flex-col items-center p-2">
            <h2 className="font-medium text-purple-900">STTT website</h2>
            <p className="text-sm font-medium text-slate-700">
              Website for STTT start up where clients can discover the start up
              services. They can also send a message or a feedback.
            </p>
          </div>
          <div
            className={`absolute 
              w-full 
              h-full 
              top-0 
              left-0 
              bg-black/45
              opacity-0 
              hover:opacity-100 
              z-10
              flex
              gap-6
              justify-center
              items-center
              transition
              duration-500
              `}
          >
            <div
              className={`w-10 h-10 rounded-full flex justify-center items-center bg-black/70 text-white cursor-pointer hover:scale-110 transition`}
              title="live demo"
            >
              <a
                href="https://sttt2019.netlify.app/"
                target="_blank"
                className="flex justify-center items-center"
              >
                <span className="material-symbols-outlined">left_click</span>
              </a>
            </div>
            <div
              className={`w-10 h-10 rounded-full flex justify-center items-center bg-black/70 text-white cursor-pointer hover:scale-110 transition`}
              title="source code"
            >
              <a
                href="https://github.com/Hamdi-Kaoubi/sttt-project"
                target="_blank"
                className="flex justify-center items-center"
              >
                <span className="material-symbols-outlined">code</span>
              </a>
            </div>
          </div>
        </div>
        <div
        className={`w-52 h-4/6 relative hover:scale-110 transition duration-700 flex flex-col border-2 border-slate-800 items-center hover:shadow-xl`}
      >
        <img src={work2} alt="image" className={`w-full h-1/2`} />
        <div className="flex flex-col items-center p-2">
          <h2 className="font-medium text-purple-900">Practice Todo</h2>
          <p className="text-sm font-medium text-slate-700">
          I created this application to improve my JavaScript skills.
          I followed along with Tarmeez Academyand made corrections as needed.
          </p>
        </div>
        <div
          className={`absolute 
            w-full 
            h-full 
            top-0 
            left-0 
            bg-black/45
            opacity-0 
            hover:opacity-100 
            z-10
            flex
            gap-6
            justify-center
            items-center
            transition
            duration-500
            `}
        >
          <div
            className={`w-10 h-10 rounded-full flex justify-center items-center bg-black/70 text-white cursor-pointer hover:scale-110 transition`}
            title="live demo"
          >
            <a
              href="https://famous-pasca-5d8064.netlify.app/"
              target="_blank"
              className="flex justify-center items-center"
            >
              <span className="material-symbols-outlined">left_click</span>
            </a>
          </div>
          <div
            className={`w-10 h-10 rounded-full flex justify-center items-center bg-black/70 text-white cursor-pointer hover:scale-110 transition`}
            title="source code"
          >
            <a
              href="https://github.com/Hamdi-Kaoubi/todo-list"
              target="_blank"
              className="flex justify-center items-center"
            >
              <span className="material-symbols-outlined">code</span>
            </a>
          </div>
        </div>
      </div>
        <div className={`w-52 h-4/6 bg-blue-600`}></div>
        <div className={`w-52 h-4/6 bg-blue-600`}></div>
      </div>
      <div
        className={`max-sm:hidden max-md:hidden w-48 h-10 flex items-center justify-evenly -mb-8`}
      >
        <img src={logoblack} alt className={`w-10 h-4/5 opacity-50`} />
        <span>|</span>
        <p>&copy; Hk 2024</p>
      </div>
    </div>
  );
}
