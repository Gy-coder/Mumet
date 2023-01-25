import { onBeforeUnmount, onMounted } from "vue";

export function useSetupHeight() {
    const setHeight = () => {
        const vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    onMounted(() => {
        setHeight()
        window.addEventListener("resize", setHeight)
    })
    onBeforeUnmount(() => {
        window.removeEventListener("resize", setHeight)
    })
}