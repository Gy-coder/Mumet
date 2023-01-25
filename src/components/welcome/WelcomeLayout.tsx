import { defineComponent, ref, toRefs } from "vue"
import s from './index.module.scss'

export const WelcomeLayout = defineComponent({
    props: {
        index: {
            type: Number,
            required: true,
        }
    },
    setup(props, context) {
        const { index } = toRefs(props)
        return () => (
            <div class={s.wrapper}>
                <div class={s.icon}>
                    {context.slots.icon?.()}
                    <span class={{ [s.triangle]: true, [s.reverse]: index.value % 2 === 0 }} />
                </div>
                <div class={s.text}>
                    <span>{context.slots.text?.()}</span>
                </div>
            </div>
        );
    },
});