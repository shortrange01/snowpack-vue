import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");

import './assets/scss/destyle.css';
import './assets/scss/style.scss';

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.unmount();
  });
}
