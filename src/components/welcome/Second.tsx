import { defineComponent } from "vue"
import { WelcomeLayout } from "./WelcomeLayout";
import icon from '../../assets/icons/second.svg'
import { Icon } from "../../shared/Icon";


export const Second = defineComponent({
    render() {
        return <WelcomeLayout>
            {{
                icon: () => <Icon name="second" />,
                title: () => <>Analysis monthly expenses, for better finances</>,
                subtitle: () => <>All your financial flows will be recorded with Mumet, we will help you to organize it</>
            }}
        </WelcomeLayout>
    }
});