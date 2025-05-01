import { useStore } from "zustand";
import { motion } from "framer-motion";
import { Info, ArrowRight } from "lucide-react";
import checkStore from "../../store/checkStore";

export default function InfoPopUp() {
  const { checks, updateCheck } = useStore(checkStore);

  return (
    <div>
      {!checks.isStart && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-lvw h-full z-30 flex justify-center shadow-lg shadow-white items-center fixed left-0 top-0 bg-opacity-60"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:w-1/2 w-full mx-4 h-auto md:w-2/3 flex flex-col relative justify-center items-center bg-congo-brown-900 text-cinderella-200 rounded-xl p-10 border border-cinderella-200 shadow-2xl"
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Info className="text-anakiwa-500 w-10 h-10 mr-3" />
              </motion.div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-center tracking-wide">
                Welcome to My Portfolio
              </h1>
            </div>
            <p className="text-center text-lg md:text-xl leading-relaxed mb-6">
              Hello! I'm{" "}
              <span className="text-anakiwa-500 font-semibold">
                Wai Yan Linn
              </span>
              , and this is my interactive, platformer-style portfolio. Meet{" "}
              <span className="text-anakiwa-500 font-semibold">Duco</span>, my
              little assistant, who will guide you through various sections
              where you can explore my work, skills, and passions. Dive in, have
              fun, and enjoy your journey!
            </p>
            <motion.div
              onClick={() => updateCheck({ isStart: true })}
              whileHover={{ scale: 1.1, backgroundColor: "#A7E0FF" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-3 text-cinderella-900 font-bold hover:bg-anakiwa-200 bg-anakiwa-500 rounded-full mt-6 shadow-lg flex items-center cursor-pointer"
            >
              <span className="mr-3">Start</span>
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </div>
  );
}
