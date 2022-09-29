import Home from '~/pages/Home/Home';
import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';
import ForgotPassword from '~/pages/Auth/SignIn/ForgotPassword';
import Profile from '~/pages/Profile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: SignIn, layout: null },
    { path: '/register', component: SignUp, layout: null },
    { path: '/forgot-password', component: ForgotPassword, layout: null },
    { path: '/profile', component: Profile },
];

export { publicRoutes };
