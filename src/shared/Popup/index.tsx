import { computed, defineComponent, PropType, Teleport } from "vue"
import { Mask } from "../Mask";
import s from './index.module.scss'

export const Popup = defineComponent({
    props: {
        visible: {
            type: Boolean,
        },
        showMask: {
            type: Boolean,
            default: true
        },
        class: {
            type: Object as PropType<string | string[]>
        }
    },
    emits: ['update:visible'],
    setup(props, context) {
        const classes = computed(() => {
            if (!props.class) return []
            if (typeof props.class === 'string') return [props.class]
            return props.class
        })
        return () => (
            <Teleport to="body">
                {props.visible ?
                    <>
                        {props.showMask ? <Mask /> : null}
                        <div class={[s.popup, ...classes.value]}>{context.slots.default?.()}</div>
                    </>
                    : null}
            </Teleport>
        );
    },
});