import Admin from "./pages/Admin";
import {ADMIN_ROUTE,  DEVICE_ROUTE, LOGIN_ROUTE, REDIRECT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Shop from "./pages/Market";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import redirect from "./pages/redirect";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: REDIRECT_ROUTE,
        Component: redirect
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
]
