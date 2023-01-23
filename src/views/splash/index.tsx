import { defineComponent, onMounted, ref } from "vue"
import s from './index.module.scss'

export const Splash = defineComponent({
    setup(props, context) {

        return () => (
            <div class={s.wrapper}>
                <span>momo</span>
            </div>
        );
    },
});