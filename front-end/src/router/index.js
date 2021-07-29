/* eslint-disable */ 
import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';


const routes = [
  {
    path: '/',
    name: 'Create New Employee',
    component: () => import('../components/create-employee/CreateEmployeeComponent'),
  },
  {
    path: '/list-employees',
    name: 'List All Employees',
    component: () => import('../components/list-employee/ListEmployeeComponent'),
  },
  {
    path: '/edit-employee/:id',
    name: 'Update Employee',
    component: () => import('../components/edit-employee/EditEmployeeComponent'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  NProgress.done();
});


export default router;
