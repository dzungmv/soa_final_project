import Home from '~/pages/Home/Home';
import Login from '~/pages/Login';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: null },
];

export { publicRoutes };
