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
        }
    },
    setup(props, context) {
        const { startTime, endTime } = toRefs(props)
        const { visible, open, close } = useVisible()
        console.log(props.startTime)
        const valueTime = computed(() => new Dayjs(props.date))
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
                <ItemCreateWrapper value={"2022.01.11"} onClick={open}>
                    {{
                        icons: () => <>
                            <Icon name="date" />
                            <span>Date</span>
                        </>,
                        value: () => <>{"2020-10-01"}</>
                    }}
                </ItemCreateWrapper>

                <Popup visible={visible.value} onClickMask={close}>
                    <div>Date Picker</div>
                    <Picker
                        dataSource={[
                            yearList.value,
                            monthList.value,
                            dayList.value
                        ]}
                        value={[valueTime.value.year, valueTime.value.month, valueTime.value.day]}
                        onUpdateValue={debounce((value: number[]) => {
                            console.log(value)
                            context.emit("update:date", new Date(value[0] as number, value[1] - 1 as number, value[2] as number))
                        }, 300) as (value: Array<string | number>) => void}
                    />
                </Popup >

            </>

        );
    },
});


