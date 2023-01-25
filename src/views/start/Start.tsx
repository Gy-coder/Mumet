import { defineComponent } from "vue"
import icon from '../../assets/icons/start.svg'
import s from './index.module.scss'

export const Start = defineComponent({
    setup(props, context) {
        return () => (
            <>
                <div>Start</div>
            </>
        );
    },
});