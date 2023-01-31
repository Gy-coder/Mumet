import { defineComponent } from "vue"
import { Icon } from "../../shared/Icon";
import s from './TransactionItem.module.scss'

export const TransactionItem = defineComponent({
    props: {
        tag: {
            type: String || Icon,
            default: true
        },
        name: {
            type: String,
            default: true
        },
        info: {
            type: String,
            default: true
        },
        price: {
            type: String || Number,
            default: true
        }
    },
    setup(props, context) {
        return () => (
            <div class={s.transaction_item}>
                <div class={s.transaction_item_tag}>
                    {props.tag}
                </div>
                <div class={s.transaction_item_info}>
                    <span class={s.transaction_item_info_name}>
                        {props.name}
                    </span>
                    <span class={s.transaction_item_info_note}>
                        {props.info}
                    </span>
                </div>
                <div class={s.transaction_item_price}>
                    $&nbsp;{props.price}
                </div>
            </div>
        );
    },
});