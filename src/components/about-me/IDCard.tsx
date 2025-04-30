import profile from "../../assets/img/profile.png";
import js from "../../assets/img/logos/JavaScript-logo.png";
import node from "../../assets/img/logos/Node.js_logo.svg.png";
import react from "../../assets/img/logos/React-icon.svg.png";
import tailwind from "../../assets/img/logos/Tailwind_CSS_Logo.svg.png";
import laravel from "../../assets/img/logos/laravel-icon-1990x2048-xawylrh0.png";
import mysql from "../../assets/img/logos/Mysql_logo.png";
import { QuoteIcon } from "lucide-react";

export default function IDCard() {
  return (
    <section className="w-full h-full flex text-cinderella-950 justify-center items-center">
      <div className="lg:w-2/3 rounded-lg bg-congo-brown-800 border-8 border-congo-brown-950">
        <div className="flex p-3 justify-between px-5 gap-4 bg-opacity-30 bg-congo-brown-300">
          <div className=" font-bold font-mono text-xl">
            DEVELOPER CARD:{" "}
            <span className="text-anakiwa-400">WAI YAN LINN</span>
          </div>
          <p className=" text-xl font-bold font-mono">IDNo. 171001</p>
        </div>
        <div className="w-full p-5 grid grid-cols-3 gap-4">
          <div className="col-span-1 border-4 rounded-lg border-congo-brown-950 flex justify-center">
            <img className="bg-cover bg-congo-brown-100" src={profile} />
          </div>
          <div className="col-span-2 flex flex-col">
          <div className="flex flex-col gap-2 mb-2">
              <div className="flex justify-between items-center text-cinderella-200 font-mono text-sm">
              <span className="font-bold">Level: 23</span>
              <span className="font-bold">XP: 580 / 1000</span>
              </div>
              <div className="w-full bg-congo-brown-700 rounded-full h-4 overflow-hidden border-4 border-congo-brown-950">
              <div className="animate-pulse bg-anakiwa-300 h-full" style={{ width: "58%" }}></div>
              </div>
            </div>
            <p className="text-cinderella-950 text-justify text-xl bg-congo-brown-100 mb-2 rounded-lg border-4 border-congo-brown-950 font-mono p-4">
              <QuoteIcon className="text-anakiwa-800 inline-block me-1" />
              In the world of web development, I like to see myself as a blacksmith,
              shaping and forging code into powerful, functional creations. With
              each line, I craft solutions that bring ideas to life, always
              ready to face new challenges and evolve with every project.
            </p>
            
            <div className=" gap-2 grid grid-cols-6">
                {[js, node, react, tailwind, laravel, mysql].map((logo) => {
                    return (<div className="flex justify-center p-2 hover:scale-105 duration-150 bg-congo-brown-100 border-4 rounded-lg border-congo-brown-950 items-center">
                        <img className="bg-contain" src={logo} />
                      </div>)
                })}
              
            </div>
          </div>
        </div>
        <div className="flex p-3 justify-center gap-4 bg-opacity-30 bg-congo-brown-300 mb-5">
          <p className="font-bold font-mono text-lg">
            THE FRIENDLY NEIGHBORHOOD WEB DEVELOPER
          </p>
        </div>
      </div>
    </section>
  );
}
