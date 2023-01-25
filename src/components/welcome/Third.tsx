import { defineComponent } from "vue"
import { WelcomeLayout } from "./WelcomeLayout";
import icon from '../../assets/icons/First.svg'


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