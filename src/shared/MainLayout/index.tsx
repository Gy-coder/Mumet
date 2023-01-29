import { defineComponent } from "vue"
import { Nav } from "../../components/nav";
import { useSetupHeight } from "../../hooks/useSetupHeight";
import s from './index.module.scss'

export const MainLayout = defineComponent({
    setup(props, context) {
        useSetupHeight()
        return () => (
            <div class={s.layout}>
                <div class={s.main}>
                    <header>{context.slots.header?.()}</header>
                    <main>{context.slots.main?.()}</main>
                </div>
                <Nav />
            </div>
        );
    },
});