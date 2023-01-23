import { defineComponent } from "vue"
import icon from '../../assets/icons/save-money.svg'
import { WelcomeLayout } from "./WelcomeLayout";

export const Third = defineComponent({
    render() {
        return <WelcomeLayout index={3}>
            {{
                icon: () => <img src={icon} />,
                text: () => <>Third</>
            }}
        </WelcomeLayout>
    }
});