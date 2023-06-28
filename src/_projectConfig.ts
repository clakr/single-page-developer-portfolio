import { Plugin } from "vue";

function changeTextContent(element: HTMLTitleElement | Element | null) {
  if (!element) return;

  element.textContent = import.meta.env.VITE_PROJECT_NAME;
}

function addSRHeading() {
  const main = document.querySelector("#app");
  if (!main) return;

  main.insertAdjacentHTML("afterbegin", '<h1 class="sr-only"></h1>');

  const heading = document.querySelector(".sr-only");
  changeTextContent(heading);
}

const projectConfig: Plugin = {
  install(app, option) {
    app.provide("addSRHeading", addSRHeading);

    const title = document.querySelector("title");
    changeTextContent(title);

    if (!option || !option.dark) return;
    document.documentElement.setAttribute("data-theme", "dark");
  },
};

export default projectConfig;
  