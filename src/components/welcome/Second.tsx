import { defineComponent } from "vue"
import { WelcomeLayout } from "./WelcomeLayout";
import icon from '../../assets/icons/save-money.svg'


export const Second = defineComponent({
    render() {
        return <WelcomeLayout>
            {{
                icon: () => <img src={icon} />,
                text: () => <>fuck</>
            }}
        </WelcomeLayout>
    }
});