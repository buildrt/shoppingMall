import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home');

const Category = () => import('../views/category/Category');
const FruitSearch = () => import('../views/category/fruitSearch/FruitSearch');
const FruitInfoAdmin = () => import('../views/fruitInfoAdmin/FruitInfoAdmin');
const RetailerSearch = () => import('../views/category/retailerSearch/RetailerSearch');
const RetailerInfo = () => import('../views/retailerInfo/RetailerInfo');
const ContractSearch = () => import('../views/category/contractSearch/ContractSearch');
const ContractInfo = () => import('../views/contractInfo/ContractInfo');

const Profile = () => import('../views/profile/Profile');

const Login = () => import('../views/login/Login');
const Register = () => import('../views/register/Register');

Vue.use(Router);

const routes= [
  {
    path: '',
    redirect: './home'
  },
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
      title: '首页'
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: '分类'
    },
    children: [
      {
        path: '',
        redirect: 'fruitSearch',
      },
      {
        path: 'fruitSearch',
        component: FruitSearch,
      },
      {
        path: 'retailerSearch',
        component: RetailerSearch
      },
      {
        path: 'contractSearch',
        component: ContractSearch
      }
    ]
  },
  {
    path: '/fruitInfoAdmin',
    component: FruitInfoAdmin,
    meta: {
      title: '管理员货物界面'
    }
  },
  {
    path: '/retailerInfo',
    component: RetailerInfo,
    meta: {
      title: '零售商管理界面'
    }
  },
  {
    path: '/contractInfo',
    component: ContractInfo,
    meta: {
      title: '采购合同界面'
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
  mode: 'hash',
});

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
});

export default router