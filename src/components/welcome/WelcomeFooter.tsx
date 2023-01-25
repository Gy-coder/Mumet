import { computed, defineComponent } from "vue"
import { useRoute } from "vue-router";
import { Indicator } from "../../shared/Indicator";

export const WelcomeFooter = defineComponent({
    setup() {
        const route = useRoute()
        const selected = computed(() => Number(route.path.replace(/^\/welcome\//, "")))
        return () => (
            <>
                <Indicator count={2} selected={selected.value} />
            </>
        );
    },
});