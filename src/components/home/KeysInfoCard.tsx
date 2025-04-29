import { ArrowUp, ArrowLeft, ArrowRight, X } from "lucide-react"
import { useRef } from "react"

export default function KeysInfoCard() {

  const boxRef = useRef<HTMLDivElement>(null);

  const handlePopUp = () => {

    if(boxRef.current) boxRef.current.style.display = "none";
  }




  return (
    <div ref={boxRef} className="fixed z-20 left-0 top-0 w-lvw h-lvh flex justify-center items-center">
        <div className="w-2/5 bg-anakiwa-200 bg-opacity-40 relative p-5 rounded-lg h-auto flex flex-col justify-center">
      <span onClick={handlePopUp} className="absolute p-3 text-cinderella-950 top-0 right-0"><X /></span>

        <h1 className="text-center text-xl font-mono text-cinderella-950">Here are the key infos to control..</h1>
        <div className="flex lg:flex-row flex-col justify-center lg:justify-between p-5 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center flex justify-center col-span-2">
                <div className="w-[80px] text-[12px] h-[60px] flex flex-col justify-center items-center text-cinderella-200  bg-congo-brown-950">
                  <span>w</span>
                  <span>(Jump)</span>
                </div>
              </div>
              <div className="text-center">
                <div className="w-[80px] text-[12px] h-[60px] flex flex-col justify-center items-center text-cinderella-200 bg-congo-brown-950">
                <span>a</span>
                <span>(Move Left)</span>
                </div>
              </div>
              <div className="text-center">
                <div className="w-[80px] text-[12px] h-[60px] flex flex-col justify-center items-center text-cinderella-200 bg-congo-brown-950">
                <span>d</span>
                <span>(Move Right)</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center col-span-2 flex justify-center">
                <div className="w-[80px] text-[12px] h-[60px] flex flex-col justify-center items-center text-cinderella-200 bg-congo-brown-950">
                <span><ArrowUp /></span>
                <span>(Jump)</span>
                </div>
              </div>
              <div className="text-center">
                <div className="w-[80px] text-[12px] h-[60px] flex flex-col justify-center items-center text-cinderella-200 bg-congo-brown-950">
                <span><ArrowLeft /></span>
                <span>(Move Left)</span>
                </div>
              </div>
              <div className="text-center">
                <div className="w-[80px] text-[12px] h-[60px] flex flex-col justify-center items-center text-cinderella-200 bg-congo-brown-950">
                <span><ArrowRight /></span>
                <span>(Move Right)</span>
                </div>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}
