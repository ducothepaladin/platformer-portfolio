import { motion } from "framer-motion";
import { Handle, NodeProps, Position } from "reactflow";

export default function BranchNode({ data, id }: NodeProps) {

  return (
    <>
      {data.visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r hover:cursor-pointer from-congo-brown-800 to-congo-brown-700 group text-cinderella-200 shadow-2xl w-80 text-center rounded-2xl p-8 relative transition-transform transform hover:scale-110 hover:shadow-3xl hover:rotate-2 hover:skew-y-2 hover:brightness-110"
        >
          <Handle
            type="source"
            position={Position.Right}
            className="w-4 h-4 bg-cinderella-200 border-none"
          />
          <div className="text-xl font-bold tracking-wider">{data.label}</div>
          <Handle
            type="target"
            position={Position.Left}
            className="w-4 h-4 bg-cinderella-200 border-none"
          />
          <div className="hidden group-hover:flex items-center justify-center absolute top-0 right-0 w-full h-full text-congo-brown-800 opacity-95 z-50 bg-cinderella-200 rounded-2xl">
            <span className="text-base font-semibold animate-bounce">
              Explore Details
            </span>
          </div>
          <div className="absolute bottom-3 right-3 text-sm text-cinderella-300 opacity-80 group-hover:opacity-100 transition-opacity">
            Level 6
          </div>
          <div className="absolute top-3 left-3 text-sm text-cinderella-300 opacity-80 group-hover:opacity-100 transition-opacity">
            <span className="font-semibold">Experience</span>
          </div>
          <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-cinderella-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </motion.div>
      )}
    </>
  );
}
