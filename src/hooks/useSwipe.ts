import { computed, onBeforeUnmount, onMounted, ref, Ref } from "vue";

type Point = {
    x: number,
    y: number
}

type Direction = "left" | "right" | "up" | "down"

interface Options {
    beforeStart?: (e: TouchEvent) => void
    afterStart?: (e: TouchEvent) => void
    beforeMove?: (e: TouchEvent) => void
    afterMove?: (e: TouchEvent) => void
    beforeEnd?: (e: TouchEvent) => void
    afterEnd?: (e: TouchEvent) => void
}

export function useSwipe(el: Ref<HTMLElement | null>, options?: Options) {
    const swiping = ref<boolean>(false)
    const start = ref<Point>(), end = ref<Point>()
    const distance = computed<Point | null>(() => {
        if (!start.value || !end.value) return null
        return { x: end.value.x - start.value.x, y: end.value.y - start.value.y }
    })
    const direction = computed<Direction | null>(() => {
        if (!distance.value) return null
        const { x, y } = distance.value
        if (Math.abs(x) > Math.abs(y)) {
            return x > 0 ? "right" : "left"
        } else {
            return y > 0 ? "down" : "up"
        }
    })
    const onStart = (e: TouchEvent) => {
        options?.beforeStart?.(e)
        swiping.value = true
        start.value = end.value = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        }
        options?.afterStart?.(e)
    }
    const onMove = (e: TouchEvent) => {
        options?.beforeMove?.(e)
        if (!swiping.value) return
        end.value = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        }
        options?.afterMove?.(e)
    }
    const onEnd = (e: TouchEvent) => {
        options?.beforeEnd?.(e)
        swiping.value = false
        options?.afterEnd?.(e)
    }
    onMounted(() => {
        if (!el.value) return
        el.value.addEventListener('touchstart', onStart, false)
        el.value.addEventListener('touchmove', onMove, false)
        el.value.addEventListener('touchend', onEnd, false)
    })
    onBeforeUnmount(() => {
        if (!el.value) return
        el.value.removeEventListener('touchstart', onStart)
        el.value.removeEventListener('touchmove', onMove)
        el.value.removeEventListener('touchend', onEnd)
    })
    return { swiping, distance, direction, start, end }
}