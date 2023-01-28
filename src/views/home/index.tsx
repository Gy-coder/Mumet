import { defineComponent } from "vue"
import { useSetupHeight } from "../../hooks/useSetupHeight";
import { MainLayout } from "../../shared/MainLayout";

export const Home = defineComponent({
    setup(props, context) {
        useSetupHeight()
        return () => (
            <MainLayout>{{
                default: () => <>Default</>
            }}</MainLayout>
        );
    },
});