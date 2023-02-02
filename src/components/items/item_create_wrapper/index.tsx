import { defineComponent, PropType } from "vue"
import s from './index.module.scss'

export const ItemCreateWrapper = defineComponent({
    props: {
        value: String,
        onClick: {
            type: Function as PropType<(e?: MouseEvent) => void>
        }
    },

    setup(props, context) {
        return () => (
            <div class={s.input_wrapper} onClick={props.onClick}>
                <span class={s.input_icon}>
                    {context.slots.icons?.()}
                </span>
                <span class={s.input_value}>{context.slots.value?.()}</span>
                <input readonly type="text" value={props.value} />
            </div>
        );
    },
});