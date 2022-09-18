import Home from '~/pages/Home/Home';
import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: SignIn, layout: null },
    { path: '/register', component: SignUp, layout: null },
];

export { publicRoutes };
