import { computed, defineComponent, PropType, ref, watch, watchEffect } from "vue"
import { useVisible } from "../../hooks/useVisible";
import { Popup } from "../Popup";
import s from './index.module.scss'



const Column = defineComponent({
    props: {
        dataSource: {
            type: Array as PropType<(string | number)[]>,
            default: () => []
        },
        value: {
            type: [Number, String]
        },
        index: {
            type: Number
        }
    },
    emits: ["update:value"],
    setup(props, context) {
        const isTouching = ref(false)
        const lastY = ref(-1)
        const translateY = ref(0)
        const handleTouchStart = (e: TouchEvent) => {
            isTouching.value = true
            lastY.value = e.touches[0].clientY
        }
        const handleTouchMove = (e: TouchEvent) => {
            if (!isTouching.value) return
            console.log("index:", props.index, 'isTouching', isTouching.value)
            const y = e.touches[0].clientY
            const dy = y - lastY.value
            translateY.value += dy
            lastY.value = y
        }
        const setTranslateY = (y: number) => {
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
            context.emit("update:value", props.dataSource[Math.abs(translateY.value / -36)])
        }
        watchEffect(() => {
            const index = props.dataSource.indexOf(props.value!)
            setTranslateY(index * -36)
        })
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
    props: {
        dataSource: {
            type: Array as PropType<Array<Array<string | number>>>,
            default: () => []
        },
        value: {
            type: Array as PropType<Array<string | number>>,
            default: () => []
        },
        onUpdateValue: {
            type: Function as PropType<(value: Array<string | number>) => void>,
            required: false,
        }
    },
    emits: ["update:value"],
    setup(props, context) {
        const computedValue = computed(() => {
            const res = []
            for (let i = 0; i < props.dataSource.length; i++) {
                res.push(ref(props.value[i] || props.dataSource[i][0]))
            }
            return res
        })
        watch(() => computedValue.value, (newValue) => {
            context.emit("update:value", newValue.map(v => v.value))
            props.onUpdateValue?.(newValue.map(v => v.value))
        }, { deep: true })
        return () => (
            <div
                class={s.picker_wrapper}
            >
                {/* <div class={s.picker_divider} /> */}
                <div class={s.picker_divider}>
                    {props.dataSource.map((column, index) =>
                        <Column dataSource={column} v-model:value={computedValue.value[index].value} index={index} />
                    )}
                </div>
            </div>
        );
    },
});

