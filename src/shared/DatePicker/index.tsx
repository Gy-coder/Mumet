import { PropType, computed, defineComponent, ref, toRefs } from "vue"
import s from './index.module.scss'
import { ItemCreateWrapper } from "../../components/items/item_create_wrapper";
import { useVisible } from "../../hooks/useVisible";
import { Icon } from "../Icon";
import { Popup } from "../Popup";
import { Picker } from "../Picker";
import Dayjs from "../dayjs";
import { debounce } from 'lodash'


export const DatePicker = defineComponent({
    props: {
        date: {
            type: Date,
            default: () => new Date()
        },
        startTime: {
            type: Date,
        },
        endTime: {
            type: Date,
        },
        title: {
            type: String
        },
        onCancel: {
            type: Function as PropType<() => void>
        },
        onConfirm: {
            type: Function as PropType<() => void>
        }
    },
    setup(props, context) {
        const { startTime, endTime } = toRefs(props)
        const { visible, open, close } = useVisible()
        const valueTime = ref(new Dayjs(props.date))
        const start = startTime.value ? new Dayjs(startTime.value) : new Dayjs().add(-10, 'year')
        const end = endTime.value ? new Dayjs(endTime.value) : new Dayjs().add(10, 'year')
        if (start.timestamp >= end.timestamp) {
            throw new Error("startTime must less than endTime")
        }
        const yearList = computed(() => Array.from({ length: end.year - start.year + 1 })
            .map((_, index) => start.year + index))
        const monthList = computed(() => Array.from({ length: 12 }).map((_, index) => index + 1))
        const dayList = computed(() => Array.from({ length: valueTime.value.lastDayOfMonth().day }).map((_, index) => index + 1))
        console.log([
            yearList.value,
            monthList.value,
            dayList.value
        ]);

        return () => (
            <>
                <ItemCreateWrapper value={new Dayjs(props.date).format()} onClick={open}>
                    {{
                        icons: () => <>
                            <Icon name="date" />
                            <span>Date</span>
                        </>,
                        value: () => <>{new Dayjs(props.date).format()}</>
                    }}
                </ItemCreateWrapper>

                <Popup visible={visible.value} onClickMask={close}>
                    <Picker
                        title={props.title}
                        onCancel={close}
                        onConfirm={
                            () => {
                                context.emit("update:date", valueTime.value.raw)
                                close()
                            }
                        }
                        dataSource={[
                            yearList.value,
                            monthList.value,
                            dayList.value
                        ]}
                        value={[valueTime.value.year, valueTime.value.month, valueTime.value.day]}
                        onUpdateValue={debounce((value: number[]) => {
                            console.log(value)
                            valueTime.value = new Dayjs(new Date(value[0] as number, value[1] - 1 as number, value[2] as number))
                        }, 300) as (value: Array<string | number>) => void}
                    />
                </Popup >

            </>

        );
    },
});


