import Login from '../Pages/Login';
import Home from '../Pages/Home'
const publicRoutes = [
    { path:'/login' , page: Login , layout: null},
    { path:'/home' , page: Home}
]

export { publicRoutes };