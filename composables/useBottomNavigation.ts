import { useGlobalComponentStore } from "~/src/store/global-component-store";
import { storeToRefs } from 'pinia';

export default function (){
const globalComponentStore = useGlobalComponentStore()
const {isBottomVisible} = storeToRefs(globalComponentStore);
const {changeIsBottomVisible} = globalComponentStore;
function openBottomBar(){
    changeIsBottomVisible(true)
}
function closeBottomBar(){
    changeIsBottomVisible(false)
}
return {isBottomVisible,closeBottomBar,openBottomBar}
}