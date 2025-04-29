import checkStore from "../../store/checkStore";
import { useStore } from "zustand";

export default function InfoPopUp() {
  const { checks, updateCheck } = useStore(checkStore);

  return (
    <div>
      {!checks.isStart && (
        <section className="w-lvw h-full z-30 flex justify-center  shadow-lg shadow-white items-center fixed left-0 top-0">
          <div className="lg:w-1/2  w-full mx-2 h-auto md:w-2/3  flex flex-col relative justify-center items-center bg-congo-brown-900 text-cinderella-200 rounded-lg p-8 border">
            <h1 className="text-2xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
              Welcome to My Portfolio
            </h1>
            <p className="text-center text-lg leading-relaxed">
              Hello! I'm {" "}
              <span className="text-anakiwa-500 font-semibold">
                Wai Yan Linn
              </span>
              , and this is my interactive, platformer-style portfolio. Meet{" "}
              <span className="text-anakiwa-500 font-semibold">Duco</span>, my
              little assistant, who will guide you through various sections
              where you can explore my work, skills, and passions. Dive in, have
              fun, and enjoy your journey!
            </p>
            <div
              onClick={() => updateCheck({ isStart: true })}
              className="px-8 py-2 text-cinderella-900 font-bold hover:bg-anakiwa-200 bg-anakiwa-500 rounded-lg mt-5 transition-transform transform hover:scale-105 shadow-md"
            >
              Start
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
