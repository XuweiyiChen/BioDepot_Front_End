import { createApp } from 'vue';

import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

import App from './app.vue';
const app = createApp(App);

app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})
app.mount('#app');

Neutralino.init();
