export function throttle(fn: Function, delay: number) {
    let timer: number | undefined
    return function (...args: any[]) {
        if (timer) return
        fn(...args)
        timer = setTimeout(() => {
            timer = undefined
        }, delay)
    }
}