import { defineComponent } from "vue"
import { WelcomeLayout } from "./WelcomeLayout";
import icon from '../../assets/icons/First.svg'

export const First = defineComponent({
    render() {
        return <WelcomeLayout index={1}>
            {{
                icon: () => <img src={icon} />,
                text: () => <>Spend Smarter Save More</>
            }}
        </WelcomeLayout>
    }
});