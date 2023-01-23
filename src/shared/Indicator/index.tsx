import { defineComponent, toRefs, triggerRef } from "vue"
import s from './index.module.scss'

export const Indicator = defineComponent({
    props: {
        count: {
            type: Number,
            default: 1,
        },
        selected: {
            type: Number,
            required: true
        }
    },
    setup(props, context) {
        const { count, selected } = toRefs(props)
        return () => (
            <div class={s.wrapper}>
                {new Array(count.value).fill(0).map((_, i) => i + 1).map(item => {
                    return <span class={{ [s.active]: item === selected.value }} key={item} />
                })}
            </div>
        );
    },
});