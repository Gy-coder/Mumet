import { defineComponent } from "vue"
import { useSetupHeight } from "../../hooks/useSetupHeight";
import { BlockButton } from "../../shared/BlockButton";
import { Icon } from "../../shared/Icon";
import s from './index.module.scss'

export const Start = defineComponent({
    setup(props, context) {
        useSetupHeight()
        return () => (
            <div class={s.wrapper}>
                <header class={s.icon}>
                    <Icon name="start" />
                    <span class={s.opcity}></span>
                </header>
                <main>
                    <div class={s.title}>Let’s Get Started</div>
                    <div class={s.subtitle}>Managing your money feels like being mentored</div>
                    <BlockButton>Get Started</BlockButton>
                </main>

                <footer>
                    <span>By signing up or logging in, i accept the mumet
                        Terms of Service and Privacy Policy</span>
                </footer>
            </div>
        );
    },
});