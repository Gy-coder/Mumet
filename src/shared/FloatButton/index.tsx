import { defineComponent, PropType } from "vue"
import { Icon } from "../Icon";
import s from './index.module.scss'

export const FloatButton = defineComponent({
    props: {
        name: {
            type: String,
            default: "add"
        },
        onClick: {
            type: Function as PropType<(e: MouseEvent) => void>
        }
    },
    setup(props, context) {
        return () => (
            <div class={s.float_button} onClick={props.onClick}>
                <Icon name={props.name} />
            </div>
        );
    },
});