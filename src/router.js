import {createRouter,createWebHistory} from "vue-router"
import Home from "./pages/home.vue";
import News from "./pages/newsPage.vue";
import NewsDetail from "./pages/newsDetail.vue";
import Overview from "./pages/overviewPage.vue";
import errorPage from "./pages/errorPage.vue";

const routes = [
    {
        path:"/",
        component: Home,
    },
    {
        path:"/news",
        component: News,
    },
    {
        path:"/news/:id",
        component: NewsDetail,
    },
    {
        path:"/overview",
        component: Overview,
    },
    {
        path:"/:pathMatch(.*)",
        name:'404',
        component: errorPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;