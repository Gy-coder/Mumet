import { defineComponent, VueElement } from "vue"
import s from './index.module.scss'
import icon from '../../assets/icons/start.svg'

export const Avatar = defineComponent({
    setup(props, context) {
        return () => (
            <div class={s.avatar}>
                <img src={icon} />
            </div>
        );
    },
});