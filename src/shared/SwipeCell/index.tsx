import { computed, defineComponent, onMounted, ref, watchEffect } from "vue"
import { useSwipe } from "../../hooks/useSwipe";
import s from './index.module.scss'

export const SwipeCell = defineComponent({
    setup(props, context) {
        const wrapperRef = ref<HTMLDivElement | null>(null)
        const actionWrapper = ref<HTMLDivElement | null>(null)
        const actionWidth = computed(() => Math.ceil(actionWrapper.value?.getBoundingClientRect().width || 0))
        const showAction = ref<boolean>(false)
        const { swiping, direction, distance } = useSwipe(wrapperRef, {
            beforeStart(e) {
                e.preventDefault()
            },
        })
        watchEffect(() => {
            if (swiping.value && direction.value === 'left' && distance.value!.x <= -actionWidth.value / 3) {
                showAction.value = true
            }
            if (swiping.value && direction.value === 'right' && showAction.value) {
                showAction.value = false
            }
        })
        return () => (
            <div class={s.swipe_cell}>
                <div
                    class={s.swipe_cell_wrapper}
                    ref={wrapperRef}
                    style={{ transform: `translateX(${showAction.value ? -actionWidth.value + "px" : 0})` }}
                >
                    <div class={s.swipe_cell_content}>
                        {context.slots.default?.()}
                    </div>
                    <div class={s.swipe_cell_actions} ref={actionWrapper}>
                        {context.slots.actions?.()}
                    </div>
                </div>
            </div>
        );
    },
});