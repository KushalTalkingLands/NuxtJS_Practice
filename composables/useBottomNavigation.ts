import { useGlobalComponentStore } from "~/src/store/global-component-store";
import { storeToRefs } from 'pinia';

export default function (){
const globalComponentStore = useGlobalComponentStore()
const {isBottomVisible,bodyContent,customFunction} = storeToRefs(globalComponentStore);
const {changeIsBottomVisible,setCustomFunction} = globalComponentStore;
function openBottomBar(bodyContent: { title: string; body: string }, fn: () => void) {
    const { title, body } = bodyContent;
    changeIsBottomVisible(true, title, body);
    setCustomFunction(fn);
}
function closeBottomBar(){
    changeIsBottomVisible(false)
}
return {isBottomVisible,closeBottomBar,openBottomBar,bodyContent,customFunction}
}