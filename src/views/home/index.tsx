import { defineComponent } from "vue"
import { Avatar } from "../../shared/Avatar";
import { FloatButton } from "../../shared/FloatButton";
import { Header } from "../../shared/Header";
import { Icon } from "../../shared/Icon";
import { MainLayout } from "../../shared/MainLayout";
import { SwipeCell } from "../../shared/SwipeCell";
import s from './index.module.scss';

export const Home = defineComponent({
    setup(props, context) {
        return () => (
            <MainLayout>{{
                header: () => <Header>{{
                    left: () => <div class={s.title_wrapper}>
                        <span class={s.subtitle}>Hi, Clara</span>
                        <span class={s.title}>Welcome to Mumet</span>
                    </div>,
                    right: () => <Avatar />,
                }}</Header>,
                main: () => (<>
                    <div class={s.balance}>
                        <div class={s.balance_content}>
                            <div class={s.balance_content_header}>
                                <span class={s.balance_content_header_hint}>Balance this month</span>
                                <span class={s.balance_content_header_number}>$ 1500.00</span>
                            </div>
                            <div class={s.balance_content_main}>
                                <div class={s.balance_content_main_income}>
                                    <div class={s.balance_content_main_income_icon}>
                                        <Icon name="arrow" />
                                    </div>
                                    <div class={s.balance_content_main_income_text}>
                                        <span class={s.balance_content_main_income_text_hint}>income</span>
                                        <span class={s.balance_content_main_income_text_price}>$ 500.00</span>
                                    </div>
                                </div>
                                <div class={s.balance_content_main_outcome}>
                                    <div class={s.balance_content_main_outcome_icon}>
                                        <Icon name="arrow" />
                                    </div>
                                    <div class={s.balance_content_main_outcome_text}>
                                        <span class={s.balance_content_main_outcome_text_hint}>outcome</span>
                                        <span class={s.balance_content_main_outcome_text_price}>$ 500.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class={s.transactions}>
                        <div class={s.transactions_header}>
                            <span class={s.transactions_header_hint}>Transactions</span>
                            <span class={s.transactions_header_action}>See all</span>
                        </div>
                        <div class={s.transactions_content}>
                            <div class={s.transactions_content_recent_header}>Recent Transactions</div>
                            <div class={s.transactions_content_recent_content}>
                                <SwipeCell>
                                    {{
                                        left: () => <div>123123123</div>,
                                        default: () => <div class={s.transactions_content_recent_item}>
                                            <div class={s.transactions_content_recent_item_tag}>
                                                🍔
                                            </div>
                                            <div class={s.transactions_content_recent_item_info}>
                                                <span class={s.transactions_content_recent_item_info_name}>Burger</span>
                                                <span class={s.transactions_content_recent_item_info_note}>Eat & Drink</span>
                                            </div>
                                            <div class={s.transactions_content_recent_item_price}>$&nbsp;20000</div>
                                        </div>
                                    }}
                                </SwipeCell>
                                <div class={s.transactions_content_recent_item}>
                                    <div class={s.transactions_content_recent_item_tag}>
                                        🍔
                                    </div>
                                    <div class={s.transactions_content_recent_item_info}>
                                        <span class={s.transactions_content_recent_item_info_name}>Burger</span>
                                        <span class={s.transactions_content_recent_item_info_note}>Eat & Drink</span>
                                    </div>
                                    <div class={s.transactions_content_recent_item_price}>$&nbsp;20000</div>
                                </div>
                                <div class={s.transactions_content_recent_item}>
                                    <div class={s.transactions_content_recent_item_tag}>
                                        🍔
                                    </div>
                                    <div class={s.transactions_content_recent_item_info}>
                                        <span class={s.transactions_content_recent_item_info_name}>Burger</span>
                                        <span class={s.transactions_content_recent_item_info_note}>Eat & Drink</span>
                                    </div>
                                    <div class={s.transactions_content_recent_item_price}>$&nbsp;20000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FloatButton onClick={() => console.log(1)} />
                </>)
            }
            }</MainLayout >
        );
    },
});