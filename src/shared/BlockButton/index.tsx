import { defineComponent, PropType, useAttrs } from "vue"
import s from './index.module.scss'

export const BlockButton = defineComponent({
    props: {
        onClick: {
            type: Function as PropType<(e: MouseEvent) => void>
        }
    },
    setup(props, context) {
        return () => (
            <div class={s.wrapper}>
                <button class={s.button} onClick={props.onClick}>{context.slots.default?.()}</button>
            </div>
        );
    },
});