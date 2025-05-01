import {create} from "zustand";

type Check = {
    isStart: boolean;
    isSkillTreeOpen: boolean;
}


type Store = {

    checks: Check;
    updateCheck: (newState: Partial<Check>) => void;

}


const checkStore = create<Store>((set) => ({
    checks: {isStart: false, isSkillTreeOpen: false},
    updateCheck: (newState) => set((state) => ({
        checks: {...state.checks, ...newState}
    }))
        
}));

export default checkStore;