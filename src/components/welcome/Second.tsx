import { defineComponent } from "vue"
import { WelcomeLayout } from "./WelcomeLayout";
import icon from '../../assets/icons/First.svg'


export const Second = defineComponent({
    render() {
        return <WelcomeLayout index={2}>
            {{
                icon: () => <img src={icon} />,
                text: () => <>Spend Smarter Save More</>
            }}
        </WelcomeLayout>
    }
});