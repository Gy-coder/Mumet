import { defineComponent, onMounted, ref } from "vue"
import { Popup } from "../Popup";
import s from './index.module.scss'

export const InputNumber = defineComponent({
    props: {
        amount: {
            type: Number
        }
    },
    setup(props, context) {
        const visible = ref(true)
        const openPopup = () => visible.value = true
        const closePopup = () => visible.value = false
        const amountRef = ref(props.amount!.toString() || "0")
        const appendNumber = (n: number | '.') => {
            const nString = n.toString()
            const dotIndex = amountRef.value.indexOf(".")
            if (amountRef.value.length > 13) return
            if (dotIndex >= 0 && amountRef.value.length - dotIndex > 2) return
            if (nString === '.') {
                if (dotIndex >= 0) { // 已经有小数点了
                    return
                }
            } else if (nString === '0') {
                if (dotIndex === -1) { // 没有小数点
                    if (amountRef.value === '0') { // 没小数点，但是有0
                        return
                    }
                }
            } else {
                if (amountRef.value === '0') {
                    amountRef.value = ''
                }
            }
            amountRef.value += n.toString()
            context.emit("update:amount", parseFloat(amountRef.value).toFixed(2))
        }
        const deleteNumber = () => {
            amountRef.value = amountRef.value.substring(0, amountRef.value.length - 1)
            if (amountRef.value.length === 0) amountRef.value = '0'
            context.emit("update:amount", parseFloat(amountRef.value).toFixed(2))
        }
        return () => (
            <div class={s.input_number}>
                <input readonly type="text" onClick={openPopup} value={amountRef.value} />
                <Popup v-model:visible={visible.value} class={s.input_popup} showMask={false}>
                    <div class={s.input_popup_header}>
                        <span onClick={closePopup}>arrow</span>
                    </div>
                    <div class={s.input_popup_main}>
                        <div onClick={() => appendNumber(1)}><span>1</span></div>
                        <div onClick={() => appendNumber(2)}><span>2</span></div>
                        <div onClick={() => appendNumber(3)}><span>3</span></div>
                        <div onClick={() => appendNumber(4)}><span>4</span></div>
                        <div onClick={() => appendNumber(5)}><span>5</span></div>
                        <div onClick={() => appendNumber(6)}><span>6</span></div>
                        <div onClick={() => appendNumber(7)}><span>7</span></div>
                        <div onClick={() => appendNumber(8)}><span>8</span></div>
                        <div onClick={() => appendNumber(9)}><span>9</span></div>
                        <div onClick={() => appendNumber('.')}><span>.</span></div>
                        <div onClick={() => appendNumber(0)}><span>0</span></div>
                        <div onClick={() => deleteNumber()}><span>Del</span></div>
                    </div>

                </Popup>
            </div>
        );
    },
});