import { defineComponent, PropType } from "vue"
import s from './index.module.scss'

export const Mask = defineComponent({
    props: {
        onClick: {
            type: Function as PropType<(e?: MouseEvent) => void>
        }
    },
    setup(props, context) {
        return () => (
            <div class={s.mask} onClick={props.onClick} />
        );
    },
});