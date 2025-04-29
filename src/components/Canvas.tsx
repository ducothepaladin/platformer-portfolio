import { useCallback, useEffect, useRef, useState } from "react";
import { calculateCanvasSize } from "../helpers/game-common";
import dialog from "@/assets/img/objects/Carved_3Slides.png";
import Game from "../game/Game";
import checkStore from "../store/checkStore";
import { useStore } from "zustand";
import { useNavigate } from "react-router-dom";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [canvasSize, setCanvasSize] = useState(calculateCanvasSize);
  const {checks} = useStore(checkStore);
  const navigate = useNavigate();


  useEffect(() => {

    const handleNavigate = (event: any) => {
      navigate(event.detail.route)
    }

    window.addEventListener("navigate", handleNavigate);

    return () => window.removeEventListener("navigate", handleNavigate);
  },[])

  const updateCanvasSize = useCallback(() => {
    setCanvasSize(calculateCanvasSize());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateCanvasSize);
    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, [updateCanvasSize]);

  useEffect(() => {
    if (!canvasRef.current || !dialogRef.current) return;
    const canvas = canvasRef.current;
    
    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;

    const game = new Game(canvas, canvasSize.newTileSize, dialogRef.current);
    
    if(checks.isStart) {
      game.start();
    }
    
  }, [canvasSize, checks.isStart]);

  return (
    <div className={`flex justify-center`}>
      <div style={{width: canvasSize.width, height: canvasSize.height}} className="relative z-20">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
      <div
        ref={dialogRef}
        style={{
          backgroundImage: `url(${dialog})`,
        }}
        className="bg-cover lg:text-[15px] md:text-[13px] text-[10px] bg-center duration-500 overflow-visible bg-congo-brown-300 rounded-lg p-4 font-serif absolute md:w-[20rem] lg:w-[28rem] w-[16rem] h-auto"
      >
        Hello, Welcome to my creator's portfolio, My name is <span className="text-anakiwa-700 inline">Duco</span>! I will be guide as you explore this portfolio.
      </div>
    </div>
    </div>
  );
}
