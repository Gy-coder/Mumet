import { defineComponent, onBeforeUnmount, onMounted, ref } from "vue"
import { useSetupHeight } from "../../hooks/useSetupHeight";
import s from './index.module.scss'
import { useRouter, useRoute } from "vue-router";
import { Icon } from "../../shared/Icon";

export const Splash = defineComponent({
    setup(props, context) {
        const router = useRouter(), route = useRoute()
        const iconRef = ref<HTMLElement>()
        const redirectTo = () => router.replace("/welcome/1")
        onMounted(() => {
            iconRef.value?.addEventListener("animationend", redirectTo)
        })
        onBeforeUnmount(() => {
            iconRef.value?.removeEventListener("animationend", redirectTo)
        })
        useSetupHeight()
        return () => (
            <div class={s.wrapper} >
                <div class={s.icon} ref={iconRef}>
                    <Icon name="splash" />
                </div>
                <span class={s.text}>Personal Management Finance</span>
            </div>
        );
    },
});