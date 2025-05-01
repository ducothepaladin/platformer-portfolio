import profile from "../../assets/img/profile.png";
import js from "../../assets/img/logos/JavaScript-logo.png";
import node from "../../assets/img/logos/Node.js_logo.svg.png";
import react from "../../assets/img/logos/React-icon.svg.png";
import tailwind from "../../assets/img/logos/Tailwind_CSS_Logo.svg.png";
import laravel from "../../assets/img/logos/laravel-icon-1990x2048-xawylrh0.png";
import mysql from "../../assets/img/logos/Mysql_logo.png";
import { QuoteIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function IDCard() {
  return (
    <section className="w-full h-full flex text-cinderella-950 justify-center items-center p-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="lg:w-2/3 rounded-lg bg-congo-brown-800 border-8 border-congo-brown-950 shadow-xl"
      >
        <div className="flex p-3 justify-between px-5 gap-4 bg-opacity-30 bg-congo-brown-300 rounded-t-lg">
          <div className="font-bold font-mono text-xl">
            DEVELOPER CARD:{" "}
            <span className="text-anakiwa-400">WAI YAN LINN</span>
          </div>
          <p className="text-xl font-bold font-mono">IDNo. 171001</p>
        </div>
        <div className="w-full p-5 grid grid-cols-3 gap-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 border-4 rounded-lg border-congo-brown-950 flex justify-center shadow-lg"
          >
            <img
              className="bg-cover bg-congo-brown-100 rounded-lg"
              src={profile}
              alt="Profile"
            />
          </motion.div>
          <div className="col-span-2 flex flex-col">
            <div className="flex flex-col gap-4 mb-4">
              <div className="flex justify-between items-center text-cinderella-200 font-mono text-sm">
                <span className="font-bold">Level: 23</span>
                <span className="font-bold">XP: 580 / 1000</span>
              </div>
              <div className="w-full bg-congo-brown-700 rounded-full h-4 overflow-hidden border-4 border-congo-brown-950">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "58%" }}
                  transition={{ duration: 1 }}
                  className="animate-pulse bg-anakiwa-300 h-full"
                ></motion.div>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-cinderella-950 text-justify text-xl bg-congo-brown-100 mb-4 rounded-lg border-4 border-congo-brown-950 font-mono p-4 shadow-md"
            >
              <QuoteIcon className="text-anakiwa-800 inline-block me-1" />
              In the world of web development, I like to see myself as a
              blacksmith, shaping and forging code into powerful, functional
              creations. With each line, I craft solutions that bring ideas to
              life, always ready to face new challenges and evolve with every
              project.
            </motion.p>

            <div className="gap-4 grid grid-cols-6">
              {[js, node, react, tailwind, laravel, mysql].map((logo, i) => {
                return (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 * (i + 1) }}
                    className="flex justify-center p-3 hover:scale-110 duration-150 bg-congo-brown-100 border-4 rounded-lg border-congo-brown-950 items-center shadow-md"
                  >
                    <img
                      className="bg-contain w-10 h-10"
                      src={logo}
                      alt={`Logo ${i}`}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex p-3 justify-center gap-4 bg-opacity-30 bg-congo-brown-300 rounded-b-lg">
          <p className="font-bold font-mono text-lg text-center">
            THE FRIENDLY NEIGHBORHOOD WEB DEVELOPER
          </p>
        </div>
      </motion.div>
    </section>
  );
}
