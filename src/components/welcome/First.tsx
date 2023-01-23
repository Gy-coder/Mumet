import { defineComponent } from "vue"
import icon from '../../assets/icons/save-money.svg'
import { WelcomeLayout } from "./WelcomeLayout";

export const First = defineComponent({
    render() {
        return <WelcomeLayout>
            {{
                icon: () => <img src={icon} />,
                text: () => <>Spend Smarter Save More</>
            }}
        </WelcomeLayout>
    }
});