import { defineComponent } from "vue"
import { RouterLink } from "vue-router";
import { useSetupHeight } from "../../hooks/useSetupHeight";
import { BlockButton } from "../../shared/BlockButton";
import s from './index.module.scss'
import url from '../../assets/icons/start.svg'

export const Start = defineComponent({
    setup(props, context) {
        useSetupHeight()
        console.log(url)
        return () => (
            <div class={s.wrapper}>
                <header class={s.icon}>
                    <img src={url} />
                    <span class={s.opcity}></span>
                </header>
                <main>
                    <div class={s.title}>Let’s Get Started</div>
                    <div class={s.subtitle}>Managing your money feels like being mentored</div>
                    <RouterLink to="/home">
                        <BlockButton>
                            Get Started
                        </BlockButton>
                    </RouterLink>
                </main>

                <footer>
                    <span>By signing up or logging in, i accept the mumet
                        Terms of Service and Privacy Policy</span>
                </footer>
            </div >
        );
    },
});