import { defineComponent } from "vue"
import s from './index.module.scss'

export const Header = defineComponent({
    setup(props, context) {
        return () => (
            <div class={s.header}>
                {context.slots.left?.()}
                {context.slots.middle?.()}
                {context.slots.right?.()}
            </div>
        );
    },
});