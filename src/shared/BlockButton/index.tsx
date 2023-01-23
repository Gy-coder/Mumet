import { defineComponent } from "vue"
import s from './index.module.scss'

export const BlockButton = defineComponent({
    setup(props, context) {
        return () => (
            <div class={s.wrapper}>
                <button class={s.button}>{context.slots.default?.()}</button>
            </div>
        );
    },
});