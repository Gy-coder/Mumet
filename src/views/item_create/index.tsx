import { defineComponent, ref, watch } from "vue"
import { useSetupHeight } from "../../hooks/useSetupHeight";
import { Button } from "../../shared/Button";
import { Header } from "../../shared/Header";
import { Icon } from "../../shared/Icon";
import { InputNumber } from "../../shared/InputNumber";
import s from './index.module.scss'
import { DatePicker } from "../../shared/DatePicker";
import Dayjs from "../../shared/dayjs";
import { TypeChooser } from "../../shared/TypeChooser";

export const ItemCreate = defineComponent({
    setup(props, context) {
        const amountRef = ref<number>(50)
        const dateRef = ref<Date>(new Date())
        const typeRef = ref<"+" | "-">("+");
        useSetupHeight()

        return () => (
            <div class={s.item_create}>
                <Header class={s.item_create_header}>
                    {{
                        left: () => <Icon name="error" class={s.icon} onClick={() => alert('click')} />,
                        middle: () => <div class={s.text}>Add Transition</div>,
                        right: () => <Icon name="error" class={s.icon} style={{ visibility: 'hidden' }} />
                    }}
                </Header>
                <div class={s.item_create_content}>
                    <InputNumber v-model:amount={amountRef.value} />
                    <DatePicker
                        v-model:date={dateRef.value}
                        title="Choose date"
                    />
                    <TypeChooser v-model:type={typeRef.value} />
                    <Button style={{ background: 'white', width: "100%", marginTop: "16px" }}>Add Transaction</Button>
                </div>
            </div>
        )
    },
});