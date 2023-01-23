import { defineComponent, Transition, VNode } from "vue"
import { RouteLocationNormalizedLoaded, RouterView } from "vue-router";
import s from "./index.module.scss"
import "../../App.scss"

export const Welcome = defineComponent({
    setup(props, context) {
        return () => (
            <div class={s.wrapper}>
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
            </div>
        );
    },
});