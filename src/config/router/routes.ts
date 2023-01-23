import { RouteRecordRaw } from "vue-router";
import { First } from "../../components/welcome/First";
import { Second } from "../../components/welcome/Second";
import { Third } from "../../components/welcome/Third";
import { WelcomeFooter } from "../../components/welcome/WelcomeFooter";
import { Splash } from "../../views/splash";
import { Welcome } from "../../views/welcome";

export const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/welcome' },
    { path: '/splash', component: Splash },
    {
        path: '/welcome',
        component: Welcome,
        children: [
            { path: "", redirect: "/welcome/1" },
            {
                path: "1", components: {
                    main: First,
                    footer: WelcomeFooter
                }
            },
            {
                path: "2", components: {
                    main: Second,
                    footer: WelcomeFooter
                }
            },
            {
                path: "3", components: {
                    main: Third,
                    footer: WelcomeFooter
                }
            }
        ]
    }
]