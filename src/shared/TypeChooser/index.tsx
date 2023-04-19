import { PropType, computed, defineComponent } from "vue"
import { ItemCreateWrapper } from "../../components/items/item_create_wrapper";
import { Icon } from "../Icon";
import { useVisible } from "../../hooks/useVisible";
import { Picker } from "../Picker";
import { Popup } from "../Popup";
import { invert } from 'lodash'

const typeToLabel: Record<"+" | '-', "Income" | "Outcome"> = {
    "+": "Income",
    "-": "Outcome"
}

const labelToType = invert(typeToLabel)

export const TypeChooser = defineComponent({
    props: {
        type: String as PropType<"+" | "-">
    },
    setup(props, context) {
        const typeLabel = computed(() => typeToLabel[props.type!])
        const { visible, open, close } = useVisible()
        return () => (
            <>
                <ItemCreateWrapper onClick={open}>
                    {{
                        icons: () => <>
                            <Icon name="type" />
                            <span>Type</span>
                        </>,
                        value: () => <>{typeToLabel[props.type!]}</>
                    }}
                </ItemCreateWrapper>
                <Popup visible={visible.value} onClickMask={close}>
                    <Picker
                        dataSource={[["Income", "Outcome"]]}
                        value={[typeLabel.value] as string[]}
                        title="Choose type"
                        onCancel={close}
                        onUpdateValue={(value) => {
                            context.emit("update:type", labelToType[value[0]])
                        }}
                    />
                </Popup>
            </>
        );
    },
});