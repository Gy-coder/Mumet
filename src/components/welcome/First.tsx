import { defineComponent } from "vue"
import s from './index.module.scss'
import icon from '../../assets/icons/save-money.svg'
export const First = defineComponent({
    setup(props, context) {
        return () => (
            <div class={s.wrapper}>
                <div class={s.icon}>
                    <img src={icon} />
                    <span class={s.triangle} />
                </div>
                <div class={s.text}>
                    <span>Spend Smarter Save More</span>
                </div>
            </div>
        );
    },
});