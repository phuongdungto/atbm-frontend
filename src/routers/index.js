import { DefaultLayout } from "../components/Layouts";
import Login from "../pages/auth/login/login";
import Signup from "../pages/auth/signup/signup";
const publicRoutes = [
    // { path: '/', component: Home },
    // { path: '*', component: Error404, layout: null },
    { path: '/login', component: Login, layout: DefaultLayout },
    { path: '/signup', component: Signup },
]

export { publicRoutes }