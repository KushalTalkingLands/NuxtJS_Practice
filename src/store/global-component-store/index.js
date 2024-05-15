import { defineStore } from "pinia";
export const useGlobalComponentStore = defineStore('globalComponent', () => {
    const isBottomVisible = ref(false)
    function changeIsBottomVisible(value) {
        isBottomVisible.value = value;
    }

    function resetIsBottomVisible() {
        isBottomVisible.value = false;
    }
    return { isBottomVisible,changeIsBottomVisible,resetIsBottomVisible }
})