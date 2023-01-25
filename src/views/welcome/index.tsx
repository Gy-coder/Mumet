import { defineComponent, ref, Transition, VNode, watchEffect } from "vue"
import { RouteLocationNormalizedLoaded, RouterView, useRoute, useRouter } from "vue-router";
import s from "./index.module.scss"
import { useSwipe } from "../../hooks/useSwipe";
import { throttle } from "../../shared/throttle";
import { useSetupHeight } from "../../hooks/useSetupHeight";

const routerTo: Record<string, string> = {
    "/welcome/1": "/welcome/2",
    "/welcome/2": "/welcome/3"
}

export const Welcome = defineComponent({
    setup(props, context) {
        const router = useRouter(), route = useRoute()
        const wrapper = ref<HTMLElement | null>(null)
        const replaceRouter = throttle(() => router.replace(routerTo[route.path]), 500)
        const { direction, swiping } = useSwipe(wrapper, {
            beforeStart: (e) => e.preventDefault()
        })
        watchEffect(() => {
            console.log(swiping.value, direction.value)
            if (swiping.value && direction.value === 'left') {
                replaceRouter()
            }
        })
        useSetupHeight()
        return () => (
            <div class={s.wrapper} ref={wrapper}>
                <main>
                    <RouterView name="main">
                        {(obj: {
                            Component: VNode;
                            route: RouteLocationNormalizedLoaded;
                        }) => {
                            return <Transition
                                enterFromClass={s.slide_fade_enter_from}
                                enterActiveClass={s.slide_fade_enter_active}
                                leaveToClass={s.slide_fade_leave_to}
                                leaveActiveClass={s.slide_fade_leave_active}
                            >
                                {obj.Component}
                            </Transition>
                        }}
                    </RouterView>
                </main>
                <footer>
                    <RouterView name="footer" />
                </footer>
                <span class={s.skip}>skip</span>
            </div >
        );
    },
});