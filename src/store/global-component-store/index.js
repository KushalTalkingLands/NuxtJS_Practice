import { defineStore } from "pinia";
export const useGlobalComponentStore = defineStore('globalComponent', () => {
    const isBottomVisible = ref(false)
    const bodyContent = ref({title:"",body:""})
    const customFunction = ref(null);
    function changeIsBottomVisible(value,title = "", body = "") {
        bodyContent.value.title = title
        bodyContent.value.body = body
        isBottomVisible.value = value;
    }
    function setCustomFunction(fn) {
        if (typeof fn === 'function') {
            customFunction.value = fn;
        } else {
            console.warn("The provided argument is not a function");
        }
    }

    function resetIsBottomVisible() {
        isBottomVisible.value = false;
    }
    return { isBottomVisible,changeIsBottomVisible,resetIsBottomVisible,setCustomFunction,bodyContent,customFunction }
})