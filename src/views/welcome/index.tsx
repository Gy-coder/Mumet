import { defineComponent } from "vue"
import { RouterView } from "vue-router";
import s from "./index.module.scss"

export const Welcome = defineComponent({
    setup(props, context) {
        return () => (
            <div class={s.wrapper}>
                <main>
                    <RouterView />
                </main>
                <footer>
                    <button>Get Started</button>
                </footer>
            </div>
        );
    },
});