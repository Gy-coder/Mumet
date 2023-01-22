import { RouteRecordRaw } from "vue-router";
import { Bar } from "../../views/Bar";
import { Foo } from "../../views/Foo";

export const routes: RouteRecordRaw[] = [
    { path: '/', component: Foo },
    { path: '/about', component: Bar },
]