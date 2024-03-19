import { useRef } from "react";
import emailjs from "@emailjs/browser";
import logoblack from "../assets/logo-black.svg";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_js1hafl", "template_w9oqyag", form.current, {
        publicKey: "nPrq6VW8zcVTIQyKm",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      className={`max-sm:h-auto max-sm:flex max-sm:flex-col max-sm:gap-10 max-md:h-auto max-md:flex max-md:flex-col max-md:gap-10 w-full h-screen  grid grid-cols-3 grid-rows-5`}
      id="contact"
    >
      <div className="col-span-3 flex flex-col items-center ">
        <span className={`mt-4 font-bold text-slate-700`}>Get In Touch</span>
        <span
          className={`text-4xl font-extrabold text-purple-900 drop-shadow-xl`}
        >
          Contact me
        </span>
      </div>
      <div className="max-sm:items-center max-sm:gap-10 max-md:items-center max-md:gap-10 row-span-4  flex flex-col items-end justify-evenly">
        <article className="w-3/5 p-4 font-semibold text-slate-800 flex flex-col items-center justify-center bg-slate-400/10">
          <span className="material-symbols-outlined text-purple-900">
            mail
          </span>
          <h4>Email</h4>
          <h5>hamdi.kaoubi1994@gmail.com</h5>
          <a
            href="mailto:hamdi.kaoubi1994@gmail.com"
            className="text-purple-900"
          >
            Send A Message
          </a>
        </article>
        <article className="w-1/2 p-4 font-semibold text-slate-800 flex flex-col items-center justify-center bg-slate-400/10">
          <span className="material-symbols-outlined text-purple-900">
            send
          </span>
          <h4>Messenger</h4>
          <h5>Hamdi Kaoubi</h5>
          <a
            href="https://m.me/hamdi.kaoubi"
            rel="noreferrer"
            target="_blank"
            className="text-purple-900"
          >
            Send A Message
          </a>
        </article>
        <article className="w-2/5 p-4 font-semibold text-slate-800 flex flex-col items-center justify-center bg-slate-400/10">
          <span className="material-symbols-outlined text-purple-900">
            add_call
          </span>
          <h4>WhatsApp</h4>
          <h5>+21620223395</h5>
          <a
            href="https://api.whatsapp.com/send?phone=+21620223395"
            rel="noreferrer"
            target="_blank"
            className="text-purple-900"
          >
            Make A Call
          </a>
        </article>
      </div>
      <div
        className={`max-sm:p-6 max-md:p-6 flex flex-col items-center justify-evenly col-span-2 row-span-4`}
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className={`max-sm:w-4/5 max-md:w-4/5 flex flex-col gap-6 w-1/2 bg-slate-400/10 p-4 rounded-md`}
        >
          <input
            className="p-2 rounded-md"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="p-2 rounded-md"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            className="p-2 rounded-md"
            name="message"
            rows="7"
            placeholder="Message Me Here, Thanks"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-purple-950 w-1/3 text-white p-2 rounded-md font-semibold"
          >
            Send Message
          </button>
        </form>
        <div className={`w-48 h-10 flex items-center justify-evenly`}>
          <img src={logoblack} alt className={`w-10 h-4/5 opacity-50`} />
          <span>|</span>
          <p>&copy; Hk 2024</p>
        </div>
      </div>
    </div>
  );
}
