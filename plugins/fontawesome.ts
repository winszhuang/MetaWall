import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faArrowAltCircleRight, faBell } from '@fortawesome/free-regular-svg-icons';

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

library.add(faMagnifyingGlass, faThumbsUp, faArrowAltCircleRight, faBell);

// Register the component globally
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
});