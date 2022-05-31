import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
const app = createApp(App)
// 样式
import '@/assets/css/index.less';
import '@/assets/css/normalize.css';
// elementUI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 路由
import "./beforeRouter";

// import "@/utils/font";
app.use(ElementPlus)
app.use(store).use(router).mount("#app");
