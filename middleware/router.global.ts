export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/setting') {
    return navigateTo('/setting/editName');
  }
});