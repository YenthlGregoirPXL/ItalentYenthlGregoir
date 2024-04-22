import  { createRouter, createWebHistory } from 'vue-router'
import ActivityScreen from "@/screens/ActivityScreen";
import HomeScreen from "@/screens/HomeScreen";
import ActivitiesListScreen from "@/screens/ActivitiesListScreen";
import AboutMeScreen from "@/screens/AboutMeScreen";
import fontysPage from "@/screens/Activiteiten/fontysPage";
import HackatonPage from "@/screens/Activiteiten/HackatonPage";
import PopSessiePage from "@/screens/Activiteiten/PopSessiePage";
import EndReflectionScreen from "@/screens/EndReflectionScreen";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeScreen
    },
    {
        path: '/about-me',
        name: 'AboutMe',
        component: AboutMeScreen
    },
    {
        path: '/activity',
        name: 'Activity',
        component: ActivityScreen,
        props: true // Zorg ervoor dat de props worden doorgegeven aan het component
    },
    {
        path: '/activities',
        name: 'Activities',
        component: ActivitiesListScreen,
    },
    {
        path: '/activities/fontys',
        name: 'Fontys',
        component: fontysPage,
    },
    {
        path: '/activities/hackaton',
        name: 'Hackaton',
        component: HackatonPage,
    },
    {
        path: '/activities/popsessie',
        name: 'PopSessie',
        component: PopSessiePage,
    },
    {
        path: '/reflection',
        name: 'EndReflection',
        component: EndReflectionScreen,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router