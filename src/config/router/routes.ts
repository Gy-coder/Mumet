import { RouteRecordRaw } from "vue-router";
import { First } from "../../components/welcome/First";
import { Second } from "../../components/welcome/Second";
import { Splash } from "../../views/splash";
import { Welcome } from "../../views/welcome";

export const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/splash' },
    { path: '/splash', component: Splash },
    {
        path: '/welcome',
        component: Welcome,
        children: [
            { path: "1", component: First },
            { path: "2", component: Second }
        ]
    }
]