import { RoutePathEnum } from '@/enum/routePathEnum'

const ls = useLocalStorage()

const noNeedAuthRoute = [
  RoutePathEnum.Login,
  RoutePathEnum.Register
]

export default defineNuxtRouteMiddleware((to, from) => {
  const currentRouteThatNoNeedAuth = noNeedAuthRoute.includes(to.path as RoutePathEnum)

  if (!currentRouteThatNoNeedAuth && !ls.getToken()) {
    if (process.client) {
      return navigateTo(RoutePathEnum.Login)
    }
  }

  if (currentRouteThatNoNeedAuth && ls.getToken()) {
    if (process.client) {
      return navigateTo(RoutePathEnum.Home)
    }
  }

  if (to.path === RoutePathEnum.Setting) {
    if (process.client) {
      return navigateTo(RoutePathEnum.EditName)
    }
  }

  navigateTo(to)
})
