import { Handle, Position, NodeProps, useReactFlow } from "reactflow"
import { skillNodes } from "../../assets/data/node-datas";
import checkStore from "../../store/checkStore";

export default function CentralNode({data}: NodeProps) {

    const { setNodes } = useReactFlow();
    const { checks, updateCheck } = checkStore();

    const handleClick = () => {
      
      updateCheck({isSkillTreeOpen: !checks.isSkillTreeOpen});
      const rest = skillNodes.slice(1);

      rest.forEach((node, i) => {
        setTimeout(() => {
          setNodes((prev) => [...prev, {...node, data: {...node.data, visible: checks.isSkillTreeOpen}}])
        }, 100 * i)
      })

    };

  return (
    <div onClick={handleClick} className="bg-gradient-to-br active:scale-95 from-congo-brown-800 to-congo-brown-700 p-4 hover:scale-110 duration-300 w-52 h-52 flex justify-center border-4 border-cinderella-300 hover:cursor-pointer items-center rounded-full shadow-2xl transform hover:rotate-6 hover:shadow-cinderella-400/50">
      <Handle type="source" position={Position.Right} />
      <div className="text-cinderella-100 font-mono text-xl text-center tracking-wider">
      <span className="block mb-1 text-2xl font-bold">{data.label}</span>
      {checks.isSkillTreeOpen? <span className="text-sm opacity-75">Click to explore</span>: <span className="text-sm opacity-75">Close</span>}
      </div>
    </div>
  )
}
