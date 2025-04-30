import { useCallback, useEffect } from "react";
import ReactFlow, {
  addEdge,
  useEdgesState,
  useNodesState,
  Controls,
  Connection,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import CentralNode from "./CentralNode";
import { skillNodes, skillEdges } from "../../assets/data/node-datas";
import BranchNode from "./BranchNode";

const nodeTypes = {
  "central-node": CentralNode,
  "branch": BranchNode,
};

export default function SkillTrees() {
  const [nodes, setNodes, onNodesChange] = useNodesState(skillNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(skillEdges);
  const { setViewport } = useReactFlow();

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  useEffect(() => {
    setViewport({ x: 120, y: 345, zoom: 0.9});
  },[setViewport]);


  return (
    <div className="w-full h-full flex justify-center items-center">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
}
