import { defineComponent } from "vue"
import s from './index.module.scss'

export const WelcomeLayout = defineComponent({
    setup(props, context) {
        return () => (
            <div class={s.wrapper}>
                <div class={s.icon}>
                    {context.slots.icon?.()}
                </div>
                <div class={s.title}>{context.slots.title?.()}</div>
                <div class={s.subtitle}>{context.slots.subtitle?.()}</div>
            </div>
        );
    },
});