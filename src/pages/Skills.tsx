import { ReactFlowProvider } from "reactflow";
import SkillTrees from "../components/skills/SkillTrees";

export default function Skills() {
  return (
    <ReactFlowProvider>
      <div className="w-lvw h-lvh z-20 relative">
        <SkillTrees />
      </div>
    </ReactFlowProvider>
  );
}
