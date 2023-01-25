import { defineComponent } from "vue"
import { WelcomeLayout } from "./WelcomeLayout";
import icon from '../../assets/icons/Second.svg'


export const Second = defineComponent({
    render() {
        return <WelcomeLayout>
            {{
                icon: () => <img src={icon} />,
                title: () => <>Analysis monthly expenses, for better finances</>,
                subtitle: () => <>All your financial flows will be recorded with Mumet, we will help you to organize it</>
            }}
        </WelcomeLayout>
    }
});