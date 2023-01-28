import { defineComponent } from "vue"
import { RouterLink, RouterLinkProps } from 'vue-router';
import { Icon } from "../../shared/Icon";
import s from './index.module.scss';

export const Nav = defineComponent({
    setup(props, context) {
        return () => (
            <div class={s.nav}>
                <div class={s.item}>
                    <RouterLink to="/home" activeClass={s.active}>
                        <Icon name="home" />
                    </RouterLink>
                </div>
                <div class={s.item}>
                    <RouterLink to="/splash" activeClass={s.active}>
                        <Icon name="home" />
                    </RouterLink>
                </div>
                <div class={s.item}>
                    <RouterLink to="/home3" activeClass={s.active}>
                        <Icon name="home" />
                    </RouterLink>
                </div>
                <div class={s.item}>
                    <RouterLink to="/home4" activeClass={s.active}>
                        <Icon name="home" />
                    </RouterLink>
                </div>
            </div>
        );
    },
});