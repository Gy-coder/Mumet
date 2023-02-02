import { defineComponent, PropType } from "vue"
import s from './index.module.scss'

export const Button = defineComponent({
    props: {
        square: {
            type: Boolean,
        },
        color: {
            type: String as PropType<"primary" | "danger">
        }
    },
    setup(props, context) {
        return () => (
            <button class={[s.button, {
                [s.button_square]: props.square,
                [s.button_primary]: props.color === 'primary',
                [s.button_danger]: props.color === 'danger',
            }]}>
                {context.slots.default?.()}
            </button>
        );
    },
});