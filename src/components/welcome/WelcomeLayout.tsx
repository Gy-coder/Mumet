import { defineComponent } from "vue"
import { useRoute } from "vue-router";
import s from './index.module.scss'

export const WelcomeLayout = defineComponent({
    setup(props, context) {
        return () => (
            <div class={s.wrapper}>
                <div class={s.icon}>
                    {context.slots.icon?.()}
                    <span class={s.triangle} />
                </div>
                <div class={s.text}>
                    <span>{context.slots.text?.()}</span>
                </div>
            </div>
        );
    },
});