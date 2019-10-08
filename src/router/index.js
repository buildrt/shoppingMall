import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home');
const Profile = () => import('../views/profile/Profile');

const Login = () => import('../views/login/Login');
const Register = () => import('../views/register/Register');

Vue.use(Router);

const routes= [
  {
    path: '/login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      title: '注册'
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '我的'
    }
  }
];

const router = new Router({
  routes,
  mode: 'history',
});

export default router