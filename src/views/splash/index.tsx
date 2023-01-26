import { defineComponent, onBeforeUnmount, onMounted, ref } from "vue"
import { useSetupHeight } from "../../hooks/useSetupHeight";
import s from './index.module.scss'
import icon from '../../assets/icons/splash.svg'
import { useRouter, useRoute } from "vue-router";

export const Splash = defineComponent({
    setup(props, context) {
        const router = useRouter(), route = useRoute()
        const wrapperRef = ref<HTMLElement>()
        const redirectTo = () => router.replace("/welcome/1")
        onMounted(() => {
            wrapperRef.value?.addEventListener("animationend", redirectTo)
        })
        onBeforeUnmount(() => {
            wrapperRef.value?.removeEventListener("animationend", redirectTo)
        })
        useSetupHeight()
        return () => (
            <div class={s.wrapper} >
                <img src={icon} ref={wrapperRef} />
                <span class={s.text}>Personal Management Finance</span>
            </div>
        );
    },
});