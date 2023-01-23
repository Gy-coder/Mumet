import { defineComponent } from "vue"
import { RouterView } from "vue-router";
import { BlockButton } from "../../shared/BlockButton";
import s from "./index.module.scss"

export const Welcome = defineComponent({
    setup(props, context) {
        return () => (
            <div class={s.wrapper}>
                <main>
                    <RouterView />
                </main>
                <footer>
                    <BlockButton>Get Started</BlockButton>
                </footer>
            </div>
        );
    },
});