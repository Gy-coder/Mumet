import { defineComponent } from "vue"
import { WelcomeLayout } from "./WelcomeLayout";
import { Icon } from "../../shared/Icon";

export const First = defineComponent({
    render() {
        return <WelcomeLayout>
            {{
                icon: () => <Icon name="first" />,
                title: () => <>Manage your money easily, without any hassle</>,
                subtitle: () => <>Mumet will help you manage expenses and income easily without any hassle</>
            }}
        </WelcomeLayout>
    }
});