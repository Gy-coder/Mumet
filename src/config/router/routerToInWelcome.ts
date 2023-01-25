import { throttle } from "../../shared/throttle"
import { RouteLocationNormalizedLoaded, Router } from 'vue-router'

export const routerTo: Record<string, string> = {
    "/welcome/1": "/welcome/2",
    "/welcome/2": "/start"
}

export const replaceRouter = throttle((router: Router, route: RouteLocationNormalizedLoaded) => router.replace(routerTo[route.path]), 500)