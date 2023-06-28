import { createApp } from "vue";
import App from "./App.vue";
import authorModal from "./_authorModal";
import projectConfig from "./_projectConfig";
import "./_preflight.css";
import "./style.css";

createApp(App)
  .use(projectConfig, { dark: true })
  .use(authorModal)
  .mount("#app");
