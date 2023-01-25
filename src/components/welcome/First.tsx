import { defineComponent } from "vue"
import { WelcomeLayout } from "./WelcomeLayout";
import icon from '../../assets/icons/First.svg'

export const First = defineComponent({
    render() {
        return <WelcomeLayout>
            {{
                icon: () => <img src={icon} />,
                title: () => <>Manage your money easily, without any hassle</>,
                subtitle: () => <>Mumet will help you manage expenses and income easily without any hassle</>
            }}
        </WelcomeLayout>
    }
});