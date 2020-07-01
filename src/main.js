import { register, init } from "svelte-i18n";
import App from "./App.svelte";

register("en", () => import("./lang/en.json"));

init({
  fallbackLocale: "en",
  initialLocale: "en",
});

const app = new App({ target: document.body });

export default app;
