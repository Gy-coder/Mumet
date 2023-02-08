import { defineComponent, ref, Transition, VNode, watchEffect } from "vue"
import { RouteLocationNormalizedLoaded, RouterView, useRoute, useRouter } from "vue-router";
import s from "./index.module.scss"
import { useSwipe } from "../../hooks/useSwipe";
import { useSetupHeight } from "../../hooks/useSetupHeight";
import { replaceRouter } from "../../config/router/routerToInWelcome";

export const Welcome = defineComponent({
    setup(props, context) {
        const router = useRouter(), route = useRoute()
        const wrapper = ref<HTMLElement | null>(null)
        const handleClickSkip = () => {
            router.replace("/start")
        }
        const { direction, swiping } = useSwipe(wrapper, {
            beforeMove(e) {
                e.preventDefault()
            },
        })
        watchEffect(() => {
            if (swiping.value && direction.value === 'left') {
                replaceRouter(router, route)
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
                <span class={s.skip} onClick={handleClickSkip}>Skip This</span>
            </div >
        );
    },
});