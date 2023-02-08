import { defineComponent, ref } from "vue"
import { useVisible } from "../../hooks/useVisible";
import { Popup } from "../Popup";
import s from './index.module.scss'

export const Picker = defineComponent({
    setup(props, context) {
        const { visible, open, close } = useVisible()
        const isTouching = ref(false)
        const lastY = ref(-1)
        const translateY = ref(0)
        const handleTouchStart = (e: TouchEvent) => {
            isTouching.value = true
            lastY.value = e.touches[0].clientY
        }
        const handleTouchMove = (e: TouchEvent) => {
            if (!isTouching.value) return
            const y = e.touches[0].clientY
            const dy = y - lastY.value
            translateY.value += dy
            lastY.value = y
        }
        const handleTouchEnd = () => {
            isTouching.value = false
        }
        return () => (
            <Popup visible={true}>
                <div
                    class={s.picker_wrapper}
                    onTouchstart={handleTouchStart}
                    onTouchmove={handleTouchMove}
                    onTouchend={handleTouchEnd}
                >
                    {/* <div class={s.picker_divider} /> */}
                    <div class={s.picker_divider}>
                        <ol class={s.picker_list} style={{ transform: `translateY(${translateY.value}px)` }}>
                            <li>2000</li>
                            <li>2001</li>
                            <li>2002</li>
                            <li>2003</li>
                            <li>2004</li>
                            <li>2005</li>
                            <li>2006</li>
                            <li>2007</li>
                            <li>2008</li>
                            <li>2009</li>
                            <li>2010</li>
                            <li>2000</li>
                            <li>2001</li>
                            <li>2002</li>
                            <li>2003</li>
                            <li>2004</li>
                            <li>2005</li>
                            <li>2006</li>
                            <li>2007</li>
                            <li>2008</li>
                            <li>2009</li>
                            <li>2010</li>
                            <li>2000</li>
                            <li>2001</li>
                            <li>2002</li>
                            <li>2003</li>
                            <li>2004</li>
                            <li>2005</li>
                            <li>2006</li>
                            <li>2007</li>
                            <li>2008</li>
                            <li>2009</li>
                            <li>2010</li>
                        </ol>
                    </div>
                </div>
            </Popup>
        );
    },
}); 