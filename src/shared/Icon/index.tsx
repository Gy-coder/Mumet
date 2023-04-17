import { PropType, defineComponent } from "vue"
import s from './index.module.scss'

export const Icon = defineComponent({
    props: {
        name: {
            type: String,
            required: true
        },
        onClick: {
            type: Function as PropType<(e: MouseEvent) => void>
        }
    },
    setup(props, context) {
        return () => (
            <svg class={s.icon} onClick={props.onClick}>
                <use xlinkHref={`#${props.name}`}></use>
            </svg>
        );
    },
});