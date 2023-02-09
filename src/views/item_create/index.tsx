import { defineComponent, ref } from "vue"
import { useSetupHeight } from "../../hooks/useSetupHeight";
import { Button } from "../../shared/Button";
import { Header } from "../../shared/Header";
import { Icon } from "../../shared/Icon";
import { InputNumber } from "../../shared/InputNumber";
import { Picker } from "../../shared/Picker";
import s from './index.module.scss'

export const ItemCreate = defineComponent({
    setup(props, context) {
        const amountRef = ref(50)
        useSetupHeight()
        return () => (
            <div class={s.item_create}>
                <Header class={s.item_create_header}>
                    {{
                        left: <Icon name="error" class={s.icon} />,
                        middle: <div class={s.text}>Add Transition</div>,
                        right: <Icon name="error" class={s.icon} style={{ visibility: 'hidden' }} />
                    }}
                </Header>
                <div class={s.item_create_content}>
                    <InputNumber v-model:amount={amountRef.value} />
                    <Picker dataSource={[
                        new Array(20).fill(0).map((_, i) => i),
                        new Array(10).fill(0).map((_, i) => i),
                        new Array(5).fill(0).map((_, i) => i)]}
                    />
                    <Button style={{ background: 'white', width: "100%" }}>Add Transaction</Button>
                </div>
            </div>
        )
    },
});