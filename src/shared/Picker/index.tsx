import { defineComponent, PropType, ref } from "vue"
import { useVisible } from "../../hooks/useVisible";
import { Popup } from "../Popup";
import s from './index.module.scss'



export const Column = defineComponent({
    props: {
        dataSource: {
            type: Array as PropType<(string | number)[]>,
            default: () => []
        }
    },
    setup(props, context) {
        const { visible, open, close } = useVisible()
        const isTouching = ref(false)
        const lastY = ref(-1)
        const translateY = ref(0)
        const handleTouchStart = (e: TouchEvent) => {
            isTouching.value = true
            lastY.value = e.touches[0].clientY
        }
        const handleTouchMove = (e: TouchEvent) => {
            if (!isTouching.value) return
            const y = e.touches[0].clientY
            const dy = y - lastY.value
            translateY.value += dy
            lastY.value = y
        }
        const setTranslateY = (y: number) => {
            console.log(y, y > 0, y < props.dataSource.length * -36)
            if (y > 0) y = 0
            if (y < (props.dataSource.length - 1) * -36) y = (props.dataSource.length - 1) * -36
            translateY.value = y
        }
        const handleTouchEnd = () => {
            const reminder = translateY.value % 36;
            if (Math.abs(reminder) < 18) {
                setTranslateY(translateY.value - reminder)
            } else {
                setTranslateY(translateY.value - reminder + 36 * (reminder > 0 ? 1 : -1))
            }
            isTouching.value = false

        }
        return () => (
            <ol
                class={s.picker_list}
                style={{ transform: `translateY(${translateY.value}px)` }}
                onTouchstart={handleTouchStart}
                onTouchmove={handleTouchMove}
                onTouchend={handleTouchEnd}>
                {props.dataSource.map(dataItem => {
                    return <li key={dataItem}>{dataItem}</li>
                })}
            </ol>
        );
    },
});

export const Picker = defineComponent({
    setup(props, context) {
        const { visible, open, close } = useVisible()
        return () => (
            <Popup visible={true}>
                <div
                    class={s.picker_wrapper}
                >
                    {/* <div class={s.picker_divider} /> */}
                    <div class={s.picker_divider}>
                        {context.slots.default?.()}
                    </div>
                </div>
            </Popup>
        );
    },
});

