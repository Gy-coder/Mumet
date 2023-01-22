import { defineComponent } from "vue"
import s from './index.module.scss'

export const Splash = defineComponent({
    setup(props, context) {
        return () => (
            <>
                <div>Splash</div>
            </>
        );
    },
});