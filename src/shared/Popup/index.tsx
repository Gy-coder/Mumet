import { computed, defineComponent, PropType, Teleport, Transition } from "vue"
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
            type: [String, () => Array as PropType<string[]>]
        },
        onClickMask: {
            type: Function as PropType<(e?: MouseEvent) => void>,
            requird: false
        }
    },
    emits: ['update:visible'],
    setup(props, context) {
        const classes = computed(() => {
            if (!props.class) return []
            if (typeof props.class === 'string') return [props.class]
            return [props.class]
        })
        const handleClickMask = (e?: MouseEvent) => {
            props.onClickMask?.()
        }
        return () => (
            <Teleport to="body">
                {props.showMask && props.visible ? <Mask onClick={handleClickMask} /> : null}
                <Transition
                    name="popup"
                    enterFromClass={s.popup_enter_from_class}
                    enterToClass={s.popup_enter_to_class}
                    leaveFromClass={s.popup_leave_from_class}
                    leaveToClass={s.popup_leave_to_class}
                >
                    {props.visible ? <div class={[s.popup, ...classes.value]}>{context.slots.default?.()}</div> : null}
                </Transition>
            </Teleport>
        );
    },
});