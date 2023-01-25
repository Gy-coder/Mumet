import { defineComponent, onMounted, ref } from "vue"
import { useSetupHeight } from "../../hooks/useSetupHeight";
import s from './index.module.scss'
import icon from '../../assets/icons/splash.svg'

export const Splash = defineComponent({
    setup(props, context) {
        useSetupHeight()
        return () => (
            <div class={s.wrapper}>
                <img src={icon} />
                <span class={s.text}>Personal Management Finance</span>
            </div>
        );
    },
});